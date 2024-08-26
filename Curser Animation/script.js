let cursor =document.querySelector(".cursor");
let img =document.querySelector("img");
let main = document.querySelector("body");

main.addEventListener('mousemove', (e)=>{

gsap.to(cursor , {
x:e.x,
y:e.y,
duration : 2.5,
ease: "elastic.out(1,0.3)"

})
})
img.addEventListener('mouseenter', (e)=>{

gsap.to(cursor , {
scale : 2,

duration : 2.5,
ease: "elastic.out(1,0.3)"

})
cursor.innerText = "view more"
})
img.addEventListener('mouseleave', (e)=>{

gsap.to(cursor , {
scale : 1,

duration : 2.5,
ease: "elastic.out(1,0.3)"

})
cursor.innerText = ""

})



// main.addEventListener('mousemove', (e)=>{

// gsap.to(cursor2 , {
// x:e.x,
// y:e.y,
// duration : 1,
// ease: "elastic.out(1,0.3)"

// })
    
// })