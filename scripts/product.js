// import { navbar, menuBar,footer } from "../components/navbar.js";

// document.querySelector("header").innerHTML = navbar();
// document.getElementById("menuBar").innerHTML = menuBar();
// document.querySelector("footer").innerHTML = footer();




// let menu = document.getElementById("menuBar");
// let m = document.getElementById("menu");
// m.addEventListener("click", () => {
//   menu.style.display = "block";
//   m.style.display = "none";
//   close.style.display = "block";
//   document.getElementById("hero").style.filter = "blur(180px)";
// });
// let close = document.getElementById("close");

// close.addEventListener("click", () => {
//   menu.style.display = "none";
//   m.style.display = "block";
//   close.style.display = "none";
//   document.getElementById("hero").style.filter = "blur(0)";
// });

// let totalPages;
// async function gettingPageNumber() {
//   try {
//     let result = await fetch(`https://database-sr9b.onrender.com/hotels`);
//     let res = await result.json();
//     totalPages = res.length / 6;
//     console.log(totalPages);
//     creatingButton(totalPages);
//   } catch (error) {
//     console.log(error);
//   }
// }
// // gettingPageNumber();

// let page = 1;
// let query='';
// let fetchingData = async (page) => {
//   try {
//     // console.log(`https://database-sr9b.onrender.com/hotels?_limit=6&_page=${page}&${query}`)
//     let result = await fetch(
//       `https://database-sr9b.onrender.com/hotels?_limit=6&_page=${page}&_${query}`
//     );
//     let res = await result.json();
//     displayData(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
// //  fetchingData(page);

// function creatingButton(totalPages) {
//   document.getElementById("page-list").innerHTML = "";
//   // let buttons=document.createElement('div')
//   for (let i = 1; i <= totalPages; i++) {
//     let btn = document.createElement("button");
//     btn.textContent = i;
//     btn.classList = "pg";
//     console.log("btn" + i);
//     btn.addEventListener("click", () => {
//       fetchingData(btn.textContent);
//       document.querySelectorAll(".pg").forEach((ele)=>{
//         ele.classList = "pg"
//       })
//       btn.classList = "pg active";
//     });
//     document.getElementById("page-list").append(btn);
//   }
// }

// let container = document.getElementById("location");

// function displayData(data) {
//   container.innerHTML = "";
//   data.forEach((elem, i) => {
//     let div = document.createElement("div");

//     var image = document.createElement("img");
//     image.setAttribute("src", elem.url);
//     image.id = "image";
//     image.addEventListener("click", function () {
//       addfun(elem);
//     });

//     var innerdiv = document.createElement("div");
//     innerdiv.id = "innerdiv";

//     var name = document.createElement("h3");
//     name.textContent = elem.name;

//     var price = document.createElement("h3");
//     price.textContent = "₹" + Math.round(elem.cost/3) + "/Night";

//     innerdiv.append(name, price);

//     var desc = document.createElement("p");
//     desc.textContent = elem.description;
//     desc.id = "desc";

//     div.append(image, innerdiv, desc);
//     container.append(div);
//   });
// }
// function addfun(elem) {
//   localStorage.setItem("id", JSON.stringify(elem));
//   window.location.href = "productdetail.html";
// }
// // const searchfun = () => {
// //   // event.preventDefault()
// //   let searchData1 = document.getElementById("searchInput").value;
// //   // console.log(searchData)
// //   // localStorage.setItem("value",JSON.stringify(searchData))
// //   searchdata(searchData1);
// // };
// // document.getElementById("searchButton").addEventListener("click", searchfun);
// let searchdata = async (searchedData) => {
//   try {
//     // https://database-sr9b.onrender.com/hotels?_limit=6&_page=${page}&${query}
//     let link = `https://database-sr9b.onrender.com/hotels?_limit=6&_Country=${searchedData}`;
//     let data = await fetch(link);
//     data = await data.json();
//     totalPages = data.length / 6;
//     displayData(data);
//     creatingButton(totalPages);
//   } catch (err) {
//     console.log(err);
//   }
// };
// // let searchedData=JSON.parse(localStorage.getItem('searchData')) || '';
// let searchedData
// if(localStorage.getItem('searchData')==='' || !localStorage.getItem('searchData')){
//   console.log('hiii')
//   fetchingData(page);
//   gettingPageNumber();
// }else{
//     searchedData=localStorage.getItem('searchData')
//   console.log(searchedData)
//   searchdata(searchedData)
// }


// document.getElementById("first").addEventListener("click", () => {
//   gettingPageNumber();
//   fetchingData(page);
// });
// document.getElementById("second").addEventListener("click", () => {
//   // gettingPageNumber();
//   // console.log("here")
//   query = "_sort=ratings&_order=asc"
//   fetchingData(page)
// });
// document.getElementById("third").addEventListener("click", () => {
//   // gettingPageNumber();
//   query = "_sort=ratings&_order=desc"
//   fetchingData(page)
// });
// document.getElementById("fourth").addEventListener("click", () => {
//   query = "_sort=name&_order=asc"
//   fetchingData(page)
// });
// document.getElementById("five").addEventListener("click", () => {
//   query = "_sort=cost&_order=desc"
//   fetchingData(page)
// });
// document.getElementById("six").addEventListener("click", () => {
//   query = "_sort=cost&_order=asc"
//   fetchingData(page)
// });
import { navbar, menuBar,footer } from "../components/navbar.js";

document.querySelector("header").innerHTML = navbar();
document.getElementById("menuBar").innerHTML = menuBar();
document.querySelector("footer").innerHTML = footer();




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
let query='';
let fetchingData = async (page) => {
  try {
    console.log(`https://database-sr9b.onrender.com/hotels?_limit=6&_page=${page}&${query}`)
    let result = await fetch(
      `https://database-sr9b.onrender.com/hotels?_limit=6&_page=${page}&${query}`
    );
    let res = await result.json();
    displayData(res);
    gettingPageNumber()
  } catch (error) {
    console.log(error);
  }
};
// fetchingData(page);

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
      document.querySelectorAll(".pg").forEach((ele)=>{
        ele.classList = "pg"
      })
      btn.classList = "pg active";
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
    price.textContent = "₹" + Math.round(elem.cost/3) + "/Night";

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
// document.getElementById("searchButton").addEventListener("click", searchfun);
let searchdata = async (searchedData) => {
  try {
    let link = `https://database-sr9b.onrender.com/hotels?Country_like=${searchedData}`;
    let data = await fetch(link);
    data = await data.json();
    totalPages = data.length / 6;
    console.log(data)
    displayData(data);
    creatingButton(totalPages);
  } catch (err) {
    console.log(err);
  }
};
// let searchedData=JSON.parse(localStorage.getItem('searchData')) || '';
let searchedData
if(JSON.parse(localStorage.getItem('searchData'))){
  searchedData=JSON.parse(localStorage.getItem('searchData'))
  console.log(searchedData)
   searchdata(searchedData)
}else{
    fetchingData(page);
    gettingPageNumber();
}


document.getElementById("first").addEventListener("click", () => {
  gettingPageNumber();
  fetchingData(page);
});
document.getElementById("second").addEventListener("click", () => {
  // gettingPageNumber();
  console.log("here")
  query = "_sort=ratings&_order=asc"
  fetchingData(page)
});
document.getElementById("third").addEventListener("click", () => {
  // gettingPageNumber();
  query = "_sort=ratings&_order=desc"
  fetchingData(page)
});
document.getElementById("fourth").addEventListener("click", () => {
  query = "_sort=name&_order=asc"
  fetchingData(page)
});
document.getElementById("five").addEventListener("click", () => {
  query = "_sort=cost&_order=desc"
  fetchingData(page)
});
document.getElementById("six").addEventListener("click", () => {
  query = "_sort=cost&_order=asc"
  fetchingData(page)
});
document.querySelector("#indexA").addEventListener("click",()=>{
  window.location.href = "index.html"
})