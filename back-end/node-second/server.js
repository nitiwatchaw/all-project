const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const url = require('url');




const indexPage = fs.readFileSync(`${__dirname}/webpages/index.html`, 'utf-8')
const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`, 'utf-8')



const server = http.createServer((req, res) => {

    //กำหนด path
    const { pathname, query } = url.parse(req.url, true)

    if (pathname === '/' || pathname === "/home") {
        //เชื่อมไฟล์เข้า server
        res.end(indexPage)
    }

    else if (pathname === "/product") {
        res.end(productPage)

    }
    else {
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }


})

const PORT = process.env.port || 3500

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))







