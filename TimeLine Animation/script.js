let tl = gsap.timeline()




let openmanu = document.querySelector('#open');
let closemanu = document.querySelector('#closemanu');

openmanu.addEventListener('click',()=>{

    tl.to(".full",{

        right : 0,
        duration : 0.8
        })
        
        tl.from(".full h4",{
            x:150,
            duration : 0.7,
            stagger:0.28,
            opacity : 0
        })
        
})
closemanu.addEventListener('click',()=>{

    tl.to(".full",{

        right : "-40%",
        duration : 0.8
        })
    
        
})