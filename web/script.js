let tl = gsap.timeline();

tl.from("nav h1 , nav h4,nav button", {
y:-10,
opacity:0,
delay : 0.6,
duration :0.8,
stagger: 0.1
})

tl.from(".hero-section h1 , .hero-section p , .hero-section button",{
    x: "-40%",
opacity:0,
delay : 0.6,
duration :0.8,
stagger: 0.1
})
tl.from(".hero-section img" ,{
    x: "40%",
opacity:0,
duration :0.8,
}, "-=0.8" )



// scrolling tart
let tl2 = gsap.timeline({
    scrollTrigger :{
        trigger:".Company_Logo",
        scroller:"body",
        markers : true,
        start : " bottom 30",
        end : "top ",
        scrub : 2
    }
})

tl2.from(".Company_Logo img",{
    x: "40%",
    opacity:0,
    duration :0.8,
})