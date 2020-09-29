const balls = document.querySelectorAll('.ball');


gsap.fromTo(balls, 1, {
  scale: 0,
  opacity: 0,
}, {
  scale: 1.2,
  opacity: 1,
  stagger: .2,
  repeat: -1,
  yoyo: true
});