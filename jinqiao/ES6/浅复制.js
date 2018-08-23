// ES6 对象提供了 Object.assign()这个方法来实现浅复制。
// Object.assign() 可以把任意多个源对象自身可枚举的
// 属性拷贝给目标对象，然后返回目标对象。第一参数即为目标对象
// 。在实际项目中，我们为了不改变源对象。一般会把目标对象传为{}

const objA = { name: 'xx', age: 14}
const objB = { adress: 'shanghai'}
const objC = {}
const obj = Object.assign(objC, objA, objB)

//  Object.assign(目标对象, 源对象 ...)
console.log(objA) // { name: 'xx', age: 14}
console.log(objB) // { adress: 'shanghai'}
console.log(objC) // { name: 'xx', age: 14, adress: 'shanghai'}
console.log(obj) // { name: 'xx', age: 14, adress: 'shanghai'}