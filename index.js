let animation1=document.querySelector(".head1");

setTimeout(()=>{
    animation1.classList.replace("head1","head2");
},4000);

let animate=document.querySelector(".animation1");
window.addEventListener("scroll",()=>{
    if(window.scrollY >= 500 && window.screenY<=900)
    {
        animate.classList.replace("animation1","animation2");
    }
})
let animate1=document.querySelector(".animation3");
window.addEventListener("scroll",()=>{
    if(window.scrollY >= 500 && window.screenY<=900)
    {
        animate1.classList.replace("animation3","animation4");
    }
})
let animate2=document.querySelector(".animation5");
window.addEventListener("scroll",()=>{
    if(window.scrollY >= 300 && window.screenY<=900)
    {
        animate2.classList.replace("animation5","animation6");
    }
})