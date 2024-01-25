// const num1  = 1
// const num2  = 2
//
// const sum = num1 + num2 + 10

// console.log(40 + 2); // 42 - операція додавання
// console.log(42 - 2); // 40 - операція віднімання
// console.log(2 * 2); // 4 - операція множення
// console.log(4 / 2); // 2 - операція ділення

// const num = 14 % 3
// console.log(num)

// let num = 7
// num++ // num = num + 1
// console.log(num)
// num-- // num = num - 1
// console.log(num)

// let num1 = 7
// console.log(num1++)
// console.log(num1)
// console.log(num1--)
// console.log(num1)
// console.log("-------------------")
// let num2 = 7
// console.log(++num2)
// console.log(--num2)
// console.log(num2)

// console.log(3 > 21)
// console.log(3 < 21)
// console.log(3 >= 3) // >=

// console.log(3 == 3)
// console.log("Hello" == "Hello1")

// console.log(3 == "3")
// console.log(3 === "3")

// console.log(false == 0)

// const name1 = "Alice"
// const name2 = "Peter"
//
// const greetingText = "Hello " + name1 + " and " + name2

// const a = 18
//
// const b = a >= 18

//  || OR
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
// console.log(true || true)

// false, 0, null, undefined, NaN, "" -> false

// console.log(false || 1)
           //true || false
// console.log(1 || NaN)

// && AND
// console.log(true && false)
// console.log(false && true)
// console.log(true && true)

         // false && true
// console.log(0 && 1)

// const isMarried = true
// const hasChildren = true
// const personAge = 22
// const experience = 0.6
//                         //true && true -> true    ||  true && false -> false
// const shouldHaveBonus = (isMarried && hasChildren) || (personAge > 21 && experience > 1)
//
// console.log("shouldHaveBonus", shouldHaveBonus)


// ! NOT
// console.log(!false)
// console.log(!true)
// console.log(!1)
// console.log(!!undefined)
// console.log(!!1000)

// console.log(1 ?? 0)
// console.log(false ?? 0)
// console.log(undefined ?? null)

// const experience =  4
// const isSenior = experience > 5
// const salary  = experience > 3 ? 3000 : 2000
// console.log(salary)
// const something = 1 + "10"
//
// console.log(something) // 110  "110"
// console.log(typeof something)

// console.log("111" + true)
// console.log("111" - "1")
// console.log("111" - "1")
// console.log("111" * null)

// console.log(1 + Number("111"))
// console.log(1 + String(true))
// console.log(Boolean(111))
// console.log(!!111)

// console.log(1 + Number.parseInt("111a"))
// console.log(1 + Number.parseFloat("111.4a"))

console.log(5 + "10");  // "510"
console.log(5 - "10");  // -5
console.log(5 * "10");  // 50
console.log(5 / "10");  // 0.5
console.log(5 + null);  // 5
console.log(5 + undefined);  // NaN

console.log(5 + true);  // 6
console.log(5 - false);  // 5
console.log(5 * true);  // 5
console.log(5 / false);  // Infinity

console.log("5" + true);  // "5true"
console.log("5" - false);  // 5
console.log("5" * false);  // 0
console.log("5" / true);  // 5