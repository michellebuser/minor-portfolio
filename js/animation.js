gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


document.addEventListener("DOMContentLoaded", function(event){

const duration = 2;


gsap.defaults({ ease: 'power3' });
gsap.set('.fade-container', { opacity: 0});

ScrollTrigger.batch('.fade-container', {
  interval: 0.1,
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: duration }),
  onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 0, duration: duration }),
  onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: duration }),
  onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 20,  duration: duration }),
  start: '100 bottom',
  end: 'center top',
  //markers: true
  });

gsap.set('.card', { opacity: 0});
const stagger = 0.2;

ScrollTrigger.batch('.card', {
  interval: 0.1,
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: stagger, duration: duration }),
onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 0, stagger: stagger, duration: duration }),
onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: stagger, duration: duration }),
onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 20, stagger: stagger, duration: duration }),
start: '100 bottom',
end: 'center top',
//markers: true
  });

});