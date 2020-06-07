
// for preloader none when complete load
window.addEventListener("load", function(){
    var preload = document.querySelector(".preloader");
    preload.classList.add("finish__load");
});


//for menu fixed when scrolling
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".menu__head").addClass("menu__fixed");
    }else{
        $(".menu__head").removeClass("menu__fixed");
    }
});


//for menu hover active when click
$(".nav-item").on("click", function(){
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});




$('.portparent').slick({
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	



// for company section slider
$('.team__parent').slick({
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






//COLOR PICKER JS PART STRAT

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color__picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: '#ffffff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
        }
    }
});


pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.querySelector('.change__color').style.backgroundColor = rgbaColor;
})

//COLOR PICKER JS PART END
















