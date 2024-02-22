// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((element, index)=>{
//     console.log("Index", index)
//     console.log(element * 2)
// });

// filter
// const numbers = [1, 2, 3, 4, 5];
//
// const evenNumbers = numbers.filter((el, index)=> el % 2 === 0);
// console.log(evenNumbers)

// map
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((el)=> Math.pow(el, 2));
// console.log(doubledNumbers)

// sort
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort((a, b) => a.localeCompare(b))
// console.log(fruits)

// const arr = [2, 8,1, 10,98,76]
// arr.sort((a, b) => b - a)
// console.log(arr)

// reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, item)=>acc + item, 5)
// console.log(sum)
//
//
// const users = [
//     {name: "John", age: 30, average: 7},
//     {name: "Jane", age: 25, average: 8},
//     {name: "Jim", age: 35, average: 6}
// ]
//
// const statics = users.reduce((acc, user)=>{
//     acc.ages.push(user.age)
//     acc.averages.push(user.average)
//     return acc
// }, {ages: [], averages: []})
//
// console.log(statics)

// reverse
// const numbers = [1, 3, "3", "hello", 5];
// console.log(numbers.reverse())

// every
// const users = [ "John", "Jane", "Jimmy"];
// const allNames = users.every((name)=> name.length > 3)
// console.log(allNames)

// some
// const hasJimmy = users.some((name)=> name === "Jimmy")
// console.log(hasJimmy)

// const users = [
//     {name: "John", age: 30, average: 7},
//     {name: "Jane", age: 25, average: 8},
//     {name: "Jim", age: 35, average: 6}
// ]

// const hasJane = users.some((user)=> user.name === "Jane")
// const hasJane2 = users.includes({name: "Jane", age: 25, average: 8})
// console.log(hasJane)
// console.log(hasJane2)
