function navbar(){
    return `<nav>
    <div>
        <img src="../images/logo.png" alt="">
    </div>
    <div>
        <a href="#">Downlaod App</a>
        <a href="#">Partner With Us</a>
        <a href="#">Installment</a>
        <a href="#">Saved</a>
        <a href="#">My Booking</a>
    </div>
    <div id="last">
        <ion-icon name="person-circle-outline"></ion-icon>
        <a href="#">Register</a>
    </div>

    <div>
        <p id="menu"><ion-icon name="menu-outline"></ion-icon></p>
    </div>

</nav>`
}

function menuBar(){
    return `<div>
    <p id="close"><ion-icon name="close-circle-outline"></ion-icon></p>
    <a href="#">Downlaod App</a>
    <a href="#">Partner With Us</a>
    <a href="#">Installment</a>
    <a href="#">Saved</a>
    <a href="#">My Booking</a>
    <a href="#"><ion-icon name="person-circle-outline"></ion-icon>Register</a>
</div>`
}

export {navbar, menuBar}