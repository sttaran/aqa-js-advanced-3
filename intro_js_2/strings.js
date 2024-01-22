// const greeting = "Hello JS!? Ahahaha@"

// console.log(greeting[0])
//
// console.log("Length", greeting.length)
// console.log("Last symbol", greeting[greeting.length -2])

// greeting[0] = "R"
// console.log(greeting[0])

// const greeting = "Hello"
// const name = "Peter"
//
// // const greetingToPerson = greeting + " " + name
// const greetingToPerson = `${greeting} ${name}!`
// console.log(greetingToPerson)

// let num1 = 1
// const num2 = num1
//
// const sum  = num2 + num1
// console.log(`Sum of ${num1} and ${num2} is ${sum}`)

// let num1 = 1
// const num2 = num1
// num1 = 5
// console.log("num1", num1)
// console.log("num2", num2)

const text = "JavaScript";
console.log(text.length); // Виведе: 10
console.log(text.toUpperCase()); // Виведе: "JAVASCRIPT"
console.log(text.charAt(3)); // Виведе: "a"
console.log(text.indexOf("Script")); // Виведе: 4
console.log(text.substring(4, 10)); // Виведе: "Script"
console.log(text.endsWith("Script")); // Виведе: true
console.log(text.startsWith("Java")); // Виведе: true
console.log(text.slice(4, 7)); // Виведе: "Scr"
console.log(text.replace("Java", "Type")); // Виведе: "TypeScript"
console.log(text.replaceAll("a", "A")); // Виведе: "JAvAScript"
console.log(text.includes("Script")); // Виведе: true
console.log(text.repeat(2)); // "JavaScriptJavaScript"

// const text = "!JavaScript";
// console.log(text.charAt(20)); // ""
// console.log(text[20]); // undefined