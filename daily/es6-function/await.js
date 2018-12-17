async function f3() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!!')
    }, 2000);
  })
  let result = await promise
  console.log('result: ', result);
}
f3();