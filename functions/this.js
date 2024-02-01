// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayHello (greetingText) {
//         console.log(`${greetingText}, ${this.name}!`);
//     }
// };
//
// const person2 = {
//     name: 'John'
// };

// Soft override context
// person.greet()
// person.greet.call(person2)
// person.greet()

// person.sayHello.apply(person2, ["Hello"])
// person.sayHello("Hi")

// Hard override context
// const greetFunction =  person.sayHello.bind(person2, ["Q"])
// greetFunction()
// greetFunction("Hello")
// greetFunction("Hi")


// const person = {
//     name: 'Alice',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    // Стрілочна функція не має власного контексту this, вона використовує контекст зовнішнього об'єкту (person)
    printName: function() {
        (()=>{
            console.log(this.fullName());
        })()
    }
};

person.printName(); // Виведе "John Doe" після затримки 1 секунда