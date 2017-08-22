$(document).ready(function() {
//ScrollFunction
$('li').click(function(event) {
  
  event.preventDefault();
  const section = $(this).text().toLowerCase();
  const info = $(this);
  
  $.scrollTo(document.getElementById(section), 800);
  
  });

//Nav opener 
$(function() {
  $('.toggleNav').on('click',function() {
    $('nav ul').toggleClass('open');
  });
});

});

const revealSettings = {
  reset:true,
  duration: 500,
  origin: 'right',
  viewFactor:0.3,
};

window.sr = ScrollReveal(revealSettings);
sr.reveal('#about', {viewFactor:0.1});
sr.reveal('.sr', {duration: 750}, 250);