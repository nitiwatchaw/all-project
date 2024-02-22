
//Fetch
const fullnametext = document.querySelector('.fullname')
const emailUser = document.querySelector('.email')
const avatarImg = document.querySelector('.avatarImg')

//fetch sigle user

//(Fetch with Async Await)
async function getuser() {

    try {
        const response = await fetch('https://reqres.in/api/users/1')
        const Element = await response.json()
        const user = Element.data; //สร้างตัวแปลในการเรียกใช้ objectที่อยู่ข้างใน
        fullnametext.innerHTML = user.first_name + " " + user.last_name //กำหนดตัวแปร
        emailUser.innerHTML = user.email
        avatarImg.src = user.avatar

        //display
        console.log(fullnametext.innerHTML)
        console.log(emailUser.innerHTML)
    }
    catch (error) {
        console.log(error.message);
    }

}
getuser()

const fullnametext2 = document.querySelector('.fullname2')
const emailUser2 = document.querySelector('.email2')
const avatarImg2 = document.querySelector('.avatarImg2')
// (fetch with Promise)
fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then((Element) => {
        const user = Element.data; //สร้างตัวแปลในการเรียกใช้ objectที่อยู่ข้างใน
        fullnametext2.innerHTML = user.first_name + " " + user.last_name //กำหนดตัวแรป
        emailUser2.innerHTML = user.email
        avatarImg2.src = user.avatar

        //display
        console.log(fullnametext2.innerHTML)
        console.log(emailUser2.innerHTML)
    })

    .catch(error => console.log(error.message))



//fetch multiple user
const userList = document.querySelector('.user-list')

//async
async function eeeee() {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2')
        const Element = await response.json()
        const users = Element.data
        users.forEach((user) => { //สร้างตัวแปลในการเรียกใช้ object

            //อันนี้จะเป็นการสร้างdiv เพื่อคลุมcontent
            const userItem = document.createElement('div') //สร้างelement
            userItem.classList.add('user-item') //เพิ่ม class ให้ element (ลองไปส่องในconsole.log)

            //สร้างcontent
            const avatarImg = document.createElement('img')
            avatarImg.classList.add('avatar')
            avatarImg.src = user.avatar //กำหนดข้อมูล

            const fullnameText = document.createElement('h3')
            fullnameText.classList.add('fullname')
            fullnameText.innerHTML = user.first_name + ' ' + user.last_name

            const emailText = document.createElement('p')
            emailText.classList.add('email')
            emailText.innerHTML = user.email


            userItem.append(avatarImg, fullnameText, emailText) //การใส่ข้อมูลลง div
            userList.append(userItem);//การใส่ div ลงelementที่สร้างในHTML 

        })
    }
    catch (error) {
        console.log(error.message);
    }
}
eeeee()


//promise
fetch('https://reqres.in/api/users?page=2')
    .then((response) => response.json())
    .then((Element) => {
        const users = Element.data //สร้างตัวแปลในการเรียกใช้ array 
        users.forEach((user) => { //สร้างตัวแปลในการเรียกใช้ object

            //อันนี้จะเป็นการสร้างdiv เพื่อคลุมcontent
            const userItem = document.createElement('div') //สร้างelement
            userItem.classList.add('user-item') //เพิ่ม class ให้ element (ลองไปส่องในconsole.log)

            //สร้างcontent
            const avatarImg = document.createElement('img')
            avatarImg.classList.add('avatar')
            avatarImg.src = user.avatar //กำหนดข้อมูล

            const fullnameText = document.createElement('h3')
            fullnameText.classList.add('fullname')
            fullnameText.innerHTML = user.first_name + ' ' + user.last_name

            const emailText = document.createElement('p')
            emailText.classList.add('email')
            emailText.innerHTML = user.email

            userItem.append(avatarImg, fullnameText, emailText) //การใส่ข้อมูลลง div
            userList.append(userItem);//การใส่ div ลงelementที่สร้างในHTML 

        })
    })

    .catch((error) => {
        console.log(error.message);
    })



// fetch loop with create element
const dataContainer = document.getElementById("data-container")
fetch("https://jsonplaceholder.typicode.com/posts")
    //เเแปลงข้อมูล json ให้เป็น javascropt object ด้วย method .json()
    .then(response => response.json())
    .then(Element => {
        Element.forEach(post => {
            const postElement = document.createElement("p");
            postElement.innerHTML = `Post ID:${post.id} - Title:${post.title}`
            dataContainer.appendChild(postElement);

        })
    })
    .catch(error => {
        console.log("error fetching data", error)
    })

//test simple 
const testId = document.getElementById('test')
fetch("https://reqres.in/api/unknown/7")

    .then(res => res.json())
    .then((e) => {
        const data = e.data;
        testId.innerHTML = `${data.id} , ${data.year} ${data.color}`
    })


//fetch with conosle.log
fetch("https://jsonplaceholder.typicode.com/posts")

    .then(response => response.json())
    .then(Element => {
        Element.map(data => {
            console.log(`Post ID:${data.id} - Title:${data.title}`)
        })
    })
    .catch(error => {
        console.log("error fetching data", error)
    })

//Get Post
//Post ใช้สำหรับข้อมูลที่เป็นความลับ

const registerForm = document.querySelector('.register-form')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
function registerSubmit(event) {
    event.preventDefault()

    const user = {
        email: emailInput.value,
        password: passwordInput.value
    };


    fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then((element) => {
            alert('สมัครสมาชิก id =' + element.id + 'เรียบร้อย')
        })
        .catch((error) => {
            console.log(error.message)
        })
}

registerForm.addEventListener('submit', registerSubmit);


//customized
const inkDdata = document.querySelector('.inkData')

fetch("./file.json")
    .then(res => res.json())
    .then((e) => {
        const datauser = e.data
        datauser.forEach((user) => {
            const contain = document.createElement('div')
            contain.classList.add('containItem')

            const idUser = document.createElement('p')
            idUser.classList.add('idItem')
            idUser.innerHTML = user.id

            const nameUser = document.createElement('p')
            nameUser.classList.add('nameItem')
            nameUser.innerHTML = user.name

            const yearUser = document.createElement('p')
            yearUser.classList.add('yearItem')
            yearUser.innerHTML = `${user.year} ${user.pantone_value}`

            contain.append(idUser, nameUser, yearUser)
            inkDdata.append(contain)
        })

    })

    .catch((error) => {
        console.log(error.message)
    })

