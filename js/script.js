$(document).ready(function () {

  // Toggle menu icon and header on mobile
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Window scroll and load events
  $(window).on('scroll load', function () {

    // Reset menu on scroll
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    // Show or hide scroll-to-top button
    if ($(window).scrollTop() > 100) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }

    // Scroll spy (active nav highlighting)
    $('section').each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 100;
      let height = $(this).height();
      let id = $(this).attr('id');

      if (top >= offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar ul li a[href="#' + id + '"]').addClass('active');
      }
    });

  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (e) {
    let target = $(this.getAttribute('href'));

    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, 'swing');
    }
  });

});

// Typewriter effect (for home title)
const typeTarget = document.querySelector(".home h1 span");
const words = ["Mohamed Thahir", "Security Professional", "Process Specialist"];
let i = 0, wordIndex = 0;

function typeEffect() {
  if (wordIndex >= words.length) wordIndex = 0;
  let currentWord = words[wordIndex];
  typeTarget.innerHTML = currentWord.substring(0, i + 1);
  i++;

  if (i === currentWord.length) {
    setTimeout(() => {
      i = 0;
      wordIndex++;
      setTimeout(typeEffect, 500);
    }, 1500);
  } else {
    setTimeout(typeEffect, 150);
  }
}

typeEffect();

