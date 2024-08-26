
function breakText() {
    let heading = document.querySelector('h1').textContent;
    let h1 = document.querySelector('h1');
      
let split_text = heading.split("");

let clutter = "";

let halftext = Math.floor(split_text.length / 2);





split_text.forEach((el, ind) => {
    if (ind < halftext) {
        
        clutter += `<span class="a">${el}</span>`;
    }
    else{
        clutter += `<span class="b">${el}</span>`;
    }
    
});

// console.log(clutter);


h1.innerHTML = clutter;

}

breakText();

gsap.from(".a",{
    y:100,
    duration : 0.8,
    opacity : 0,
    stagger : 0.4,
    delay : 0.5
})
gsap.from(".b",{
    y:100,
    duration : 0.8,
    opacity : 0,
    stagger : -0.4,
    delay : 0.5

})