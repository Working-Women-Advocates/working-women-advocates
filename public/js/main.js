/* global $ */

function main () {
  (function () {
    'use strict'

    // Show menu on scroll
    $(window).bind('scroll', function () {
      const navHeight = $(window).height() - 100
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
  }())
}

main()
