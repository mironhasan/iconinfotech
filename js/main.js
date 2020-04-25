
// for preloader none when complete load
window.addEventListener("load", function(){
    var preload = document.querySelector(".preloader");
    preload.classList.add("finish-load");
});


//for menu fixed when scrolling
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".menu-head").addClass("menu-fixed");
    }else{
        $(".menu-head").removeClass("menu-fixed");
    }
});


//for menu hover active when click
$(".nav-item").on("click", function(){
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});



// for company section slider
$('.company-img').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  fade: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});




// for team section slider
$('.team-parent').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





$('.web-slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





$('.detail-slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  fade: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});






//for portfolio menu hover active when click
$(".menu").on("click", function(){
    $(".menu").removeClass("active");
    $(this).addClass("active");
});


//for portfolio part js devide work category
var mixer = mixitup('.port-parent');













