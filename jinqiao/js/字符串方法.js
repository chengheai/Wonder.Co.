// charAt(),charCodeAt()这两个方法分别返回给定位置的字符和字符编码
var chart_str = 'hello world!';
chart_str.charAt(0);//'h'
chart_str.charCodeAt(0);//104
chart_str.charAt(14);//'',越界会返回空字符
chart_str.charCodeAt(0);//NaN
//concat()字符串连接操作
var concat_str = 'hello';
concat_str.concat('!');//'hello !'返回连接后的新的字符串，等价字符串+操作
concat_str;//'hello' 做concat操作后，源不会改变
concat_str.concat(' ', 'world', '!');//"hello world!"可接收多个参数
concat_str.concat([1,2,3]);//"hello1,2,3",传入对象，会调用toString()方法后在操作
//indexOf(),lastIndexOf()返回给定字符串所在的开始位置,可传入两个参数，第一个参数表示要查询的子串，第二参数表示从什么位置开始查,省略默认0，查到返回开始位置，否者-1
index_str= 'hello world!';
index_str.indexOf('hello');//0
index_str.lastIndexOf('hello');//0
index_str.indexOf('hello',0)//0
index_str.indexOf('hello',1);//-1
//trim()去除左右空格,等价replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'')
var trim_str = ' hello  ';
trim_str.trim();//'hello'
trim_str.trimRight();//非标准
trim_str.trimLeft();//非标准
//toLowerCase()、 toLocaleLowerCase()、 toUpperCase()、 toLocaleUpperCase()大小写转换，toLocaleLowerCase()、 toLocaleUpperCase()针对于特殊地区，大部分情况和toLowerCase(),toUpperCase()结果一样
var case_str = 'hello';
case_str.toUpperCase();//'HELLO'
case_str.toUpperCase().toLowerCase();//'hello'
//split()字符串分割 
/**
E8 及之前版本会忽略捕获组。 ECMA-262 规定应该把捕获组拼接到结果数组中。 IE9 能正确地
在结果中包含捕获组。
Firefox 3.6 及之前版本在捕获组未找到匹配项时，会在结果数组中包含空字符串； ECMA-262 规
定没有匹配项的捕获组在结果数组中应该用 undefined 表示。
*/
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2); //["red", "blue"] 第二参数限制了项数
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]
//match()匹配 
var match_str = 'hello world! this is test';
var matchs = match_str.match(/.is/);//返回一个数组
matchs.length;//1
matchs[0];//'tis'
//search()搜索。search()方法返回字符串中第一个匹配项的索引；如果没
//有找到匹配项，则返回-1。
var search_text = "cat, bat, sat, fat";
text.search(/at/);//1
/**
replace()替换
es提供特殊字符序列
字符序列 替换字符
$$      $
$&      匹配整个模式的子字符串。与RegExp.lastMatch的值相同
$'      匹配的子字符串之前的子字符串。与RegExp.leftContext的值相同
$`      匹配的子字符串之后的子字符串。与RegExp.rightContext的值相同
$n      匹配第n个捕获组的子字符串，其中n等于0～9。例如， $1是匹配第一个捕获组的子字符串，
        $2是匹配第二个捕获组的子字符串，以此类推。如果正则表达式中没有定义捕获组，则使用空字符串
$nn     匹配第nn个捕获组的子字符串，其中nn等于01～99。例如， $01是匹配第一个捕获组的子字符串， 
        $02是匹配第二个捕获组的子字符串，以此类推。如果正则表达式中没有定义捕获组，则使用空字符串
*/
var replacet_str = "cat, bat, sat, fat";
replacet_str.replace(/(.at)/g, "word ($1)");//"word (cat), word (bat), word (sat), word (fat)"
replacet_str.replace(/(.at)/g, "word ($$)");//"word ($), word ($), word ($), word ($)"
replacet_str.replace(/(.at)/g, "word ($')");//"word (, bat, sat, fat), word (, sat, fat), word (, fat), word ()"
replacet_str.replace(/(.at)/g, "word ($`)");//"word (), word (cat, ), word (cat, bat, ), word (cat, bat, sat, )"
/**
slice()、 substr()、 substring()
这三个方法都返回被操作字符串的子集的,不会改变被操作字符串,接受两个参数，第二参数可省略默认是字符的长度
第一个参数表示开始位置，第二个参数表示结束位置。substr()第二参数表示个数，而substring()和slice()第二个
参数表示子集最后一个字符的下个位置
*/
//slice()参数为负值时候会和字符串长度相加,参数规整后第一个参数必须小于第二个参数
var _str = 'hello world!';
_str.slice(2);//"llo world!"
_str.slice(-2);//"d!"
_str.slice(2,-7);//"llo"
_str.slice(-2,-7);//''
_str.slice(-7,7);//" w"
_str.slice(-7,-2);//" worl"
//substr() 第一个参数为负的时候与字符串长度求和,第二个参数为负置为0
_str.substr(2);//"llo world!"
_str.substr(-2);//"d!"
_str.substr(2,-7);//""
_str.substr(-2,-7);//''
_str.substr(-7,7);//" world!"
_str.substr(-7,-2);//" "
//substring() 参数为负置为0,参数大的作为结束位置，小的作为开始位置
_str.substring(2);//"llo world!"
_str.substring(-2);//"hello world!"
_str.substring(2,-7);//he"v
_str.substring(-2,-7);//" "
_str.substring(-7,7);//"hello w"
_str.substring(-7,-2);//" "
//slice,substr,substring只传入一个正整数,结果相同
//slice,substr,substring只传入一个负整数,slice,substr结果相同，这两个方法第一个参数为
//负会和长度求和