// hamburger menu

const $body = $('body');
const $nav = $('nav');
const $hamburger = $('.hamburger');

// $hamburger.on('mousedown', (e) => {
//   e.preventDefault();
// });

// $(document).ready(function(){
//   $hamburger.on('click', function(){
//     $nav.toggleClass('show');
//   });
// });

function openNav(){
  $hamburger.on('click', function(){
    $body.toggleClass('show');
  });
}

openNav();


// slide in content on scroll

$(document).ready(function() {

    window.sr = ScrollReveal();
    sr.reveal('.image', { 
        origin: 'right', 
        duration: 1000 
      });
      sr.reveal('.image', { 
        origin: 'right', 
        duration: 500 
      });
      sr.reveal('.image', { 
        origin: 'right', 
        duration: 1000 
      });
    }
)