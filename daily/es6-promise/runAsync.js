// callback 方法
function runAsync( callback ) {
  setTimeout(() => {
    console.log('执行完成');
    callback('随便什么数据')
  }, 2000);
}
runAsync(function(data) {
  console.log('data: ', data);
})

// es6 promise方法
function runAsync1() {
  var p = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('执行完成');
      resolve('随便什么数据');
    }, 2000);
  });
  return p;
}
runAsync1().then(function(data) {
  console.log(data);
})