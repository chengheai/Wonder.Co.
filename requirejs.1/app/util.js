define([
  'jquery'
], function() {
  return {
    'changeBgColor': function(){
      $('body').css({'background-color': '#c00'})
    },
    'changTxtSize': function(){
      $('body').css({'font-size':'30px'})
    }
  }
  
});