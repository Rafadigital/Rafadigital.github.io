$(".slick-carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  // fade: true,
});


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");

    });
});

// button book now
$(document).ready(function(){
    $("#button").click(function(){
        alert("Call to 0490183314 " + $("#test").text());
    });
    });

// button scroll down


// $('a[href^="#"]').click(function () {
//     $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 900);

//     return false;
// });
var $root = $('html, body');
$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);

    return false;
});


// lightbox.option({
//       'resizeDuration': 200,
//       'wrapAround': true
//     })

// var $root = $('html, body');
// $('a[href^="#"]').click(function () {
//     $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 900);

//     return false;
// });

// /menu top/ 

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("bs-example-navbar-collapse-1").style.top = "0";
//     } else {
//         document.getElementById("bs-example-navbar-collapse-1").style.top = "-50px";
//     }
// }