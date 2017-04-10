
/* global $ */

function main () {
  (function () {
    'use strict'

    /* ====================================
    Show Menu on Book
    ======================================  */
    $(window).bind('scroll', function () {
      let navHeight = $(window).height() - 100
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on')
      } else {
        $('.navbar-default').removeClass('on')
      }
    })

    $('body').scrollspy({
      target: '.navbar-default',
      offset: 80
    })

    /*  ====================================
    Portfolio Isotope Filter
    ======================================  */
    $(window).load(function () {
      let $container = $('#lightbox')
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      })
      $('.cat a').click(function () {
        $('.cat .active').removeClass('active')
        $(this).addClass('active')
        var selector = $(this).attr('data-filter')
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        })
        return false
      })
    })
  }())
}
main()
