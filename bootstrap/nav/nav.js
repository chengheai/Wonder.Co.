$("#mobile-nav-taggle").click(function () {
  var mobileMenu = $("#mobile-menu");
  if (mobileMenu.hasClass("bounceOutLeft")) {
      setTimeout(function () {
          mobileMenu.addClass("bounceInLeft").removeClass("bounceOutLeft");
      }, 100)
  }
  else {
      setTimeout(function (){
          mobileMenu.addClass("bounceOutLeft").removeClass("bounceInLeft");
      }, 100)
  }
})