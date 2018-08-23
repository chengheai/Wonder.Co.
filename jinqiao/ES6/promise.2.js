function runAsync() {
  let p = new Promise(function (resolve, reject) {
    // do some async
    setTimeout(() => {
      console.log('plan done');
      resolve('resolve data');
    }, 2000);
  });
  return p;
}

runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return runAsync3();
})
.then(function(data){
    console.log(data);
});

function runAsync1() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务1执行完成');
      resolve('resolve data1');
    }, 1000);
  });
  return p;
}

function runAsync2() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务2执行完成');
      resolve('resolve data2');
    }, 2000);
  });
  return p;
}

function runAsync3() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务3执行完成');
      resolve('resolve data3');
    }, 2000);
  });
  return p;
}