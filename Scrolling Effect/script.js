gsap.from(".box1",{
    scale : 2,
    delay : 1,
    rotate : 120
})

gsap.from(" .page-2 .box2",{
   scale:1 ,
    delay : 1,
    rotate : 120,
    scrollTrigger : {
        trigger : ".page-2  .box2",
        scroller :"body",
        markers : true,
        start : "top 60%"
    }
})


gsap.from(".page-4 .box4",{
   scale:1 ,
    delay : 1,
    opacity : 0,
    // duration:20,
    rotate : 360,
    scrollTrigger : {
        trigger : ".page-4  .box4",
        scroller :"body",
        markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub :true

    }
})


gsap.from(".box3 h3",{
    opacity:"0",
    x:500,
    duration : 2
    ,
    scrollTrigger:{
        trigger : ".box3 h3",
        scroller :'body',
        markers:true,
        markers : true,
        start : "top 60%"
    }
})
gsap.from(".box3 h4",{
    opacity:"0",
    x:-500,
    duration : 2
    ,
    scrollTrigger:{
        trigger : ".box3 h4",
        scroller :'body',
        markers:true,
        markers : true,
        start : "top 60%"
    }
})

gsap.to(".page-5 h1",{
    transform :"translate(-100%)",
    // duration : 2,

    scrollTrigger:{
        trigger : ".page-5 h1",
        scroller :'body',
        scrub : 2,
        start : "top 50%"
        ,
        end : "top 20%",
        pin : true


    }
})