let myname: string = 'Tom';
let sentence: string = `hello, ${myname}`;
console.log('sentence:', sentence)


// any
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 未声明类型的变量

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;

something.setName('Tom');

let something: any;
something = 'seven';
something = 7;

something.setName('Tom');

let myFavoriteNumber = 'seven';   === let myFavoriteNumber: string = 'seven';

// 联合类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// 可选属性
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom'
};

// 任意属性 [propName: string]: any;
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: 'Tom',
  gender: 'male'
};

// 只读属性 readonly
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom.id = 9527;

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 声明文件
declare var jQuery: (string) => any;

jQuery('#foo');