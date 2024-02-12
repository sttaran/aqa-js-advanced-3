const user = new Map()
user.set("name", "John")
user.set("age", 30)

const user2 = {
    name: "John",
    age: 30
}

user.set(user2, "John Doe")
console.log(user)
// console.log(user2)