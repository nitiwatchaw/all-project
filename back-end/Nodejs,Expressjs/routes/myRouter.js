//* จัดการ Routing

const express = require('express')
const router = express.Router()

const Product = require('../models/products');


//updload file
const multer = require('multer')

const storage = multer.diskStorage({

    // เก็บไฟล์ที่ถูกupload จาก form
    destination: (req, file, cb) => {
        cb(null, './public/images/products') //ตำแหน่งเก็บfile
    },
    //เปลี่ยนชื่อ file
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.jpg') //ป้องกันชื่อซ้ำกัน
    }
})


//เริ่มต้น upload เพื่อเก็บไว้ใน folder
const upload = multer({
    storage: storage
})

//แสดงเนื้อหา ใน template
router.get('/', async (req, res) => {

    // Use the Product model to find all products in the database
    const products = await Product.find().exec();

    //ส่งค่า product ในไฟล์ index 
    res.render('index', { products });

});


//เมื่อ path add-product ให้แสดงผลไฟล์ form.ejs
router.get('/add-product', (req, res) => {

    //ถ้า loginแล้ว จะให้ทำการ
    if (req.session.login) {
        res.render('form') //บันทึกสินค้า
    } else {
        res.render('admin') //เข้าสู่ระบบ
    }


})



//เมื่อ path manage ให้แสดงผลไฟล์ manage.ejs
router.get('/manage', async (req, res) => {


    try {
        //ถ้า loginแล้ว จะให้ทำการ
        if (req.session.login) {

            // Use the Product model to find all products in the database
            const products = await Product.find().exec();
            res.render('manage', { products });

        } else {
            res.render('admin') //เข้าสู่ระบบ
        }
    }
    catch (err) {
        console.error(err);
    }




})

//logout
router.get('/logout', (req, res) => {

    //clear cookie
    res.clearCookie('username')
    res.clearCookie('password')
    res.clearCookie('login')
    //clear session
    req.session.destroy(() => {
        console.log("logout")
    })
    res.redirect('/manage')
})


// //todo การเพิ่มข้อมูล
router.post('/insert', upload.single("image"), (req, res) => {

    //ดึงข้อมูลจาก Schema
    let data = {
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        description: req.body.description
    };

    //บันทึกข้อมูล
    Product.saveProduct(data)
        .then(savedProduct => {
            console.log('Product saved:', savedProduct);
            res.redirect('/');
        })
        .catch(err => {
            console.error('Error saving product:', err);
        });
});


//todo ลบข้อมูล
router.get('/delete/:id', async (req, res) => {
    try {
        // Use findByIdAndDelete directly without exec
        await Product.findByIdAndDelete(req.params.id);

        res.redirect('/manage');
    } catch (err) {
        console.error(err);

    }
});


//todo แสดงข้อมูลรายละเอียดแต่ละ ID
router.get('/:id', async (req, res) => {

    const product_id = req.params.id;
    //เข้าถึง id 
    const productSelect = await Product.findOne({ _id: product_id });

    //ถ้าหาไม่เจอ
    if (!productSelect) return res.status(404).send('Product not found');
    //แสดงรายละเอียด โดยส่งค่าเป็น product
    res.render('product', { product: productSelect });

});


//todo การเแก้ไขข้อมูล
//เข้าถึง ข้อมูล ID นั้นๆ
router.post('/edit', async (req, res) => {

    //มากจาก form => name="edit_id"
    const edit_id = req.body.edit_id;

    //เข้าถึง id 
    const prodcutEdit = await Product.findOne({ _id: edit_id });
    //เอาข้อมูลเดิมที่ต้องการแก้ไขไปแสดงผลที่ edit form
    res.render('edit', { product: prodcutEdit });
});



//แก้ไขข้อมูล
router.post('/update', async (req, res) => {

    const update_id = req.body.update_id

    //ข้อมูลให้ที่ถูกส่งมากจาก form edit
    let data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    //update data
    Product.findByIdAndUpdate(update_id, data, { useFindAndModify: false }).exec()
    res.redirect('/manage')

});




// //*Cookie


//?login
router.post('/login', (req, res) => {
    //มากจาก form => name="username"
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 30000 //10 second

    if (username === "admin" && password === "123") {
        //session
        req.session.username = username
        req.session.password = password
        req.session.login = true;
        req.session.cookie.maxAge = timeExpire
        res.redirect('/manage')
    } else {
        req.session.login = false;
        res.render('404')
    }

})


// ส่งออก 
module.exports = router