
// 数组
const color = ['red', 'yellow']
const colorful = [...color, 'green', 'pink']
console.log('tag', colorful)

// 对象
const alp = { first:'a', second: 'b' }
const alpha = { ...alp, third: 'c' }
console.log('tag', alpha)

// 获取数组或对象的前几项或者指定几项

const number = [1,2,3,4,5]
const [first, ...rest] = number
console.log('tag', rest) // 2,3,4,5

// 对象
const user = { username: 'lux', gender: 'female', age: 19, address: 'peking' }
const { username, ...rest } = user 
console.log(rest) //{"address": "peking", "age": 19, "gender": "female" }


const first = { a: 1, b: 2, c: 6, } 
const second = { c: 3, d: 4 } 
const total = { ...first, ...second } 
console.log(total) // { a: 1, b: 2, c: 3, d: 4 }


