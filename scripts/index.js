import {navbar, menuBar, footer} from '../components/navbar.js'

document.querySelector('header').innerHTML=navbar();
document.getElementById('menuBar').innerHTML=menuBar();
document.querySelector('footer').innerHTML=footer();
let menu=document.getElementById('menuBar');
let m=document.getElementById('menu');
    m.addEventListener('click', ()=>{
        menu.style.display='block'
        m.style.display='none';
        close.style.display='block'
        document.querySelector('nav').style.zIndex='0'
        document.querySelector('.container').style.filter="blur(180px)"
        document.querySelector('#hero').style.filter="blur(180px)"
})
let close=document.getElementById('close')

close.addEventListener('click', ()=>{
    menu.style.display='none'
    m.style.display='block';
    close.style.display='none';
    document.querySelector('nav').style.zIndex='2'
    document.getElementById('hero').style.filter= "blur(0)";
    document.querySelector('.container').style.filter= "blur(0)";
})
document.getElementById('searchThat').addEventListener('click',()=>{
    let inputVal=document.getElementById('input').value 
    localStorage.setItem('searchData', JSON.stringify(inputVal));
    location.href='product.html'
})


