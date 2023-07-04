//navbar setting
import {navbar, menuBar} from '../components/navbar.js'
console.log(navbar())
console.log(menuBar())
document.querySelector('header').innerHTML=navbar();
document.getElementById('menuBar').innerHTML=menuBar();
// drop-down feature of divs
document.querySelectorAll("#main-b .h2div").forEach((ele,idx)=>{
    ele.addEventListener("click",()=>{
        document.querySelectorAll("#main-b .content")[idx].classList.toggle('active')
        document.querySelectorAll("#main-b .h2div>img:last-child")[idx].classList.toggle('active')
        ele.classList.toggle('active')
    })
})
console.log("ok")

// let hotel = localStorage.getItem("hotel")
// let fetchData = async() =>{
//     try{
//         let response = await fetch("https://api.opentripmap.com/0.1/en/places/radius?radius=5&lon=-73.75623&lat=42.65258&limit=10&apikey=5ae2e3f221c38a28845f05b6cbe2c29add1847ef8b17f26d5c29d6d5")
//         let data = await response.json()
//         console.log(data1)
//     }catch(e){
//         console.log(e)
//     }
// }
// fetchData()