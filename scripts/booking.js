//navbar setting
import {
    navbar,
    menuBar
} from '../components/navbar.js'
document.querySelector('header').innerHTML = navbar();
document.getElementById('menuBar').innerHTML = menuBar();
let menu=document.getElementById('menuBar');
let m=document.getElementById('menu');
    m.addEventListener('click', ()=>{
        menu.style.display='block'
        m.style.display='none';
        close.style.display='block'
        document.getElementById('main-b').style.opacity = "20%" ;
        document.getElementById('main-b').style.pointerEvents = "none" ;
})
let close=document.getElementById('close')

close.addEventListener('click', ()=>{
    menu.style.display='none'
    m.style.display='block';
    close.style.display='none';
    document.getElementById('main-b').style.opacity = "100%" ;
        document.getElementById('main-b').style.pointerEvents = "initial" ;
})
// drop-down feature of divs
document.querySelectorAll("#main-b .h2div").forEach((ele, idx) => {
    ele.setAttribute("data-toggle","collapse")
    ele.setAttribute("data-target",".right-div")
    // ele.setAttribute("data-toggle","collapse")
    // ele.setAttribute("data-bs-target",".h2div+.content")
    ele.addEventListener("click", () => {
        new bootstrap.Collapse(document.querySelectorAll(".content")[idx])
        document.querySelectorAll("#main-b .h2div>img:last-child")[idx].classList.toggle('active')
        ele.classList.toggle('active')
    })
})

//adding states to select options
let setStates = async () => {
    try {
        let response = await fetch("https://database-sr9b.onrender.com/states")
        let data = await response.json()
        let select = document.querySelector("#state-select")
        data.forEach((state) => {
            let option = document.createElement("option")
            option.textContent = state.name
            option.value = state.name
            select.append(option)
        })
    } catch (e) {
        console.log(e)
    }
}
setStates()

//billing address functionality

//adding persons
let peronDetail = () => {
    return `<div class="person"><div>
    Title
    <select id="gender">
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
    </select>
</div>
<div>
    First Name
    <input type="text" placeholder="Enter First Name">
</div>
<div>
    Last Name
    <input type="text" placeholder="Enter Last Name">
</div></div>`
}
document.querySelector(".persons").innerHTML = peronDetail()
document.querySelector("#add-guest").addEventListener("click",()=>{
    document.querySelector(".persons").innerHTML += peronDetail()
})



//hotel info functionality
let hotelid = localStorage.getItem("hotelid")
let fetchData = async() =>{
    try{
        let response = await fetch(`https://database-sr9b.onrender.com/locations?id=${hotelid}`)
        let data = await response.json()
        setHotel(data)
    }catch(e){
        console.log(e)
    }
}
fetchData()
import hotelInfo from '../components/hotelinfo.js';
let setHotel = (data) =>{
    console.log(data)
    // let div1 = document.createElement("div")
    // div1.classList = "infoDiv"
    // div1.innerHTML = 
    // let subDiv1 = document.createElement
    // let div2 = document.createElement("div")
    // div2.classList = "checkin-div"
    // let div3 = document.createElement("div")
    // div3.classList = "info-div"
    document.querySelector(".infoDiv").innerHTML = hotelInfo(data[0])
    // document.querySelector(".hotel-info").append(div1,div2,div3)
    setInterval(createCountdownTimer,1000)
}
//deal timer
let createCountdownTimer = ()=> {
    let now = new Date();
    let targetDate;

    if (now.getHours() < 12) {
      targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    } else {
      targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    }
  
    let countdown = targetDate - now;
  
    let hours = Math.floor(countdown / (1000 * 60 * 60));
    let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    
    let formattedHours = hours < 10 ? "0" + hours : hours;
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    
    document.querySelector("#time").textContent = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  }