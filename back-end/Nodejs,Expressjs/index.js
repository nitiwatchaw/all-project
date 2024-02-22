//? วิธีที่1
const getCurrentTime = require('./modules/mymodules').getCurrentTime
console.log(getCurrentTime())

//? วิธีที่2
const thisModule = require('./modules/mymodules')
console.log("function add is", thisModule.add(2, 3))


//blocking
const fs = require('fs')


//อ่านไฟล์   (utf-8 => สามารถอ่านภาษาไทยได้)
const data = fs.readFileSync('myfile/input.txt', 'utf-8')
console.log("read file .txt => ", data)

//เขียนไฟล์
const outputText = `Hello Node.js \n${data}\n ไฟล์ถูกเขียนเมื่อ ${new Date()}`

//เป้นการสร้าง file ที่ชื่อว่า output.txt 
fs.writeFileSync("myFile/output.txt", outputText)



//non-blocking (async)
fs.readFile("myFile/input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("warning error", err)
    }
    const outputText = `Node JS  \n${data}\n  This file write on ${new Date()}`
    fs.writeFile("myFile/output-nonBlock.txt", outputText, err => {
        if (err) {
            console.log("warning error", err)
        }
        console.log("Writed File")
    })
})


//todo web server with nodejs (อย่าลืม run server => $ node index)

//nodejs 
const http = require('http')
const url = require('url')

//สร้างตัวแปร ไฟล์ index.html 
const indexPage = fs.readFileSync(`${__dirname}/public/index.html`, 'utf-8')
const productPage1 = fs.readFileSync(`${__dirname}/public/product1.html`, 'utf-8')
const productPage2 = fs.readFileSync(`${__dirname}/public/product2.html`, 'utf-8')
const productPage3 = fs.readFileSync(`${__dirname}/public/product3.html`, 'utf-8')


const server = http.createServer((req, res) => {

    //กำหนด path
    const { pathname, query } = url.parse(req.url, true)

    if (pathname === '/' || pathname === "/home") {
        //เชื่อมไฟล์เข้า server
        res.end(indexPage)
    }

    else if (pathname === "/product") {
        //product ชื้นที่1
        if (query.id === '1') {
            res.end(productPage1)
        } else if (query.id === '2') {
            res.end(productPage2)
        }

        else if (query.id === '3') {
            res.end(productPage3)
        } else {
            res.end("<h1>Not Found</h1>")
        }

    }
    else {
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }


})

//create port 
server.listen(8888, "localhost", () => {
    console.log("start server", new Date())
})