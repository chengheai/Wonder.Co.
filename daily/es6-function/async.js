async function fn1() {
	return 'hello!';
}
fn1().then(res => {
	console.log(res); // hello;
});

/// 两种方法是一样的效果
async function fn2() {
  return Promise.resolve(1);
}
fn2().then(res =>{
  console.log(res);
})
