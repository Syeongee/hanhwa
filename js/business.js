$(document).ready(function(){
  var PrevBtn = $("section .cont2 .slide .slide_box .slide_img .prevbtn");
  var NextBtn = $("section .cont2 .slide .slide_box .slide_img .nextbtn");
  var $first = $("section .cont2 .slide .slide_box").first();
  var $last = $("section .cont2 .slide .slide_box").last();

  // setInterval(function(){
  //   $(PrevBtn).on("click", function(){
  //     $("section .cont2 .slide .slide_box").stop().animate({"margin-left" : "-50%"}, 1000);
  //   });
  //   $(NextBtn).on("click", function(){
  //     $("section .cont2 .slide .slide_box").stop().animate({"margin-right" : "-50%"}, 2000);
  //   });
  // });
});

