// es5
const people ={
  name: 'xxx',
  age: 12
}
const name = people.name
const age = people.age
console.log('tag', name + '-----' + age)


// es6
 //对象
 const people = {
   name: 'xxx',
   age:20
 }
 const { name, age } = people
 console.log('tag',  `${name} --- ${age}`)
// 数组

const color = ['red','blue']
const [first, second] = color
console.log('tag', first) // red
console.log('tag', second) // blue