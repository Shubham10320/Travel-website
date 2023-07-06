import { navbar, menuBar } from "../components/navbar.js";

document.querySelector("header").innerHTML = navbar();
document.getElementById("menuBar").innerHTML = menuBar();

let menu = document.getElementById("menuBar");
let m = document.getElementById("menu");
m.addEventListener("click", () => {
  menu.style.display = "block";
  m.style.display = "none";
  close.style.display = "block";
  document.getElementById("hero").style.filter = "blur(180px)";
});
let close = document.getElementById("close");

close.addEventListener("click", () => {
  menu.style.display = "none";
  m.style.display = "block";
  close.style.display = "none";
  document.getElementById("hero").style.filter = "blur(0)";
});

let totalPages;
async function gettingPageNumber() {
  try {
    let result = await fetch(`https://database-sr9b.onrender.com/hotels`);
    let res = await result.json();
    totalPages = res.length / 6;
    console.log(totalPages);
    creatingButton(totalPages);
  } catch (error) {
    console.log(error);
  }
}
gettingPageNumber();

let page = 1;

let fetchingData = async (page) => {
  try {
    let result = await fetch(
      `https://database-sr9b.onrender.com/hotels?_limit=6&_page=${page}`
    );
    let res = await result.json();
    displayData(res);
  } catch (error) {
    console.log(error);
  }
};
fetchingData(page);

function creatingButton(totalPages) {
  document.getElementById("page-list").innerHTML = "";
  // let buttons=document.createElement('div')
  for (let i = 1; i <= totalPages; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.classList = "pg";
    console.log("btn" + i);
    btn.addEventListener("click", () => {
      fetchingData(btn.textContent);
      btn.style.backgroundColor = "rgb(19, 158, 212)";
    });
    document.getElementById("page-list").append(btn);
  }
}

let container = document.getElementById("location");

function displayData(data) {
  container.innerHTML = "";
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("id", "img");
    image.setAttribute("src", elem.url);
    image.id = "image";
    image.addEventListener("click", function () {
      addfun(elem);
    });

    var innerdiv = document.createElement("div");
    innerdiv.id = "innerdiv";

    var name = document.createElement("h3");
    name.textContent = elem.name;

    var price = document.createElement("h3");
    price.textContent = "₹" + elem.cost + "/Night";

    innerdiv.append(name, price);

    var desc = document.createElement("p");
    desc.textContent = elem.description;
    desc.id = "desc";

    div.append(image, innerdiv, desc);
    container.append(div);
  });
}
function addfun(elem) {
  localStorage.setItem("id", JSON.stringify(elem));
  window.location.href = "productdetail.html";
}
const searchfun = () => {
  // event.preventDefault()
  let searchData1 = document.getElementById("searchInput").value;
  // console.log(searchData)
  // localStorage.setItem("value",JSON.stringify(searchData))
  searchdata(searchData1);
};
document.getElementById("searchButton").addEventListener("click", searchfun);
const searchdata = async (Country) => {
  try {
    let link = `https://database-sr9b.onrender.com/hotels?Country=${Country}`;
    let data = await fetch(link);
    data = await data.json();
    totalPages = data.length / 6;
    displayData(data);
    creatingButton(totalPages);
  } catch (err) {
    console.log(err);
  }
};

document.getElementById("first").addEventListener("click", () => {
  gettingPageNumber();
  fetchingData(page);
});
document.getElementById("second").addEventListener("click", () => {
  getTrending();
});
document.getElementById("third").addEventListener("click", () => {
  getPopular();
});
document.getAnimations("fifth").addEventListener("click", () => {
  getRecommended();
});

// const Fetch=async(page,limit=6)=>{
//     try{
//         let link=`https://database-sr9b.onrender.com/locations?_page=${page}&_limit=${limit}`;
//         let data= await fetch(link);
//         data= await data.json();
//         console.log(data);
//         display(data);
//     }
//     catch(err){
//         console.log(err);
//     }
//     }
//     const getData1=async(page=1,limit=6)=>{
//         try{
//             let link=`https://database-sr9b.onrender.com/locations?_page=${page}&_limit=${limit}&id=7&id=8&id=9&id=10&id=11&id=12`;
//             let data= await fetch(link);
//             data= await data.json();
//             console.log(data);
//             display(data);
//         }
//         catch(err){
//             console.log(err);
//         }
//         }
//         const getData2=async(page=1,limit=6)=>{
//             try{
//                 let link=`https://database-sr9b.onrender.com/locations?_page=${page}&_limit=${limit}&id=1&id=2&id=3&id=4&id=5&id=6`;
//                 let data= await fetch(link);
//                 data= await data.json();
//                 console.log(data);
//                 display(data);
//             }
//             catch(err){
//                 console.log(err);
//             }
//             }
//         const getData3=async(page=1,limit=6)=>{
//             try{
//                 let link=`https://database-sr9b.onrender.com/locations?_page=${page}&_limit=${limit}&id=13&id=14&id=15&id=16&id=17&id=18`;
//                 let data= await fetch(link);
//                 data= await data.json();
//                 console.log(data);
//                 display(data);
//                 }
//             catch(err){
//                 console.log(err);
//                 }
//                 }
//         const getData4=async(page=1,limit=6)=>{
//             try{
//                 let link=`https://database-sr9b.onrender.com/locations?_page=${page}&_limit=${limit}&id=19&id=20&id=219&id=22&id=23&id=24`;
//                 let data= await fetch(link);
//                 data= await data.json();
//                 console.log(data);
//                 display(data);
//                 }
//             catch(err){
//                 console.log(err);
//                 }
//             }

//         const getData6=async(page=1,limit=6)=>{
//             try{
//                 let link=`https://database-sr9b.onrender.com/locations?_page=${page}&_limit=${limit}&id=8&id=12&id=13&id=4&id=15&id=6`;
//                 let data= await fetch(link);
//                 data= await data.json();
//                 console.log(data);
//                 display(data);
//                 }
//             catch(err){
//                 console.log(err);
//                 }
//             }
//     //previous button
//     let page=0;

//     const previous=()=>{
//         page-=1;
//         if(page===0){
//             alert("No Previous Page");
//             document.getElementById('prev').disabled=true;
//             return;
//             }
//             else{
//                 document.getElementById('prev').disabled = false;
//             }

//         console.log(page)
//         document.getElementById("page-number1").style.backgroundColor=""
//         document.getElementById("page-number2").style.backgroundColor=""
//         document.getElementById("page-number3").style.backgroundColor=""
//         document.getElementById("page-number4").style.backgroundColor=""
//         document.getElementById("page-number5").style.backgroundColor=""

//         var pgno1=document.getElementById("page-number1");
//         var pgno2=document.getElementById("page-number2");
//         var pgno3=document.getElementById("page-number3");
//         var pgno4=document.getElementById("page-number4");
//         var pgno5=document.getElementById("page-number5");

//         if(page==1){
//             pgno1.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==2){
//             pgno2.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==3){
//             pgno3.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==4){
//             pgno4.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==5){
//             pgno5.style.backgroundColor="rgb(19, 158, 212)"
//         }

//         Fetch(page,6);
//      }
//     //next button

//     const next=()=>{
//         page+=1;
//         if(page==5){
//             alert("last page");
//             document.getElementById('next').disabled=true;
//             }else{
//                 document.getElementById('prev').disabled = false;
//             }
//         console.log(page)
//         document.getElementById("page-number1").style.backgroundColor=""
//         document.getElementById("page-number2").style.backgroundColor=""
//         document.getElementById("page-number3").style.backgroundColor=""
//         document.getElementById("page-number4").style.backgroundColor=""
//         document.getElementById("page-number5").style.backgroundColor=""

//         var pgno1=document.getElementById("page-number1");
//         var pgno2=document.getElementById("page-number2");
//         var pgno3=document.getElementById("page-number3");
//         var pgno4=document.getElementById("page-number4");
//         var pgno5=document.getElementById("page-number5");

//         if(page==1){
//             pgno1.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==2){
//             pgno2.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==3){
//             pgno3.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==4){
//             pgno4.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         if(page==5){
//             pgno5.style.backgroundColor="rgb(19, 158, 212)"
//         }
//         Fetch(page,6);
//      }
//      const firstbtn=()=>{
//         let btn=document.getElementById("first");

//         getData1();
//      }
//      const secondbtn=()=>{
//         let btn=document.getElementById("second");

//         getData1();
//      }
//      const thirdbtn=()=>{
//         let btn=document.getElementById("third");

//         getData2();
//      }
//      const fourbtn=()=>{
//         let btn=document.getElementById("four");

//         getData3();
//      }
//      const fivebtn=()=>{
//         let btn=document.getElementById("five");

//         getData4();
//      }
//      const sixbtn=()=>{
//         let btn=document.getElementById("six");

//         getData6();
//      }

//     document.getElementById("prev").addEventListener("click",previous);
//     document.getElementById("next").addEventListener("click",next);
//     document.getElementById("first").addEventListener("click",firstbtn);
//     document.getElementById("second").addEventListener("click",secondbtn);
//     document.getElementById("third").addEventListener("click",thirdbtn);
//     document.getElementById("four").addEventListener("click",fourbtn);
//     document.getElementById("five").addEventListener("click",fivebtn);
//     document.getElementById("six").addEventListener("click",sixbtn);

//     Fetch();

// const perPage = 6; // Number of items per page
//     let currentPage = 1; // Current page number
//     let data = []; // Array to store the fetched data

//     // Fetch data from the API
//     function fetchData() {
//       fetch("https://database-sr9b.onrender.com/pages")
//         .then(response => response.json())
//         .then(responseData => {
//           data = responseData[0].locations;
//           renderData();
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }

//     // Render the data based on the current page
//     function renderData() {
//       const locationContainer = document.getElementById("location");
//       locationContainer.innerHTML = "";

//       const start = (currentPage - 1) * perPage;
//       const end = start + perPage;
//       const locations = data.slice(start, end);

//       locations.forEach(location => {
//         const locationCard = document.createElement("div");
//         locationCard.classList.add("card");

//         const image = document.createElement("img");
//         image.src = location.url;
//         image.alt = location.name;
//         image.classList.add("image");
//         locationCard.appendChild(image);

//         const title = document.createElement("h3");
//         title.innerText = location.title;
//         locationCard.appendChild(title);

//         const description = document.createElement("p");
//         description.innerText = location.description;
//         locationCard.appendChild(description);

//         locationContainer.appendChild(locationCard);
//       });

//       renderPagination();
//     }

//     // Render the pagination buttons
//     function renderPagination() {
//       const paginationContainer = document.getElementById("pagination");
//       paginationContainer.innerHTML = "";

//       const totalPages = Math.ceil(data.length);

//       for (let i = 1; i <= totalPages; i++) {
//         const button = document.createElement("button");
//         button.innerText = i;
//         button.addEventListener("click", () => {
//           currentPage = i;
//           renderData();
//         });

//         if (i === currentPage) {
//           button.classList.add("active");
//         }

//         paginationContainer.appendChild(button);
//       }
//     }

//     // Search functionality
//     function search() {
//       const searchInput = document.getElementById("searchInput");
//       const searchTerm = searchInput.value.toLowerCase();

//       const filteredData = data.filter(location =>
//         location.name.toLowerCase().includes(searchTerm)
//       );

//       currentPage = 1; // Reset to the first page
//       data = filteredData;
//       renderData();
//     }

//     document.addEventListener("DOMContentLoaded", () => {
//       fetchData();

//       const searchButton = document.getElementById("searchButton");
//       searchButton.a

close.addEventListener('click', ()=>{
    menu.style.display='none'
    m.style.display='block';
    close.style.display='none';
    document.getElementById('hero').style.filter= "blur(0)";
})

// localStorage.setItem("hotelid",8)