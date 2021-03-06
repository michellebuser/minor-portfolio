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

  // window.homepagecheck = function() {
  //   var check = false;
  //   if(document.location.pathname === "/"){
  //     check=true;
  //     }
  //   return check;
  // }

// if(!window.homepagecheck()){
gsap.set('.card', { opacity: 0});
const stagger = 0.2;

ScrollTrigger.batch('.card', {
  interval: 0.1,
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: stagger, duration: duration }),
start: '100 bottom'
//markers: true
  });
// }
  
  // if(window.homepagecheck()){
// gsap.set('.mason', { opacity: 0});
// const stagger2 = 0.1;

// ScrollTrigger.batch('.mason', {
//   interval: 0.1,
//   onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: stagger2, duration: duration }),
// start: 'center bottom',
// end: 'top top',
//markers: true
  // });
  // }
});