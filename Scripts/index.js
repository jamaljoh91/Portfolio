
const revealSettings = {
  reset:true,
  duration: 500,
  origin: 'right',
  viewFactor:0.3,
};

window.sr = ScrollReveal(revealSettings);
sr.reveal('.about', {viewFactor:0.4});
sr.reveal('.sr', {duration: 750}, 250);