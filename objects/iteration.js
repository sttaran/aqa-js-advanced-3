// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const users = {
//     Alice: {
//         age: 22
//     },
//     Peter: {
//         age: 23
//     }
// }


// for (const key in person){
//     console.log(key)
//     console.log(person[key])
//     console.log("-------------------")
// }

// // hasOwnProperty()
//  const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//      courses: undefined
// };
//
// console.log(person.hasOwnProperty("courses"))

// const animal = {
//     legs: 4,
// };
//
// const dog = Object.create(animal);
//
// dog.name = "Duke";
//
// console.log(dog);// {name: 'Duke'}
// console.log(dog.name);// 'Duke'
// console.log(dog.legs);// 4
//
// console.log(dog.hasOwnProperty("name"));// true
// console.log(dog.hasOwnProperty("legs"));// false


const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)
