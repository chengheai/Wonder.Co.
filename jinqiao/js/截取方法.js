var arr = ['a', 'b', 'c'];

arr.slice(0)         // ["a", "b", "c"]
arr.slice(1)         // ["b", "c"]
arr.slice(1, 2)     // ["b"]
arr.slice(2, 6)     // ["c"]
arr.slice()           // ["a", "b", "c"]    无参数返回原数组

arr.slice(-2)          // ["b", "c"]    参数是负数，则表示倒数计算的位置
arr.slice(-2, -1)     // ["b"]





 var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
 arr.splice(4, 2)     // ["e", "f"]　　从原数组4号位置，删除了两个数组成员
 console.log(arr)     // ["a", "b", "c", "d"]

 
 var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
 arr.splice(4, 2, 1, 2)     // ["e", "f"]　　原数组4号位置，删除了两个数组成员,又插入了两个新成员
 console.log(arr)         // ["a", "b", "c", "d", 1, 2]

 var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
 arr.splice(-4, 2)     // ["c", "d"]    起始位置如果是负数，就表示从倒数位置开始删除

 var arr = [1, 1, 1];
 
 arr.splice(1, 0, 2)     // []    如果只插入元素,第二个参数可以设为0
 conlose.log(arr)     // [1, 2, 1, 1]

 var arr = [1, 2, 3, 4];
 arr.splice(2)     // [3, 4] 如果只有第一个参数，等同于将原数组在指定位置拆分成两个数组
 console.log(arr)     // [1, 2]

