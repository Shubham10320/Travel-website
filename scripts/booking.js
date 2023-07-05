//navbar setting
import {
    navbar,
    menuBar
} from '../components/navbar.js'
document.querySelector('header').innerHTML = navbar();
document.getElementById('menuBar').innerHTML = menuBar();
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
        let response = await fetch("https://travel-website-v1.onrender.com/states")
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
// setStates()

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