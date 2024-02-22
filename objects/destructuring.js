// const person = {
//     name: "John",
//     age: 30,
//     courses: [],
//     gender: "male"
// };

// const name = person.name
// const age = person.age
// const gender = person.gender ?? "unknown"
// const name = "Peter"
//
// const {name : fullName, age, gender = "unknown"} = person
//
// console.log(fullName)
// console.log(person)
// console.log(name)
// console.log(age)
// console.log(gender)

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
// ];
//
// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`);
// }
//
// for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }
//

//
// function printUserInfo1(name, age, email = 'unknown') {
//     console.log(`User "${name}" is ${age} y.o. and has "${email}" email address.`);
// }
//
// printUserInfo1("Alixe", 22, "alice@gmail.com")
//
// function printUserInfo2(user) {
//     console.log(`User "${user.name}" is ${user.age} y.o. and has "${user.email}" email address.`);
// }
// const user = {
//     age: 22,
//     name:  "Alixe",
//     email: "alice@gmail.com"
// }
// printUserInfo2(user)
//
//
// function printUserInfo3({name, age, email = 'unknown'}) {
//     console.log(`User "${name}" is ${age} y.o. and has "${email}" email address.`);
// }

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };
//
// const { name, address : {city, country}} = person;
//
// console.log(name); // "John"
// console.log(city); // "New York"
// console.log(country); // "USA"

// const numbers = [1, 2, 3, 4];
//
// const [first, second, third, hello] = numbers;
//
// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 3
// console.log(hello); // 4

// const numbers = [1, 2, 3, 4];
//
// const [, , third, , fifth = 5] = numbers;
//
// console.log(fifth);

// let a = 1;
// let b = 2;
//
// [a, b] = [b, a];

const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const { name, ...rest } = person;
console.log(rest);
