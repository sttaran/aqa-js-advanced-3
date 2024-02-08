// const user = {
//     name: "Alice",
//     age: 25
// }
//
// console.log(user)
//
// user.age = user.age + 1
//
// console.log(user)

// const user = {
//     name: {
//         firstName: "Alice",
//         lastName: "Doe"
//     },
//     age: 25,
//     sayHello(targetPersonName){
//         console.log(`Hi ${targetPersonName}! I'm ${this.name.firstName}!`)
//     }
// }
//
// user.sayHello("Joel")

/*
const user = {
    name: "Alice",
    age: 25
}

console.log(user.courses)
user.courses = ["QA Manual", "QA Auto"]
console.log(user.courses)
console.log(user)*/


// const user = {
//     name: "Alice",
//     age: undefined
// }
//
// console.log(user.age)
// delete user.age
// console.log(user.age)

// const name = "Peter"
// const courses = ["QA Manual", "QA Auto"]
//
// for (let i = 0; i < 10; i++) {
//
// }
//
// const user = {
//     name: name,
//     courses: courses,
//     age: 22
// }
//
// const user = {
//     name,
//     courses,
//     age: 22
// }



const user = {
    name: "ALice",
    age: 22,
    "Average grade": 78
}

console.log(user["Average grade"])

const propertyName = "name"

console.log(user.name)
console.log(user[propertyName])