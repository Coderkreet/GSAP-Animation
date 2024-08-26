// gsap.to("#box1",{
//     x:600,
//     duration:1,
//     delay:1,
//     borderRadius : "100%",
//     yoyo : true,
//     repeat : 1
//   })
// // gsap.to("#box2",{
// //     x:600,
// //     duration:2,
// //     delay:1
// //   })
// gsap.from("#box2",{
//     x:600,
//     duration:1,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     scale : 1.5,
//     repeat : 1,
//     yoyo : true

//   })

//   gsap.from("h2",{
//     color : "red",
//     duration:1,
//     delay:1,
//     opacity : 0,
//     y:30,
//     stagger :0.3
//   })

let tl = gsap.timeline();

tl.from(".logo",{
    y:-30,
    opacity:0,
    duration:1
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger : 0.3
})
tl.from(".part3",{
    y:-30,
    opacity:0,
    duration:1  
})