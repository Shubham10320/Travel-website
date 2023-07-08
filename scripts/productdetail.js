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
    document.getElementById('hero').style.filter= "blur(0)";
    document.querySelector('.container').style.filter= "blur(0)";
})


let z = JSON.parse(localStorage.getItem("id"));

let arr = [];
arr.push(z);
console.log(arr);
cool_fun(arr);
function cool_fun(arr) {
  document.getElementById("title").textContent = "";
  document.getElementById("images").textContent = "";
  document.getElementById("discription").textContent = "";
  //document.getElementById("right_title").textContent = "" ;

  arr.map((ele) => {
    let title = document.createElement("div");
    title.id = "title";
    let subtitle = document.createElement("div");
    subtitle.id = "subtitle";

    let p1 = document.createElement("p");
    p1.innerText = ele.title;
    p1.id = "headline";

    let i1 = document.createElement("i");
    i1.className = "fa-solid fa-star";
    i1.id='starPrem'
    let p2 = document.createElement("p");

    p2.textContent = "4.92 . 597 reviews " + ele.name;
    subtitle.append(i1,p2);
    title.append(p1,subtitle);
    document.getElementById("title").append(title);

    // ==============================title=================================

    let d3 = document.createElement("div");
    d3.className = "first";
    let img = document.createElement("img");
    img.setAttribute("src", ele.url);
    d3.append(img);

    let d4 = document.createElement("div");
    d4.className = "second";
    let img1 = document.createElement("img");
    img1.setAttribute("src", ele.url1);
    let img2 = document.createElement("img");
    img2.setAttribute("src", ele.url2);
    let img3 = document.createElement("img");
    img3.setAttribute("src", ele.url3);
    let img4 = document.createElement("img");
    img4.setAttribute("src", ele.url4);
    d4.append(img1, img2, img3, img4);

    document.getElementById("images").append(d3, d4);

    let p6 = document.createElement("p");
    p6.textContent = ele.description1.slice(0,1000);
    document.getElementById("discription").append(p6);

    // ========================proceed to payment ===========================
    let pay_btn = document.createElement('button');
    pay_btn.textContent = 'BOOK NOW';
    pay_btn.classList = 'pg'
    pay_btn.addEventListener('click',()=>{
      navTobooking(ele);
    })
    document.getElementById("payment").append(pay_btn);
  });
}

function navTobooking(hotel){
  let newarr = []
  newarr.push(hotel);
  localStorage.setItem('hotel-book',JSON.stringify(newarr));
  location.href = "booking.html"
}
document.querySelector("#indexA").addEventListener("click",()=>{
  window.location.href = "index.html"
})