const todos = ['hello'];
console.log([...todos, 'world']);
const arr = ['a', 'b', 'c'];
const [first, ...rest] = arr;
console.log('arr: ', rest);

// const [fff, , ...rest] = arr;
// console.log('arr: ', arr);

const attrs = {
  href: 'http',
  target: '_blank'
};
/// <a {...attrs}>hello</a>