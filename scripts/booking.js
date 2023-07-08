//navbar setting
import {
    navbar,
    menuBar,
    footer
} from '../components/navbar.js'
import hotelInfo from '../components/hotelinfo.js';
import priceInfo from '../components/priceInfo.js';
document.querySelector('footer').innerHTML=footer();

document.querySelector('header').innerHTML = navbar();
document.getElementById('menuBar').innerHTML = menuBar();
let menu = document.getElementById('menuBar');
let m = document.getElementById('menu');
m.addEventListener('click', () => {
    menu.style.display = 'block'
    m.style.display = 'none';
    close.style.display = 'block'
    document.getElementById('main-b').style.opacity = "20%";
    document.getElementById('main-b').style.pointerEvents = "none";
})
let close = document.getElementById('close')

close.addEventListener('click', () => {
    menu.style.display = 'none'
    m.style.display = 'block';
    close.style.display = 'none';
    document.getElementById('main-b').style.opacity = "100%";
    document.getElementById('main-b').style.pointerEvents = "initial";
})
// drop-down feature of divs
document.querySelectorAll("#main-b .h2div").forEach((ele, idx) => {
    ele.setAttribute("data-toggle", "collapse")
    ele.setAttribute("data-target", ".right-div")
    // ele.setAttribute("data-toggle","collapse")
    // ele.setAttribute("data-bs-target",".h2div+.content")
    ele.addEventListener("click", () => {
        new bootstrap.Collapse(document.querySelectorAll(".content")[idx])
        document.querySelectorAll("#main-b .h2div>img:last-child")[idx].classList.toggle('active')
        ele.classList.toggle('active')
    })
})



// page obj initaliasation
let pageObj = {
    "cost": 0,
    "room": 1,
    "night": 1,
    "person": 1,
    "disc": 30,
    "promo": "First Hotel",
    "extra": 0
}

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
    <select id="gender" required>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
    </select>
</div>
<div>
    First Name
    <input type="text" placeholder="Enter First Name" required>
</div>
<div>
    Last Name
    <input type="text" placeholder="Enter Last Name" required>
</div></div>`
}
document.querySelector(".persons").innerHTML = peronDetail()
document.querySelector("#add-guest").addEventListener("click", () => {
    document.querySelector(".persons").innerHTML += peronDetail()
    pageObj.person++
    document.querySelector("#numguest").value = pageObj.person
})

//setting price summary
let setPriceSum = () => {
    let {cost,room,night,person,disc,promo,extra} = pageObj
    let priceObj = {
        "roomStr": `${room} room x ${night} night`,
        "basePrice": cost * room * person * night,
        "disc": disc,
        "promo": promo,
        "extra": extra,
        "night": night,
        "person": person
    }
    document.querySelector("#priceSumDiv").innerHTML = priceInfo(priceObj)
}
//hotel info functionality
window.onload = () => {
    let hotelid = JSON.parse(localStorage.getItem("hotel-book"))
    console.log(hotelid)
    hotelid = hotelid[0].id
    let fetchData = async () => {
        try {
            let response = await fetch(`https://database-sr9b.onrender.com/hotels?id=${hotelid}`)
            let data = await response.json()
            setHotel(data)
        } catch (e) {
            console.log(e)
        }
    }
    fetchData()
    let setHotel = (data) => {
        let {
            cost
        } = data[0]
        cost=Math.round(cost/3)
        console.log(data)
        document.querySelector(".infoDiv").innerHTML = hotelInfo(data[0])
        let date = new Date()
        date.setDate(date.getDate()+1)
        let checkin = date.toISOString().split('T')[0]
        document.querySelector("#checkindate").value = checkin
        document.querySelector("#checkindate").setAttribute("min",checkin)
        date.setDate(date.getDate()+1)
        document.querySelector("#checkoutdate").value = date.toISOString().split('T')[0]
        document.querySelector("#checkoutdate").setAttribute("min",date.toISOString().split('T')[0])

        document.querySelector("#discount1").textContent = Math.round(cost * 0.35)
        document.querySelector("#discount2").textContent = Math.round(cost * 0.3)
        document.querySelector("#discount3").textContent = Math.round(cost * 0.25)
        setInterval(createCountdownTimer, 1000)
        pageObj.cost = cost
        setPriceSum()
    }
}
//deal timer
let createCountdownTimer = () => {
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

//offer checkbox functionality
document.querySelectorAll(".offerDiv>div").forEach((ele, idx) => ele.addEventListener("click", (e) => {
    document.querySelectorAll("#radio-offer")[idx].checked = true
    document.querySelectorAll(".offerDiv>div").forEach((elem) => elem.classList = "")
    ele.classList = "active"
    let prom = document.querySelectorAll("#radio-offer")[idx].value
    pageObj.promo = document.querySelectorAll("#radio-offer")[idx].value
    pageObj.disc = prom === "First Hotel" ? 35 : ""
    console.log(document.querySelectorAll("#radio-offer")[idx].disc)
    setPriceSum()
}))
document.querySelectorAll("#radio-offer").forEach((ele, idx) => ele.addEventListener("change", (e) => {
    document.querySelectorAll(".offerDiv>div").forEach((ele) => ele.classList = "")
    let checked = e.target.parentNode
    checked.classList = "active"
    pageObj.promo = e.target.value
    pageObj.disc = 25
    // console.log(e.target.)
    setPriceSum()
}))

///scrolling right-bar
let rightBar = document.querySelector(".right-div")
let leftBar = document.querySelector(".left-div")
window.onscroll = () => {
    let scrollTop = window.scrollY
    let w = window.innerWidth
    console.log(w)
    if (w > 800) {
        let viewPortHeight = window.innerHeight
        let rcontentHeight = rightBar.getBoundingClientRect().height
        let lcontentHeight = leftBar.getBoundingClientRect().height
        // console.log(viewPortHeight,rcontentHeight,lcontentHeight,scrollTop)
        if (scrollTop >= viewPortHeight) {
            console.log("here")
            rightBar.style.position = "fixed"
            rightBar.style.transform = `translateY(-45em)`
            // console.log("here")
        } else {
            rightBar.style.transform = ``
            // console.log("here2")
        }
        // console.log("here3")
    }else{
        rightBar.style.position = "relative"
        rightBar.style.transform = ""
    }
    // console.log(w)
}

//add insurance

document.querySelector("#addins").addEventListener("click", () => {
    pageObj.extra = "1"
    setPriceSum()
})

//guest selection
document.querySelector("#numguest").addEventListener("change",(e)=>{
    // pageObj.person = e.target.value
    // if(e.target.value)
    // document.querySelector(".persons").innerHTML += peronDetail()
    // setPriceSum()
    pageObj.person = e.target.value
    let person = e.target.value
    let str;
    for(let x=0; x<person; x++){
        str+=peronDetail()
    }
    document.querySelector(".persons").innerHTML = str
    setPriceSum()
})
document.querySelector("#numroom").addEventListener("change",(e)=>{
    pageObj.room = e.target.value
    setPriceSum()
})
document.querySelector("#roomtype").addEventListener("change",(e)=>{
    pageObj.cost = Number(pageObj.cost)+5000
    setPriceSum()
})
document.querySelector("#checkindate").addEventListener("change",(e)=>{
    // console.log(e.target.value-document.querySelector("#checkoutdate").value)
    let checkin = new Date(e.target.value)
    if(document.querySelector("#checkoutdate").value){
        let checkOut = new Date(document.querySelector("#checkoutdate").value)
        console.log(checkOut-checkin)
    }
})
document.querySelector("#checkoutdate").addEventListener("change",(e)=>{
    // console.log(e.target.value-document.querySelector("#checkoutdate").value)
    if(e.target.value){
        let checkin = new Date(document.querySelector("#checkindate").value)
        if(document.querySelector("#checkoutdate").value){
            let checkOut = new Date(document.querySelector("#checkoutdate").value)
            let Difference_In_Time = checkOut.getTime() - checkin.getTime();
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            pageObj.night = Difference_In_Days
            setPriceSum()
        }
    }
})
document.querySelector("#indexA").addEventListener("click",()=>{
    window.location.href = "index.html"
})
document.querySelector("form").addEventListener("submit",(e)=>{
    // localStorage.setItem("finalPrice",)
    e.preventDefault()
    let div = document.createElement("div")
    div.classList = "lds-dual-ring"
    document.querySelector("#main-b").style.opacity = "0.3"
    document.querySelector("header").style.opacity = "0.3"
    document.querySelector("footer").style.opacity = "0.3"
    document.querySelector("body").append(div)
    setTimeout(()=>{
        window.location.href = "payment_page.html"
    },3000)
})
