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
        $('#panel').toggle("slow");
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



$('.carousel').slick({
  dots:true,
});


// /maps/
// function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }






