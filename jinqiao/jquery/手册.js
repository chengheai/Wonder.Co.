取值与赋值操作

$("#ID").val(); //取value值
$("#ID").val("xxx"); //赋值
$("#ID").text(); //相当于取innerText
$("#ID").text(""); //相当于赋值给innerText
$("#ID").html(); //相当于取innerHTML
$("#ID").html(""); //相当于赋值给innerHTML

属性设置

$("#ID").attr(key,value);//取得或设置匹配元素的属性值
 
显示和隐藏

$("#ID").hide(); //隐藏
$("#ID").show(); //显示

事件处理

$(document).ready(fn);
$("#ID").bind(type,[data],fn); //绑定事件处理器函数
$("#ID").toggle(fn,fn);//注册每次点击时切换要调用的函数

外观效果

$("#ID").addClass(class);//添加样式
$("#ID").removeClass(class);//移除样式
$("#ID").css(name,value);//设置一个样式属性的值

查找和遍历筛选

$("#ID").map(callback);//将一组元素转换成其他数组
$("#ID").find(expr);//搜索所有与指定表达式匹配的元素
$("#ID").children();//获得匹配元素集合中每个元素的所有子元素
$("#ID").parent();//获得当前匹配元素集合中每个元素的祖先元素
$("#ID").parents();//获得当前匹配元素集合中每个元素的父元素
$("#ID").filter();//将匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素
$("#ID").not();//从匹配元素集合中删除元素
$("#ID").add();//将元素添加到匹配元素的集合中
$("#ID").slice();//将匹配元素集合缩减为指定范围的子集
$("#ID").siblings();   //获得匹配元素集合中所有元素的同辈元素
$("#ID").prev() & prevAll();//获得匹配元素集合中每个元素紧邻的前一个/所有同辈元素
$("#ID").next() & nextAll();//获得匹配元素集合中每个元素紧邻的一个/所有同辈元素

元素节点操作

$("#ID").wrap(html);//把所有匹配的元素用其他元素的结构化标记包裹起来
$("#ID").empty();//删除匹配的元素集合中所有的子节点

Ajax操作

$("#ID").load(url,[data],[callback]);//载入远程 HTML 文件代码并插入至 DOM 中
//url (String) : 待装入 HTML 网页网址。
//data (Map) : (可选) 发送至服务器的 key/value 数据。
//callback (Callback) : (可选) 载入成功时回调函数。
jQuery.ajax();//返回其创建的XMLHttpRequest对象。只有一个参数,参数是key/value 对象，包含各配置及回调函数信息

序列化

$("form").serialize();//序列化表格内容为字符串

工具方法(jQuery可以使用$代替)

jQuery.each(obj,callback);//遍历对象和数组
jQuery.map();//修改数据
jQuery.grep();//数据筛选,返回一个经过筛选后的数组
jQuery.inArray(value,array);//查找元素的下标
jQuery.merge(array1,array2);//合并两个数组
jQuery.unique(dom);//去除重复DOM元素
jQuery.makeArray(obj);//将类数组对象转换为数组对象
jQuery.trim(str);//去掉字符串起始和结尾的空格
jQuery.contains(dom1,dom2);//dom1节点是否包含dom2节点
jQuery.type();//返回对象的数据类型
jQuery.isArray();//是否为数组。
jQuery.isEmptyObject();//是否为空对象（不含可枚举的属性）。
jQuery.isFunction();//否为函数。
jQuery.isNumeric();//是否为数组。
jQuery.isPlainObject();//是否为使用“{}”或“new Object”生成的对象，而不是浏览器原生提供的对象。
jQuery.isWindow();//是否为window对象。
jQuery.isXMLDoc();//判断一个DOM节点是否处于XML文档之中。
jQuery.param(object);//将对象的键值对转化为URL键值对字符串形式
jQuery.proxy();//调整this的指向
