// const element = document.querySelector('svg');
// const button = document.querySelector('logo');
// const path = element.querySelectorAll('path');

// let totalLength = 4;

// function initPath(path){
//    totalLength = path.getTotalLength();
//    path.style.strokeDasharray = `${totalLength}`;
//    path.style.strokeDashoffset = totalLength;
// }

// function animatePath(){
//   path.classList.add("bounce");
//   path.style.strokeDashoffset = 0;   
// }

// button.addEventListener('mouseOver', ()=>{
//   animatePath()
// })

const boxes = gsap.utils.toArray('.fade-container');

boxes.forEach((box, i) => {
  ScrollTrigger.create({
    trigger: box,
    toggleClass: 'active',
    // this toggles the class again when you scroll back up:
    toggleActions: 'play none none none',
    // this removes the class when the scrolltrigger is passed:
    // once: true,
  });
});