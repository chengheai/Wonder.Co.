var arr = [];
/**
*push,pop两个方法合用可以模拟栈结构(LIFO)
*push()入栈,
*pop()出栈
*/
arr.push(1);//1
arr.push(2);//2
arr.pop();//2
arr.pop();//1
arr;//[]
/**
*push,shift两个方法合用可以模拟队列结构(FIFO)
*push()入队,
*shift()出队从头部移除数据并返回，刚好和pop()相反
*/
arr.push(1);//1
arr.push(2);//2
arr.shift();//1
arr.shift();//2
arr;//[]
/**
*unshift()和shift()作用相反，unshift()在数组前面插入数据，而push()实在数据尾部添加数据
*unshift().push()返回Array的length
*/
arr.unshif(1);
arr.unshift(2);
arr;//[2,1]
arr.shift();//2
arr.shift();//1
arr.push(1);//1
arr.push(2);//2
arr;//[1,2]
/**
*数组的排序有两个方法reverse()反序，sort()可传入排序方法，
*默认升序排序，排序过程中调用每项的toString()方法来确定顺序
*/
arr.push('a',{x:2,y:3,toString:function(){return this.x;}},'b');
arr;//[1, 2, "a", Object, "b"]
arr.sort();//[1, 2, Object, "a", "b"]
arr.push(3);
arr.sort();//[1, 2, Object, 3, "a", "b"]  object在2和3之间,因为与比较时会调用toString()方法返回2
arr.reverse();//["b", "a", 3, Object, 2, 1]
//sort实现反序
arr.sort(function(va1,va2){if(va1<va2){return 1} else if(va1>va2){return -1}else{return 0}});//[1, 2, Object, 3, "a", "b"]
//concat合并数组，与String.prototype.concat作用相同
arr = [1,2,3];
arr.concat(['a','b']);//[1,2,3,'a','b'] 也可以arr.concat('a','b')
arr;//[1,2,3]不改变原数组
/**
*slice()它能够基于当前数组中的一或多个项创建一个新数组。 slice()方法可以
*接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该
*参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项—
*—但不包括结束位置的项,不影响源数组
*也可以将类数组转换数组方法[].slice.call(类数组)
*常见的类数组有arguments,NodeList,styleSheets,HTMLCollection,HTMLFormControlsCollection
*HTMLOptionsCollection
*/
arr.slice(-1);//[3]
arr.slice(0,2);[1,2]
arr.push(4);
arr.slice(0,-1);//[1,2,3]
/**
*splice()功能强大
*1.传入两个参数，分别位置和要删除的项数。第二参数为负取0,不存在取数组长度
*2.还可传多个参数表示插入和替换
*/
arr = [1,2,3,4];
arr.splice(1);//[2,3,4]
arr = [1,2,3,4];
arr.splice(1,2);//[2,3]
arr = [1,2,3,4];
arr.splice(-1,2);//[4]
arr = [1,2,3,4];
arr.splice(-1,-2);//[]
arr.splice(1,0,9,9,9);//[1, 9, 9, 9, 2, 3, 4]在指定位置前插入
arr = [1,2,3,4];
arr.splice(1,2,9,9,9);//[1, 9, 9, 9, 4]替换