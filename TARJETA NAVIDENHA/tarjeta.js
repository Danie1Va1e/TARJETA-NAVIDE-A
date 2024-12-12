const container= document.querySelector('container');
const card= document.querySelector('card');
const title= document.querySelector('title');
const santa= document.querySelector('santa');
const tree= document.querySelector('tree');

card.addEventListener('mousemove', (rotate)=>{

    let x = (innerWidth / 2 - rotate.pagex) / 15;
    let y = (innerHeight / 2 - rotate.pagey) / 15;
    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";

    container.addEventListener("mouseover", ()=> {
    title.style.transform = "translate3D(0.0, 160px)";
    })
    });