function sayHi(name: string) {
    console.log(`Hi ${name}`)
}
sayHi("Ink");

function getDiscount(): number {
    return 500
}
console.log(getDiscount())


function checkNumber(num: number): string {
    if (num % 2 === 0) {
        return "เลขคู่"
    }
    else {
        return "เลขคี่"
    }
}
console.log(checkNumber(10))

const total = (a: number, b: number): number => {
    return a + b
}
console.log(total(10, 20))

function showEmployee(name: string, age: number, address: string = "Bangkok") {
    console.log(`name = ${name} , age = ${age} , address = ${address}`)
}

showEmployee("Ink", 23, "Chiang Mai")
showEmployee("Karn", 23,)

const person1 = {
    name: "Nitiwat",
    age: 20
}

const person2: { name: string, age: number } = {
    name: "Ink",
    age: 20
}

console.log(person2)


function showDetail(data: { name: string, age: number }) {
    console.log(`name = ${data.name} , age = ${data.age}`)
}
showDetail(person2)



function rendomPosition(): { lat: number, long: number } {
    return {
        lat: 23,
        long: 43
    }
}

console.log(rendomPosition())


//Excess propertiy check
function showDetaill1(data: { name: string, age: number }) {
    console.log(`name = ${data.name} , age = ${data.age}`)
}

showDetaill1({ name: "Bobo", age: 40, })


//Type Aliases object
console.log("")
console.log("-- type Aliases object --")
console.log("")
type Employee = {
    id: number,
    readonly name: string, //read only => แก้ไขไม่ได้
    salary: number,
    phone?: string  //optional ใส่ก็ได้ ไม่ใส่ก็ได้

}
let emp1: Employee = { id: 1, name: "Kiki", salary: 50000, phone: "060-xxx-xxxx" }
let emp2: Employee = { id: 2, name: "Fere", salary: 40000, phone: "020-xxx-xxxx" }
let emp3: Employee = { id: 2, name: "Gary", salary: 45000, }
emp1.id = 100
console.log(emp1, emp2, emp3)





//array
console.log("")
console.log("-- array --")
console.log("")
const users: string[] = ["Ink", "Jojo"]

users.push("Nut")
console.log(users)
for (let i = 0; i < users.length; i++) {
    console.log(`the array include ${i} = ${users[i]}`)
}

///Type Aliases array
console.log("")
console.log("-- type Aliases array --")
console.log("")
const EmployeesArr: Employee[] = []
EmployeesArr.push({ id: 1, name: "Jolly", salary: 70000, phone: "010-xxx-xxxx" })
EmployeesArr.push({ id: 2, name: "Fready", salary: 54000, phone: "024-xxx-xxxx" })

console.log(EmployeesArr)

//use for 
console.log("")
console.log("//use for ")

for (let person of EmployeesArr) {
    console.log(person)
}

//function overloading

console.log("")
console.log("-- function overloading--")
console.log("")

//ex1

function greeting(): string
function greeting(name: string): string
function greeting(name?: unknown): unknown {
    if (!name) {
        return "Hello "
    }
    if (typeof name == "string") {
        return `Hello ${name}`
    }
    throw new Error("undefine")
}

console.log(greeting("name"))

//ex2

function totalFunction(a: number, b: number): number
function totalFunction(a: string, b: string): string
function totalFunction(a: unknown, b: unknown): unknown {
    if (typeof a == "number" && typeof b == "number") {
        return a + b
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b) // parseInt => change string to number
    }
    throw new Error("undefine")
}

console.log(totalFunction(100, 500))
console.log(totalFunction("100", "500"))

//spred Operator
const section: string[] = ["account , money"]
const departments: string[] = ["programmer", "marketing", "graphic"]
departments.push(...section)

console.log(departments)



function totalRest(...number: number[]) {
    return number.reduce((result, value) => {
        return result + value
    }, 0)
}
console.log(totalRest(50, 30, 20, 20))


//destructuring

const colors: string[] = ["red", "green", "blue"]
const [red, green, blue] = colors
console.log(red)

const person = {
    fname: "Ink",
    age: 20,
    address: "Chiang Mai"
}
const { ...allData } = person
console.log(allData)

//Tuple => can contains many type data , but fixed Size

console.log("")
console.log("-- Tuple --")
console.log("")

const point: [number, string] = [10, "Ink"]
const goodStatus: [code: number, status: string] = [200, "OK"]
const badRequest: [code: number, status: string] = [400, "error"]
console.log(badRequest)
