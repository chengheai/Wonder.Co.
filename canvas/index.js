var cv = document.getElementById("canvasId"),
  p = document.getElementsByTagName("p")[0];

//设置中奖几率
var num = 10000 * Math.random(),
  result = "谢谢惠顾";
if (num < 1000) {
  result = "三等奖";
}
if (num < 50) {
  result = "二等奖";
}
if (num < 5) {
  result = "一等奖";
}
p.innerText = result;
try {
  var ct = cv.getContext("2d");
  //绘制背景色
  ct.fillStyle = "#aaa";
  ct.fillRect(0, 0, 500, 500);
  //设置绘制状态
  ct.lineCap = "round";　　 //设置线条两端为圆弧
  ct.lineJoin = "round";　　 //设置线条转折为圆弧
  ct.lineWidth = 60;
  /*设置新绘制清除新绘制内容和原内容的重叠区域*/
  ct.globalCompositeOperation = "destination-out";
} catch (e) {
  console.log(e);
}
//绘制曲线
var flag = false,
  lx, ly;
cv.onmousedown = function (e) {
  flag = true;
  lx = e.offsetX;
  ly = e.offsetY;
}

cv.onmousemove = function (e) {
  if (flag) {
    ct.beginPath();
    ct.moveTo(lx, ly);
    ct.lineTo(e.offsetX, e.offsetY);
    ct.stroke();
    ct.closePath();

    //更新坐标
    lx = e.offsetX;
    ly = e.offsetY;
  }
}

cv.onmouseup = function (e) {
  flag = false;
}