$(document).ready(function(){
    $(document.body).on("click", ".btn-search-overlay, .overlay-search .close-search", function (e) {
      e.preventDefault();
      var $mainMenu = $(".main_menu");
      var $overlaySearch = $('.overlay-search');
      $mainMenu.addClass("search-transition");
      setTimeout(function () {
          $mainMenu.removeClass("search-transition");
      }, 800);
      $overlaySearch.toggleClass('search-open');
      $mainMenu.toggleClass('search-open');
      if ($overlaySearch.hasClass("search-open")) {
          $overlaySearch.find('input[type="search"]').focus();
          $overlaySearch.attr("aria-expanded", "true");
      } else {
          $overlaySearch.attr("aria-expanded", "false");
      }
  });
  if ($('.btn-mb-menu').length) {
    $(document).on('click', '.btn-mb-menu', function() {
      $(this).toggleClass('active');
      $('.main_menu_mb').toggleClass('open');
    });
  }
  $('.slickshow').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows:false
  });
  // Scroll To Top
    $(".scrolltop").click(function(event){
    $('html, body').animate({ scrollTop: 0 }, 1000);
    });
    // Hide,Show ScrollToTop
    var num = 100;  
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {   
            $('.scrolltop,.header').addClass('fixed');
        }
        else
        {
            $('.scrolltop,.header').removeClass('fixed');
        }
    });
  // End Scroll To Top 
});