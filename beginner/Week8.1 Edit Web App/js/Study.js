//open profile menu
function clickforprofile() {

    var mobile = window.matchMedia("(max-width: 768px)")
    if (mobile.matches) {
        let profilee = document.getElementById('profile');
        let contain = document.getElementById('contain');
        let icon = document.getElementById('hamburger-bar-icon');
        let iconClose = document.getElementById('hamburger-bar-icon-close');
        if (profilee.style.display == 'none') {

            profilee.classList.add('animate__animated', 'animate__fadeInDown')
            contain.classList.remove('animate__animated', 'animate__fadeInUp')
            profilee.style.display = 'block';
            icon.style.display = 'none';
            iconClose.style.display = 'block';


        }
        else {
            profilee.style.display = 'none';
            profilee.classList.remove('animate__animated', 'animate__fadeInDown')
            contain.classList.add('animate__animated', 'animate__fadeInUp')
            icon.style.display = 'block';
            iconClose.style.display = 'none';
        }
    }


}





//open order mobile

function clickfororder() {
    var mobileOrder = window.matchMedia("(max-width: 992px)")

    if (mobileOrder.matches) {

        var orderContent = document.getElementById('order-content');
        var orderOpen = document.getElementById('nav-order-btn-open');
        var orderClose = document.getElementById('nav-order-btn-close');


        if (orderContent.style.display == 'block') {
            orderContent.style.display = 'none';
            orderOpen.style.display = 'block';
            orderClose.style.display = 'none';
        }
        else {
            orderContent.style.display = 'block';
            orderOpen.style.display = 'none';
            orderClose.style.display = 'block';
        }
    }

}


//close order-mobile menu when click outside item
var mobileOrder = window.matchMedia("(max-width: 992px)")
if (mobileOrder.matches) {
    window.onclick = function (event) {
        var Elem = document.getElementById('order-content');
        var orderOpen = document.getElementById('nav-order-btn-open');
        var orderClose = document.getElementById('nav-order-btn-close');
        if (event.target.contains(Elem) && event.target !== Elem) {
            Elem.style.display = 'none';
            orderOpen.style.display = 'block';
            orderClose.style.display = 'none';
        }
        else {
            orderOpen.style.display = 'none';
            orderClose.style.display = 'block';
        }


    }
}


//close order-laptop menu when click outside item




//open order laptop
function clickfororder_laptop() {
    const orderContentlaptop = document.getElementById('content-laptop');
    const orderOpenlaptop = document.getElementById('nav-order-btn-open-laptop');
    const orderCloselaptop = document.getElementById('nav-order-btn-close-laptop');

    if (orderContentlaptop.style.display == 'block') {
        orderContentlaptop.style.display = 'none';
        orderOpenlaptop.style.display = 'block';
        orderCloselaptop.style.display = 'none';
    }
    else {
        orderContentlaptop.style.display = 'block';
        orderOpenlaptop.style.display = 'none';
        orderCloselaptop.style.display = 'block';
    }
}










//การแสดงผลเนื้อหาในเมนู เปิด + ปิด

const button_new = document.querySelector('.btn-goto-new');
const new_ = document.querySelector('.menu-detail-new-open');
const new_c = document.querySelector('.menu-detail-new-close');

const button_pend = document.querySelector('.btn-goto-pend');
const pend_ = document.querySelector('.menu-detail-pend-open');
const pend_c = document.querySelector('.menu-detail-pend-close');

const button_del = document.querySelector('.btn-goto-del');
const del_ = document.querySelector('.menu-detail-del-open');
const del_c = document.querySelector('.menu-detail-del-close');


button_new.addEventListener('click', function () {
    new_.classList.toggle('menu-detail-new-close');
    new_c.classList.add('menu-detail-new-open');

    pend_c.classList.remove('menu-detail-pend-open');
    pend_.classList.add('menu-detail-pend-close');

    del_c.classList.remove('menu-detail-del-open');
    del_.classList.add('menu-detail-del-close');


});

button_pend.addEventListener('click', function () {
    pend_.classList.toggle('menu-detail-pend-close');
    pend_c.classList.remove('menu-detail-pend-close');

    new_c.classList.remove('menu-detail-new-open');
    new_.classList.add('menu-detail-new-close');

    del_c.classList.remove('menu-detail-del-open');
    del_.classList.add('menu-detail-del-close');

});

button_del.addEventListener('click', function () {
    del_.classList.toggle('menu-detail-del-close');
    del_c.classList.remove('menu-detail-del-close');

    new_c.classList.remove('menu-detail-new-open');
    new_.classList.add('menu-detail-new-close');

    pend_c.classList.remove('menu-detail-pend-open');
    pend_.classList.add('menu-detail-pend-close');

});



//focus orderMenu
const btn_hoverNew = document.getElementById('btn-bor-hover-new')
const borNew = document.getElementById('bottonBorder-new')


btn_hoverNew.addEventListener('click', function () {

    document.getElementById('bottonBorder-new').style.display = 'block';
    document.getElementById('bottonBorder-pend').style.display = 'none';
    document.getElementById('bottonBorder-del').style.display = 'none';


    document.getElementById('num-new').style.color = 'white';
    document.getElementById('num-pend').style.color = 'rgba(167, 207, 253, 255)';
    document.getElementById('num-del').style.color = 'rgba(167, 207, 253, 255)';
})




const btn_hoverPend = document.getElementById('btn-bor-hover-pend')
const borPend = document.getElementById('bottonBorder-pend')

btn_hoverPend.addEventListener('click', function () {
    document.getElementById('bottonBorder-pend').style.display = 'block';
    document.getElementById('bottonBorder-new').style.display = 'none';
    document.getElementById('bottonBorder-del').style.display = 'none';

    document.getElementById('num-pend').style.color = 'white';
    document.getElementById('num-new').style.color = 'rgba(167, 207, 253, 255)';
    document.getElementById('num-del').style.color = 'rgba(167, 207, 253, 255)';
})




const btn_hoverDel = document.getElementById('btn-bor-hover-del')
const borDel = document.getElementById('bottonBorder-del')


btn_hoverDel.addEventListener('click', function () {
    document.getElementById('bottonBorder-del').style.display = 'block';
    document.getElementById('bottonBorder-pend').style.display = 'none';
    document.getElementById('bottonBorder-new').style.display = 'none';


    document.getElementById('num-del').style.color = 'white';
    document.getElementById('num-pend').style.color = 'rgba(167, 207, 253, 255)';
    document.getElementById('num-new').style.color = 'rgba(167, 207, 253, 255)';
})




var sumNew = document.getElementsByName("new");
document.getElementById('num-new').innerHTML = " New " + "(" + sumNew.length + ")"

var sumPend = document.getElementsByName("pend");
document.getElementById('num-pend').innerHTML = " Pend" + "(" + sumPend.length + ")"
//เงื่อนการเปลี่ยนชื่อเมนู เพราะชื่อยาวเกินไป มันเลยตกบรรทัด -_- "Delivered"


function count_number() {

    if (Del_name.matches) { // If media query matches
        var del_num = document.getElementsByName("del");
        document.getElementById("num-del").innerHTML = "Delivered " + "(" + del_num.length + ")";
    } else {
        var del_num = document.getElementsByName("del");
        document.getElementById("num-del").innerHTML = "DEL " + "(" + del_num.length + ")";
    }
}


var Del_name = window.matchMedia("(min-width: 1400px)")
count_number(Del_name) // Call listener function at run time
count_number()






