function runAsync1() {
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
  });
  return p;
}
function runAsync2() {
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 1000);
  });
  return p;
}
function runAsync3() {
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('异步任务3执行完成');
      resolve('随便什么数据3');
    }, 1000);
  });
  return p;
}
function runAsync1() {
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
  });
  return p;
}
runAsync1()
  .then(function(data) {
    console.log('data1: ', data);
    return runAsync2();
  })
  .then(function(data) {
    console.log('data2: ', data);
    return runAsync3();
  })
  .then(function(data) {
    console.log('data3: ', data);
  })

