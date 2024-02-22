"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function sayHi(name) {
    console.log(`Hi ${name}`);
}
sayHi("Ink");
function getDiscount() {
    return 500;
}
console.log(getDiscount());
function checkNumber(num) {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
console.log(checkNumber(10));
const total = (a, b) => {
    return a + b;
};
console.log(total(10, 20));
function showEmployee(name, age, address = "Bangkok") {
    console.log(`name = ${name} , age = ${age} , address = ${address}`);
}
showEmployee("Ink", 23, "Chiang Mai");
showEmployee("Karn", 23);
const person1 = {
    name: "Nitiwat",
    age: 20
};
const person2 = {
    name: "Ink",
    age: 20
};
console.log(person2);
function showDetail(data) {
    console.log(`name = ${data.name} , age = ${data.age}`);
}
showDetail(person2);
function rendomPosition() {
    return {
        lat: 23,
        long: 43
    };
}
console.log(rendomPosition());
//Excess propertiy check
function showDetaill1(data) {
    console.log(`name = ${data.name} , age = ${data.age}`);
}
showDetaill1({ name: "Bobo", age: 40, });
//Type Aliases object
console.log("");
console.log("-- type Aliases object --");
console.log("");
let emp1 = { id: 1, name: "Kiki", salary: 50000, phone: "060-xxx-xxxx" };
let emp2 = { id: 2, name: "Fere", salary: 40000, phone: "020-xxx-xxxx" };
let emp3 = { id: 2, name: "Gary", salary: 45000, };
emp1.id = 100;
console.log(emp1, emp2, emp3);
//array
console.log("");
console.log("-- array --");
console.log("");
const users = ["Ink", "Jojo"];
users.push("Nut");
console.log(users);
for (let i = 0; i < users.length; i++) {
    console.log(`the array include ${i} = ${users[i]}`);
}
///Type Aliases array
console.log("");
console.log("-- type Aliases array --");
console.log("");
const EmployeesArr = [];
EmployeesArr.push({ id: 1, name: "Jolly", salary: 70000, phone: "010-xxx-xxxx" });
EmployeesArr.push({ id: 2, name: "Fready", salary: 54000, phone: "024-xxx-xxxx" });
console.log(EmployeesArr);
//use for 
console.log("");
console.log("//use for ");
for (let person of EmployeesArr) {
    console.log(person);
}
//function overloading
console.log("");
console.log("-- function overloading--");
console.log("");
function greeting(name) {
    if (!name) {
        return "Hello ";
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("undefine");
}
console.log(greeting("name"));
function totalFunction(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b); // parseInt => change string to number
    }
    throw new Error("undefine");
}
console.log(totalFunction(100, 500));
console.log(totalFunction("100", "500"));
//spred Operator
const section = ["account , money"];
const departments = ["programmer", "marketing", "graphic"];
departments.push(...section);
console.log(departments);
function totalRest(...number) {
    return number.reduce((result, value) => {
        return result + value;
    }, 0);
}
console.log(totalRest(50, 30, 20, 20));
//destructuring
const colors = ["red", "green", "blue"];
const [red, green, blue] = colors;
console.log(red);
const person = {
    fname: "Ink",
    age: 20,
    address: "Chiang Mai"
};
const allData = __rest(person, []);
console.log(allData);
//Tuple => can contains many type data , but fixed Size
console.log("");
console.log("-- Tuple --");
console.log("");
const point = [10, "Ink"];
const goodStatus = [200, "OK"];
const badRequest = [400, "error"];
console.log(badRequest);
