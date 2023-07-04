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
