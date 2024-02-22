const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Mike', age: 40 },
];

// console.log(people[1].name)

for (const person of people) {
  console.log(person.name);
}
console.log('+=======================');

people.forEach((person) => console.log(person.name));
