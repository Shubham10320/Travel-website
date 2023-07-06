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
    p6.textContent = ele.description1;
    document.getElementById("discription").append(p6);

    // ========================proceed to payment ===========================

    let p = document.createElement("p");
    p.style.fontWeight = "600";
    p.textContent = "₹ " + ele.cost;
    let span4 = document.createElement("span");
    span4.style.fontSize = "10px";
    span4.textContent = " night";
    p.appendChild(span4);

    let i4 = document.createElement("i");
    i4.className = "fa-solid fa-star";
    let span5 = document.createElement("span");
    span5.textContent = " 4.92";
    let a = document.createElement("a");
    a.textContent = " . 597 reviews";
    a.href = "#";
    span5.appendChild(a);
    i4.appe / ndChild(span5);

    document.getElementById("right_title").append(p, i4);
  });
}
