
// Object literal
const person = {
	firstname: "Nitiwat",
	lastname: ' Chawkanha',
	id: "123465",

	fullname: function () {
		return "Hi I am " + this.firstname + "my lastname is  " + this.lastname;
	}
}
console.log(person.fullname())
console.log(person.firstname)


// Object Constructor
const apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.descripe = function () {
	return 'An apple is the color ' + this.color + 'and is the shape ' + this.round;
}

console.log(apple.descripe());

//array
const points = [10, 5, 30];
const [val1, val2, val3] = points

console.log(val1, val2, val3);


//Spread operator = กระจายข้อมูลใน array
const aaaaa = ['lop', 'oink', 'Jod']
aaaaa.push("Kiwi"); // add element i array

const bbbbb = ['lop2', 'oink2', 'Jod2']
const mergedArray = [...aaaaa, ...bbbbb]
console.log(aaaaa[0], aaaaa[2])
console.log(...aaaaa)
console.log(`this i mergedArray = ${mergedArray}`)
console.log(...mergedArray) //using spread operator


//ES6
function fullname(fname, lname) {
	return fname + " " + lname
}
const aaa = fullname(2, 3)
console.log(aaa)


//Arrow function ตัด "function", "return"  เพิ่ม "=>" 
fullname2 = (fname, lname) => fname + " " + lname
console.log(fullname2("Nitiwat2", "Chawkanha2"))

//object 
const customerName = "mama"
const age = 25
const address = "ChiangMai"
const customerProfile = { customerName, age, address }

console.log(customerProfile)

//string
let cusName = 'นายอิงค์'
let tel = '000-0000-000'
let city = 'chiangmai'

const fulldetailstring = `ชื่อลูกค้า :${cusName}  ที่อยู่ ${city}  เบอร์โทร${tel}`
console.log(fulldetailstring)

//Rest Parameter
sumation = (x, y) => {
	return x + y
}
console.log(sumation(50, 100))


sumation2 = (...numberArr) => {
	let total = 0
	for (let number of numberArr) total += number //0+500+100
	return total
}
console.log(sumation2(50, 100));
console.log(sumation2(50, 100, 800, 200));


//Destructuring

//Array

const colors = ['เขียว', 'แดง', 'เหลือง']
const [green, red, yellow] = colors

console.log(green)
console.log(red)
console.log(yellow)
console.log(colors)

//object
const product = {
	productName: 'computer',
	price: 30.000,
	stock: 10
}

//new
const { productName: productName, price: price, stock: stock } = product

console.log(productName)
console.log(price)
console.log(stock)
console.log(product)


//Default Parameter
getDataCustomer = (customerName, customerAddress) => {

	if (!customerAddress) {
		customerAddress = "Bangkok" //ถ้าไม่ใส้ข้อมูล Default จะเป็น Bangkok
	}
	const addressCust = `ชื่อลุกค้า : ${customerName} ที่อยู่ : ${customerAddress} `
	return addressCust

}													//Default Parameter
getDataCustomer2 = (customerName, customerAddress = "China") => {

	
	const addressCust = `ชื่อลุกค้า : ${customerName} ที่อยู่ : ${customerAddress} `
	return addressCust

}
console.log(getDataCustomer2("Thinit", "Phuket"))
console.log(getDataCustomer2("Nitiwat"))
console.log(getDataCustomer("someone"))


// join , concat
const dataJoin = [100, 300, 900]
const dataJoin2 = [45, 64, 87]
console.log(dataJoin)

const resultJoin = dataJoin.join() //join = ทำให้เป็นค่าString
console.log(resultJoin)

const changeJoin = dataJoin.join("*") //join(ค่าข้างใน) เปลี่ยนค่าข้างใน
console.log(changeJoin)

const alldata = dataJoin.concat(dataJoin2)
console.log(alldata)



//loop Array
const loopdata = [10, 20, 30, 40, 50, 60, 70, 80]

console.log(loopdata[1])//normal
console.log(loopdata[2]) //normal
console.log(loopdata[3])//normal

for (let i = 0; i <= loopdata.length; i++) {

	if (loopdata[i] >= 30) {
		break;
	}
	console.log(loopdata[i])
	console.log(`loopครั้งที่ ${i} = ${loopdata[i]}`)
}



let sum = 0
loopdata.forEach(element => {

	sum += element
	console.log(`totla${sum}`)
	console.log(`the element in array${element}`)

})

for (const elemetData of loopdata) {
	if (elemetData >= 30) break

	console.log(`member of array${elemetData}`)
}


// คำค้นหาใน Array
//indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่งง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colorArray = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว",]
console.log(colorArray);

const index = colorArray.indexOf("แดง")
const index2 = colorArray.indexOf("ขาว")
console.log(index)
console.log(index2)

const search = colorArray.find(element => element === "เขียว")
console.log(search)

const findIndex = colorArray.findIndex(element => element === "เขียว")
console.log(findIndex)

//Array Map
const ArrayM = [10, 20, 30, 40]
console.log(`array normal = ${ArrayM}`)

const resultM = ArrayM.map(element => {
	return element * 2

})
console.log(`array by map is  ${resultM}`)

const dataWether = [
	{ day: "Monday", weather: "hot", temp: 27 },
	{ day: "Wednesday", weather: "rainy", temp: 23 },
	{ day: "Friday", weather: "cold", temp: 18 },
]

const resultwether = dataWether.map(function (element) {
	return element.weather
})
const resultday = dataWether.map(element => `this is ${element.day}`) //arrow function 

console.log(` there is ${resultwether} `)
console.log(resultday)




//Array Filter
const arrayFilter = [10, 20, 30, 40]

const resultfilter = arrayFilter.filter(element =>
	element > 20)

console.log(resultfilter)

const arrayfilter2 = [
	{ name: "Nitiwat", salary: 25000, department: "Programmer" },
	{ name: "Hotiew", salary: 28000, department: "Front-end" },
	{ name: "Evil", salary: 66000, department: "Front-end" },
	{ name: "Groff", salary: 10000, department: "Back-end" },
]
const resultarrayfilter2 = arrayfilter2.filter(element => element.salary > 20000).filter(element => element.department === "Front-end");

console.log(resultarrayfilter2)



//สรุป
const arrayReduce = [10, 20, 30, 40]

const arrayReduceM = arrayReduce.map(element => element = 100) //ในกรณีที่ใช้Map จะทำการเปลี่ยนค่า element 
console.log(arrayReduceM)

const arrayReducefilter = arrayReduce.filter(element => element >= 30) //filter จะทำการกรองค่า element 
console.log(arrayReducefilter)


//array.reduce ((ค่าที่ถูกประมวลผล,element))=>{},ค่าเริ่มต้น) // value แรก = 0
const sumationArray = arrayReduce.reduce((value, element) => {
	const Total = element + value
	return Total
}, 0)

console.log(`ผลรวมคือ ${sumationArray}`)
//first time => value = 0 ,Total =  (10 + 0) -> มาจาก (element + value)

//next => value = 10 , Total = (20 + 10) -> 30

//next => value 30 , Total =  (30 + 30) -> 60

//next =>  value 60 , Total =  (60 + 40)  -> 100


const cart = [
	{ name: 'กระเป๋า', price: 500 },
	{ name: 'หนังสือ', price: 900 },
	{ name: 'กล้องถ่ายรูป', price: 5000 },
]

const cartReduce = cart.reduce((value, element) => {
	const Total = element.price + value
	return Total
}, 0)


console.log(`summary of cart of is ${cartReduce}`)


//change element in array
let originalPrices = [299, 599, 1200]
let saldePrices = [...originalPrices]
saldePrices[2] = 999

console.log('original = ' + originalPrices)
console.log('sale = ' + saldePrices)



//สกัด element จาก array
const name = 'Nitiwat'
const rabbit = { name: 'Mini', color: 'white',type: 'thai' }

//change name because name has 2 name 
const { name: rname, ...other } = rabbit //...other = other element

console.log(rname)
console.log(other)

const scores = [92, 86, 72, 60, 51]

const [firstScores, secondScore, ...otherScores] = scores;

console.log(firstScores)
console.log(secondScore)
console.log(otherScores)

//Sort   => Sortจากน้อยไปมาก (ถ้า ค่า1 > ค่า 2 ให้ใส่ return 1 , ค่า1 < ค่า 2 ให้ใส่ return -1)
let numList = [73, 53, 68, 80]
let sortNum = [...numList].sort((num1, num2) => {
	if (num1 > num2) {
		return 1;
	}
	else if (num1 < num2) {
		return -1;
	}
	return 0 // อยู่เฉยๆ
});

console.log(numList)
console.log(sortNum)

//Date
const dateNow = new Date()
console.log(dateNow)

							//เดือน จะเริ่มตั้งแต่0 
const birthday = new Date(2001, 2, 20, 8, 30) // => 20 มีนาคม 2001 เวลา 8โมงเช้า30นาที
console.log(birthday)


//null

let username = null // ลองใส่ค่าจริงดู
console.log(username)
//!! => ทำให้ค่าเป็น true ถ้าค่าเป็น null จะเป็น false

if(!!username){ // => ถ้าเป็นจริง
	console.log('ค่าก็คือ = ' + username)
}