


/* ===========================================================
    nav scroll to fixed js start
    =========================================================== */
    $(window).on("scroll", function(){
     if($(window).scrollTop() > 100){
      $('.menubar').addClass('fixed-menu');
    }

    if($(window).scrollTop() < 20){
      $('.menubar').removeClass('fixed-menu');
    }
  });

/* ===========================================================
    nav scroll to fixed js start
    =========================================================== */



/* ===========================================================
    active menu js start
    =========================================================== */
    $('.navbar-nav li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
/* ===========================================================
    active menu js end
    =========================================================== */




/* ===========================================================
    smooth scroll js start
    =========================================================== */
 // Select all links with hashes
 $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 3000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/* ===========================================================
    smooth scroll js end
    =========================================================== */



/* ===========================================================
    isotope-gallery-filter jquery plugin start
    =========================================================== */
    (function($){

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.portfolio-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// filter items on button click
$('.portfolio-filter').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

})(jQuery);
/* ===========================================================
    isotope-gallery-filter jquery plugin end
    =========================================================== */

/* ===========================================================
    start testimonial-area owl-carousel jquery plugin 
    =========================================================== */
   // owl-carousel plugin define 
   $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

   // testimonial owlCarousel controls
   $('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplaySpeed: 4000,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true,
      },
      576:{
        items:1,
        nav:true,
      },
      768:{
        items:2,
        nav:true,
        loop:true,
      },
      992:{
        items:2,
        nav:true,
        loop:true,
      },
      1365:{
        items:3,
        nav:true,
        loop:true,
      }
    }

  });

   // testimonial next & previous Button
   $(document).ready(function(){
    var owl = $('.testimonial');

    $('.nextBtn').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.PreBtn').click(function() {
      owl.trigger('prev.owl.carousel');
    });

  });
/* ===========================================================
    end testimonial-area owl-carousel jquery plugin 
    =========================================================== */

/* ===========================================================
    Brand-area owl-carousel jquery plugin start
    =========================================================== */
   // brand owlCarousel controls
   $('.brand').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplaySpeed: 2000,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true,
      },
      576:{
        items:2,
        nav:true,
      },
      768:{
        items:3,
        nav:true,
        loop:true,
      },
      992:{
        items:4,
        nav:true,
        loop:true,
      },
      1365:{
        items:5,
        nav:true,
        loop:true,
      }
    }
  });
    /* ===========================================================
     Brand-area owl-carousel jquery plugin end
     =========================================================== */
     


/* ===========================================================
    Start fixed Area js
    =========================================================== */
    $(document).ready(function(){
      $(".fixed-round-menu").click(function(){
        $(".toggle-menu").slideToggle(1000);
      });
    });

   /* ===========================================================
    End fixed Area js
   =========================================================== */