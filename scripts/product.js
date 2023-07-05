import {navbar, menuBar} from '../components/navbar.js'

document.querySelector('header').innerHTML=navbar();
document.getElementById('menuBar').innerHTML=menuBar();

let menu=document.getElementById('menuBar');
let m=document.getElementById('menu');
    m.addEventListener('click', ()=>{
        menu.style.display='block'
        m.style.display='none';
        close.style.display='block'
        document.getElementById('hero').style.filter= "blur(180px)";
})
let close=document.getElementById('close')

close.addEventListener('click', ()=>{
    menu.style.display='none'
    m.style.display='block';
    close.style.display='none';
    document.getElementById('hero').style.filter= "blur(0)";
})