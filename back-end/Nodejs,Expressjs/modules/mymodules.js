// service working project

function getCurrentTime() {
    return new Date()
}


function add(x, y) {
    return x + y
}



//ส่งออกคำสั่งไปใช้งาน
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add