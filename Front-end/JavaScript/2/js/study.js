function calculate(money, vat) {
	return money * vat / 100;
}
calculate(50, 7);
//แสดงผลที่console
const totalVat = calculate(50, 7);
console.log(totalVat);

//แสดงผลที่consoleได้เหมือนกัน
console.log(calculate(50, 7));


///วิธี1
function getPyramidArea(length, width, height) {

	let baseArea = length * width;
	let pyramidVolume = 1 / 3 * baseArea * height;
	return pyramidVolume;

}
let area1 = getPyramidArea(2, 2, 3);
let area2 = getPyramidArea(4, 4, 3);
console.log('Area 1 = ' + area1 + 'Area 2 =' + area2);

///วิธี2
function getPyramidArea2() {
	let l = 5
	let w = 5
	let h = 7
	let b = l * w;
	let pyramidVolume2 = 1 / 3 * b * h;

	console.log(pyramidVolume2);
}
getPyramidArea2()



let conetent2 = document.getElementById('content-2');
let textHtml = '<b>iNK EIEI</b>';
conetent2.innerHTML = textHtml;



function cell() {
	let a = 5
	let b = 1
	const c = a + b;
	console.log(c)  //หรือ
	console.log(a + b)

	//return เพื่อใช้งานfucntion ข้างนอกได้
	return a * b
}
cell()

function cell2(a, b) {
	return a + b
}
cell2()
const display_cell2 = cell2(10, 2);
//แสดงในconsole
console.log(display_cell2);

//ลองใส่ใน HTML ดู   	//ตัวแปรจากHTML					    //ตัวแปรที่จะแสดง
document.getElementById('cell-2').innerHTML = "คำตอบ" + display_cell2;



let Button = document.getElementById('discount_button');
let message = document.getElementById('message')

function showMessage() {
	message.innerHTML = 'หมดเวลาสนุกแล้วสิ';

}
//เหตุการณ์/คำสั่ง
Button.addEventListener('click', showMessage);

//แม่สูตรคูณ

let numberInput = document.getElementById('number-input');
let runButton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMultiply() {
	let number = numberInput.value;
	let outputHtml = '';

	for (let i = 1; i <= 12; i++) {
		outputHtml += '<p>';
		outputHtml += number + ' x ' + i + ' = ' + (number * i);
		outputHtml += '</p>';

	}

	output.innerHTML = outputHtml;
}
runButton.addEventListener('click', printMultiply);

function stop() {
	document.getElementById("output").style.display = "none";
}


//syntax if else

let isEmpty = true;
//if				//else
isEmpty ? console.log('Empty') : console.log('is not Empty');



//Template literal, Template string
function greeting() {

	let firstname = "John"
	let lastname = "Doe"
	return 'Hello, ' + firstname + ' ' + lastname;

}
console.log(greeting());


//create object
const car = {
	type: "Vios",
	modle: "500",
	color: "white"
};

//display object
document.getElementById("object").innerHTML = "the car type is " + car.type + "the model is " + car.modle;



//(Object Literal)
const person = {
	name: 'Nitiwat',
	height: 175,
	city: 'Bangkok',
	address: {
		street: '123 Something st',
		city: 'Bangkok',			//สามารถใส่objectลงในobjectได้
		state: 'TH'
	},

	fullName: function () {
		return this.name + "= this is the name" + this.address.city + " = this is city where he live";
	}

}

console.log(person);
console.log(person.city);
console.log(person.address);
console.log(person.address.street);
console.log(person.fullName())



//(Object Constructor)
const apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.type = 'thai'

apple.descript = function () {
	return 'An apple is the color ' + this.color + 'and is the shape ' + this.round + 'apple type is' + this.type;
}

console.log(apple.color);
console.log(apple.descript());


//desrturcturing object
const post = {
	data: {
		id: 1,
		title: 'Post 1',
		text: 'Some text',
		author: 'Nitiwat'

	},


	desc: function () {
		return this.data.author + " lolol";

	}

}

console.log(post.desc())
console.log(post.data.id, post.data.title, post.data.text, post.data.author);


const { id, title, text, author } = post.data;
console.log(post.data);



//desrturcturing array
const points = [10, 5, 30];
const [val1, val2, val3] = points

console.log(val1, val2, val3);







const eeee = document.getElementById('one');
eeee.innerHTML = "ink" + cell();

//	 event 
function basic1() {
	alert('Hi this is basic1');
};

//length
let sumNum = document.getElementsByClassName("length-num");
document.getElementById("method-1").innerHTML = sumNum.length;

//slice
let aaa = document.getElementById("aaa").innerHTML;
let part = aaa.slice(2, 5);
let part2 = aaa.slice(5);
document.getElementById("method-2").innerHTML = part + "/ " + part2;

//method


// String length จำนวนของตััวหนังสือ

// String slice() ตัดคำ
// String substring() ตัดคำ
// String substr() ตัดคำ
// String replace() แทนที่
// String replaceAll()แทนที่ทั้งหมด
// String toUpperCase() ทำให้ตัวใหญ่
// String toLowerCase()	ทำให้ตัวเล็ก
// String concat() การต่อคำ
// String trim()	การตัดคำช่องว่างทั้งหมด
// String trimStart() การตัดคำช่องว่างก่อนหน้า
// String trimEnd() การตัดคำช่องว่างด้านหลัง
// String padStart() การเพิ่มคำด้านหน้า สามารถกำหนดจำนวนคำได้
// String padEnd()	การเพิ่มคำด้านหลัง
// String charAt() การเปลี่ยนคำเป็นตัวอักษรของตำแหน่งนั้นๆ
// String charCodeAt()
// String split()


// arrow Function

//normal function
function myfunc() {
	return 'Hello World'
}
console.log(myfunc())

//using arrow function
const nameer = () => 'Hello ink'
console.log(nameer())



//Spread operator = กระจายข้อมูลใน array

const aaaaa = ['lop', 'oink', 'Jod']
aaaaa.push("Kiwi"); // add element i array

const bbbbb = ['lop2', 'oink2', 'Jod2']
const mergedArray = [...aaaaa, ...bbbbb]
console.log(aaaaa[0], aaaaa[2])
console.log(...aaaaa)
console.log(mergedArray)
console.log(...mergedArray) //using spread operator




