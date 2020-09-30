const circle = document.querySelector('.circle');

gsap.to(circle, 3, {
  strokeDashoffset: 0,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
}); 