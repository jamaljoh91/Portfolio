$(document).ready(function() {
//ScrollFunction
$('li').click(function(event) {
  
  event.preventDefault();
  const section = $(this).text().toLowerCase();
  const info = $(this);
  
  $.scrollTo(document.getElementById(section), 800);
  
  });
});

const revealSettings = {
  reset:true,
  duration: 500,
  origin: 'right',
  viewFactor:0.3,
};

window.sr = ScrollReveal(revealSettings);
sr.reveal('#about', {viewFactor:0.4});
sr.reveal('.sr', {duration: 750}, 250);