function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function navAnimation(){

var nav = document.querySelector("nav")

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
      height: "21vh"
    })
    tl.to(".nav-part2 h5", {
      display: "block"
    })
    tl.to("nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.6
      }
    })
  })


nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2
      }
    })
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0
    })
    tl.to("#nav-bottom", {
      height: "0vh",
      duration: 0.2
    })
  })
}
function page2Animation(){
  
  var element = document.querySelectorAll(".right-element")
  
  element.forEach(function(element){
    element.addEventListener("mouseenter",function(){
      gsap.to(element.childNodes[3],{
        opacity:1,
        scale:1
      })
    })
    element.addEventListener("mouseleave",function(){
      gsap.to(element.childNodes[3],{
        opacity:0,
        scale:0
      })
    })
    element.addEventListener("mousemove",function(dets){
      gsap.to(element.childNodes[3],{
        x:dets.x -element.getBoundingClientRect().x-50,
        y:dets.y -element.getBoundingClientRect().y-130
      })
    })
  })
}
function page3videoAnimation(){
  var page3center = document.querySelector(".page3-center")
  var video = document.querySelector("#page3 video")
  
  page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
      Transform:"scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0 
    })
  })
  video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
      Transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px"
    })
  })
  var sections = document.querySelectorAll(".sec-right")

sections.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity = 1
    elem.childNodes[3].play()
  })
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity = 0
    elem.childNodes[3].load()
  })
})
}
function page9Animations(){
  gsap.from("#bottom9-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
       trigger:"#bottom9-part2",
       scroller:"#main",
      //  markers:true,
       start:"top 80%",
       end:"top 10%",
      scrub:true  
    }
    })

}
// gsap.to("#bottom9-part2 h4",{
//   x:150,
//   stagger:{
//     amount:-0.3
//   },
//   scrollTrigger:{
//  trigger:"#bottom9-part2",
//  scroller:"body",
//  markers:true,
//  start:"top 80%",
//  end:"top -80%",
// scrub:true  
// }
// })







locomotiveAnimation() 
navAnimation() 
page2Animation()
page3videoAnimation()
page9Animations()