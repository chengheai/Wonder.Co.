// 拓展对象功能

//  es5
function people(name, age){
  return {
    name: name,
    age: age
  };
}

// es6
function people(name, age){
  return {
    name,
    age
  }
}

//  es5
const people = {
  name: 'xxx',
  getName: function(){
    console.log(this.name)
  }
}

// es6

const people ={
  name: 'xxx',
  getName(){
    console.log(this.name)
  }
}