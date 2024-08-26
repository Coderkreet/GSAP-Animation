let init_path  = `M 10 100 Q 500 100 990 100`    

let final_path =    `M 10 100 Q 500 100 990 100`

 let string =  document.querySelector(".string");

 string.addEventListener ("mousemove",(e)=>{
init_path = `M 10 100 Q ${e.x} ${e.y} 900 100`
console.log(init_path);


gsap.to("svg path",{
    attr:{d:init_path},
    duration : 0.2,
    ease :"power3.out"
})
 })
 string.addEventListener ("mouseleave",(e)=>{
gsap.to("svg path",{
    attr:{d:final_path},
    duration : 1.5,
    ease :"elastic.out(1,0.2)"
})
 })
