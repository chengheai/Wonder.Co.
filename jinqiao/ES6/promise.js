let p = new Promise(function(resolve, reject){
  // do some async
  setTimeout(() => {
    console.log('执行完成');
    resolve('some data')
  }, 2000); 
})