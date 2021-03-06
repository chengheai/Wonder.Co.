
//全部导入 
import age from './example' 
//有一种特殊情况，即允许你将整个模块当作单一对象进行导入 
//该模块的所有导出都会作为对象的属性存在 
import * as example from "./example.js" 
console.log(example.name) 
console.log(example.age) 
console.log(example.getName()) 
//导入部分 
import {name, age} from './example' 
// 导出默认, 有且只有一个默认 
export default App 
// 部分导出 
export class App extend Component {};


// 1.当用export default people导出时，就用 import people 导入（不带大括号）

// 2.一个文件里，有且只能有一个export default。但可以有多个export。 

// 3.当用export name 时，就用import { name }导入（记得带上大括号） 

// 4.当一个文件里，既有一个export default people, 又有多个export name 或者 export age时，导入就用 import people, { name, age } 

// 5.当一个文件里出现n多个 export 导出很多模块，导入时除了一个一个导入，也可以用import * as example
