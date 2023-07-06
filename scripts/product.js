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