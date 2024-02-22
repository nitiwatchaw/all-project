//todo web server with express (อย่าลืม run server => $ node app)

const express = require('express')
const app = express()
const path = require('path')

const router = require('./routes/myRouter')

const cookieParser = require('cookie-parser')

const session = require('express-session')


// อ้างอิง dynamic file  (จะแสดงผล index.ejs เป็นหน้าแรกเสมอ )
app.set('views', path.join(__dirname, 'views'))
// เรียกใช้ view engine ของ template engine
app.set('view engine', 'ejs')



//* middleware => การกรอง request ที่ส่งมาตัว server (router , urlencode ,cookieParser )

app.use(session({ name: "session-login", secret: "mysession", resave: false, saveUninitialized: false }))

//ให้ url ทำการencode ที่ส่งมายัง req.body
app.use(express.urlencoded({ extended: false }))

//use cookieParser
app.use(cookieParser())

//เรียกใช้ router ใน folder routes
app.use(router)




//อ้างอิง static file (ที่อยู่ใน folder pulic / จะมองหา index.html ให้เป็นหน้าแรก)
app.use(express.static(path.join(__dirname, 'public')))



app.listen(8080, () => {
    console.log("Run server at 8080")
})