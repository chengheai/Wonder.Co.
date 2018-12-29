function getNumber() {
  // debugger
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      var num = Math.ceil(Math.random() * 10); // 生成1-10的随机数
      if(num <= 5) {
        resolve(num);
      }else {
        reject('数字大于5');
      }
    }, 2000);
  });
  return p;
}
getNumber()
  .then(function(data) {
    console.log('resolved: ', data);
  })
  .catch(function(reason) {
    console.log('rejected: ', reason);
  })