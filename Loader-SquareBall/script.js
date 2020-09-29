const squareBall = document.querySelector('.square-ball');

gsap.to(squareBall, 1, {
  rotation: 360,
  repeat: -1,
  borderRadius: '50%',
  scale: .5,
  yoyo: true,
  repeatDelay: .35,
  background: '#389798',
  borderColor: '#face9e'
});