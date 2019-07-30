// --------------------------------------------------------- //
// STICKY INPUT
// --------------------------------------------------------- //
$('.cta-line-more').click(function(){
  $('.cta-line-more').hide();
  $('.more-press').show();
});

// --------------------------------------------------------- //
// FAQ
// --------------------------------------------------------- //
$('.one-faq-item__question').click(function(){
  $(this).parent().toggleClass("active");
  $(this).next().slideToggle();
});

// --------------------------------------------------------- //
// STICKY INPUT
// --------------------------------------------------------- //
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height > 80) {
    $('.sticky-header').addClass('active');
    $('.seller-top-banner').addClass('sticky');
  }
  else {
    $('.sticky-header').removeClass('active');
    $('.seller-top-banner').removeClass('sticky');
  }
});

// --------------------------------------------------------- //
// HOMEPAGE
// --------------------------------------------------------- //
$('.testimonials-slider').slick({
  dots: false,
  autoplay: true,
});


// --------------------------------------------------------- //
// SUBMENU MAIN MENU
// --------------------------------------------------------- //
$('.primary-nav-item.dropdown').click(function(){
  $(this).toggleClass('clicked');
});

// --------------------------------------------------------- //
// BUY PAGE
// --------------------------------------------------------- //
$('.value-props-carousel').slick({
  dots: false,
  autoplay: false,
  arrows: false,
});

// --------------------------------------------------------- //
// STORIES LANDER
// --------------------------------------------------------- //
$('.new-stories-slider').slick({
  dots: false,
  autoplay: true,
  fade: true,
  arrows: false,
});

$('.slider-video-testimonials').slick({
  dots: false,
  autoplay: true,
  fade: false,
  arrows: true,
});

$('.new-stories-slider').on('click', function(e) {
  $(this).slick('slickNext');
});

$('.glance-1').click(function(){
  $('.value-props-carousel').slick('slickGoTo',0);
});
$('.glance-2').click(function(){
  $('.value-props-carousel').slick('slickGoTo',1);
});
$('.glance-3').click(function(){
  $('.value-props-carousel').slick('slickGoTo',2);
});
$('.glance-4').click(function(){
  $('.value-props-carousel').slick('slickGoTo',3);
});
$('.slide-left-side-nav').click(function(){
  $('.value-props-carousel').slick('slickNext');
});

// --------------------------------------------------------- //
// Activate WOW.js
// --------------------------------------------------------- //
new WOW().init();

// --------------------------------------------------------- //
// FAQ FILTERS
// --------------------------------------------------------- //

$('.faq-filter').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
});

$('.faq-filter.faq-all').click(function(){
  $('.one-faq').show();
});

$('.faq-filter.faq-general').click(function(){
  $('.one-faq.general').show();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-sellers').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').show();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-buyers').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').show();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-agents').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').show();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-trade-ins').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').show();
});

// --------------------------------------------------------- //
// HOW IT WORKS
// --------------------------------------------------------- //
// $('.hiw-toggle-nav li').on('click', function(){
//   if ($(this).hasClass('active')) {
//     return false;
//   } else {
//     $('.hiw-toggle-nav li.active').removeClass('active');
//     $(this).addClass('active');
//     var currentTab = $(this).data('toggle');
//     $('.hiw-tab.active').removeClass('active');
//     $('.hiw-main').find(".hiw-tab[data-tab='"+ currentTab +"']").addClass('active');
//   }
// });

// --------------------------------------------------------- //
// SMOOTH SCROLL
// --------------------------------------------------------- //
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
        }, 1500);
      }
    }
  });

var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
if (iOS === true) {
  $('.route-minneapolis.riverside figure.bg-image').css({'background-attachment': 'scroll'});
}

$('.repair-examples .repair').click(function() {
  $(this).toggleClass('active');
  $(this).find('.circle-plus').toggleClass('opened');
})




$('.filter-nav a').on('click', function(e) {
  e.preventDefault();
  var dataTerm = $(this).data('term');

  if ($(this).parent().hasClass('active')) {
    return false;

  } else if(dataTerm === 'all-terms') {
    $('.filter-nav li.active').removeClass('active');
    $(this).parent().addClass('active');
    $('.filter-stories .stories-wrap .story').removeClass('hidden');
    var storyCount = $(".stories-wrap .story").length;

    if (storyCount > 12) {
      $('.stories-wrap .button').removeClass('hidden');

      $('.stories-wrap .story').each(function(index) {
        if (index >= 12) {
          $(this).addClass('hidden');
        }
      });
    }

  } else {
    $('.filter-nav li.active').removeClass('active');
    $(this).parent().addClass('active');
    $('.stories-wrap .button').addClass('hidden');
    $('.filter-stories .stories-wrap .story').addClass('hidden');
    $('.filter-stories .stories-wrap .story[data-cat*="' + dataTerm +'"]').removeClass('hidden');
  }
})


if ( $('.filter-stories').length ) {
  var storyCount = $(".stories-wrap .story").length;

  if (storyCount > 12) {

    $('.stories-wrap .story').each(function(index) {
      if (index >= 12) {
        $(this).addClass('hidden');
      }
    });

    $('.stories-wrap .button').removeClass('hidden');

    $('.stories-wrap .button').on('click', function(e){
      e.preventDefault();
      var hiddenStories = $(".stories-wrap .story.hidden").length;

      if (hiddenStories <= 3) {
        $('.stories-wrap .button').addClass('hidden');
      }

      $('.stories-wrap .story.hidden').each(function(i) {
        if (i <= 2) {
          $(this).removeClass('hidden');
        }
      });
    });
  }
}

// --------------------------------------------------------- //
// PRE RENO
// --------------------------------------------------------- //
$('.pre-reno-homes .pre-reno-card').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active');
  }
  checkButton();
})

var checkButton = function() {
  var houseSelected = false;
  $(".pre-reno-homes .pre-reno-card").each(function(index, value){
    if ($(value).hasClass("active")) {
      houseSelected = true;
      return false;
    }
  });

 if(houseSelected == true) {
  $('.pre-reno-form-wrap .form-btn-wrap .button').removeClass('disabled');
 } else {
  $('.pre-reno-form-wrap .form-btn-wrap .button').addClass('disabled');
 }
}

if ( $('.route-pre-reno').length ) {
  var nextStep = $('.route-pre-reno .form-next-step');
  document.addEventListener( 'wpcf7mailsent', function( event ) {
    $('.wpcf7-response-output').addClass('alert alert-success');
    nextStep.addClass('active');
  }, false );
}

$('.pre-reno-form-wrap .wpcf7-form').submit(function() {
  var renoHomes = [];
  $('.pre-reno-homes .pre-reno-card.active').each(function (index, value){
    var home = {};
    home.neighborhood = $(this).find('h2').text();
    home.city = $(this).find('.pre-reno-card-detail p').text();
    renoHomes.push(home);
  });

  $('#preRenoHomes').val(JSON.stringify(renoHomes));
  return false;
});

// --------------------------------------------------------- //
// END PRE RENO
// --------------------------------------------------------- //

