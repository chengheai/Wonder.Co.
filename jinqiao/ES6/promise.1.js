function runAsync(){
  let p = new Promise(function(resolve, reject){
    // do some async
    setTimeout(() => {
      console.log('plan done');
      resolve('resolve data');
    }, 2000);
  });
  return p;
}
runAsync().then(function(data){
  console.log('data:',data);
})