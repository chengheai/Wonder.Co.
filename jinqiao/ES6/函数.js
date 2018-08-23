  // es5
function action(num) {  // 传入0时就不对了
  num = num || 200
  return num
}
action()

// es6

function action(num = 200){
  console.log(num)
}
action(0)  // 0
action()  // 200
action(300)  // 300

/*
不需要 function 关键字来创建函数
省略 return 关键字
继承当前上下文的 this 关键字

 */
  // es6
 [1,2,3].map(x => x+1)

 // es5
 [1,2,3].map((function(x){
   return x+1

 }).bind(this))

 // 函数有且只有一个参数的时候

 // es6
 var people = name => 'hello' + name

 // es6常规
var people = (name) =>{ 'hello' + name }