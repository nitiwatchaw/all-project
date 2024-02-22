const button = document.querySelector('.btn-hide');

const sideWrapper = document.querySelector('.side-wrapper');
//เปิดอยู่
const display2old = document.querySelector('.display-2-old');
//ปิดอยู่
const display2 = document.querySelector('.display-2');



button.addEventListener('click', function () {
    sideWrapper.classList.toggle('unhide-side');


    const togglegraphhh = document.getElementById('toggle-dashboard')
    const togglecard = document.getElementById('toggle-card');
    const togglelastcard = document.getElementById('toggle-lastcard');

    const togglegraphhh2 = document.getElementById('toggle-dashboard-2')
    const togglecard2 = document.getElementById('toggle-card-2');
    const togglelastcard2 = document.getElementById('toggle-lastcard-2');

    togglegraphhh.classList.remove('animate__animated', 'animate__pulse');
    togglegraphhh2.classList.remove('animate__animated', 'animate__pulse');

    togglecard.classList.remove('animate__animated', 'animate__pulse');
    togglecard2.classList.remove('animate__animated', 'animate__pulse');

    togglelastcard.classList.remove('animate__animated', 'animate__pulse');
    togglelastcard2.classList.remove('animate__animated', 'animate__pulse');

});


//active animation
function clicker_animation() {
    //button variation
    const dashboard = document.getElementById('dashboard');
    const promotion_btn = document.getElementById('promotion-btn');
    const payment_btn = document.getElementById('payments-btn');


    //object animation
    const togglegraphhh = document.getElementById('toggle-dashboard')
    const togglegraphhh2 = document.getElementById('toggle-dashboard-2')


    const togglecard = document.getElementById('toggle-card');
    const togglecard2 = document.getElementById('toggle-card-2');


    const togglelastcard = document.getElementById('toggle-lastcard');
    const togglelastcard2 = document.getElementById('toggle-lastcard-2');



    dashboard.addEventListener('click', function () {
        togglegraphhh.classList.add('animate__animated', 'animate__pulse');
        togglegraphhh2.classList.add('animate__animated', 'animate__pulse');

        togglecard.classList.remove('animate__animated', 'animate__pulse');
        togglecard2.classList.remove('animate__animated', 'animate__pulse');

        togglelastcard.classList.remove('animate__animated', 'animate__pulse');
        togglelastcard2.classList.remove('animate__animated', 'animate__pulse');
    });

    promotion_btn.addEventListener('click', function () {
        togglecard.classList.add('animate__animated', 'animate__pulse');
        togglecard2.classList.add('animate__animated', 'animate__pulse');

        togglegraphhh.classList.remove('animate__animated', 'animate__pulse');
        togglegraphhh2.classList.remove('animate__animated', 'animate__pulse');

        togglelastcard.classList.remove('animate__animated', 'animate__pulse');
        togglelastcard2.classList.remove('animate__animated', 'animate__pulse');
    });
    payment_btn.addEventListener('click', () => {  //function ได้เหมือนกัน
        togglelastcard.classList.add('animate__animated', 'animate__pulse');
        togglelastcard2.classList.add('animate__animated', 'animate__pulse');

        togglecard.classList.remove('animate__animated', 'animate__pulse');
        togglecard2.classList.add('animate__animated', 'animate__pulse');

        togglegraphhh.classList.remove('animate__animated', 'animate__pulse');
        togglegraphhh2.classList.remove('animate__animated', 'animate__pulse');
    });

}
clicker_animation()



//ฟังชั่นท์ใส่ชื่อ + จำนวนของให้เมนู
function count_number() {
    var new_num = document.getElementsByName("new");
    document.getElementById("num-new").innerHTML = "New " + "(" + new_num.length + ")";
    var pend_num = document.getElementsByName("pend");
    document.getElementById("num-pend").innerHTML = "Pending " + "(" + pend_num.length + ")";




    //เงื่อนการเปลี่ยนชื่อเมนู เพราะชื่อยาวเกินไป มันเลยตกบรรทัด -_- "Delivered"

    if (Del_name.matches) { // If media query matches
        var del_num = document.getElementsByName("del");
        document.getElementById("num-del").innerHTML = "Delivered " + "(" + del_num.length + ")";
    } else {
        var del_num = document.getElementsByName("del");
        document.getElementById("num-del").innerHTML = "DEL " + "(" + del_num.length + ")";
    }

    //การรวมจำนวนไปใส่ใน notify (bell)
    var sum_num = new_num.length + pend_num.length + del_num.length;
    document.getElementById("sum-num").innerHTML = sum_num;


}

var Del_name = window.matchMedia("(min-width: 1400px)")
count_number(Del_name) // Call listener function at run time
Del_name.addListener(count_number) // Attach listener function on state changes

count_number()



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


//open setting menu
function clickforsetting() {
    const settingMenu = document.getElementById('popup_menu');

    if (settingMenu.style.display == 'none') {
        settingMenu.style.display = 'block';


      
    }

    else {
        settingMenu.style.display = 'none';
    }




}













//hover 
const ani = document.querySelector('.bell');
ani.addEventListener('mouseenter', function () { ani.classList.add('animate__animated', 'animate__tada') });
ani.addEventListener('mouseleave', function () { ani.classList.remove('animate__animated', 'animate__tada') });




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
    document.getElementById('bottonBorder-pend').style.display = 'none';
    document.getElementById('bottonBorder-new').style.display = 'none';
    document.getElementById('bottonBorder-del').style.display = 'block';

    document.getElementById('num-del').style.color = 'white';
    document.getElementById('num-pend').style.color = 'rgba(167, 207, 253, 255)';
    document.getElementById('num-new').style.color = 'rgba(167, 207, 253, 255)';
})













