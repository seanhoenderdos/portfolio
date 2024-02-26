gsap.registerPlugin(ScrollTrigger);

const textElementsSec5 = gsap.utils.toArray('.textsec5');

textElementsSec5.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});
