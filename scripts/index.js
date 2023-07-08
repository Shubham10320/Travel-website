import {navbar, menuBar, footer} from '../components/navbar.js'

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuaGlhsl32QlCx7592Sfe-bicfw4kuu4g",
    authDomain: "masai-travel-alcazar.firebaseapp.com",
    projectId: "masai-travel-alcazar",
    storageBucket: "masai-travel-alcazar.appspot.com",
    messagingSenderId: "647414359483",
    appId: "1:647414359483:web:f3da0289791f8c3e55509e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app);
const auth = getAuth();



document.querySelector('header').innerHTML=navbar();
document.getElementById('menuBar').innerHTML=menuBar();
document.querySelector('footer').innerHTML=footer();
let menu=document.getElementById('menuBar');
let m=document.getElementById('menu');
    m.addEventListener('click', ()=>{
        menu.style.display='block'
        m.style.display='none';
        close.style.display='block'
        document.querySelector('nav').style.zIndex='0'
        document.querySelector('.container').style.filter="blur(180px)"
        document.querySelector('#hero').style.filter="blur(180px)"
})
let close=document.getElementById('close')

close.addEventListener('click', ()=>{
    menu.style.display='none'
    m.style.display='block';
    close.style.display='none';
    document.querySelector('nav').style.zIndex='2'
    document.getElementById('hero').style.filter= "blur(0)";
    document.querySelector('.container').style.filter= "blur(0)";
})
document.getElementById('searchThat').addEventListener('click',()=>{
    let inputVal=document.getElementById('input').value 
    localStorage.setItem('searchData', JSON.stringify(inputVal));
    location.href='product.html'
})


document.getElementById('closeIcon').addEventListener('click', ()=>{
    document.querySelector('.pop').style.display='none';
})

let popup = document.querySelector('#last a')
popup.addEventListener('click', (event)=>{
    event.preventDefault()

    if(popup.textContent=='Register'){
        document.querySelector('.pop').style.display='none';
        window.location.href = "signup.html"
    }else{
        document.querySelector('.pop').style.display='block';
    }
})


document.getElementById("logout").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        localStorage.removeItem('userLogged');
        document.querySelector('.poplogout').style.display='block'
        setTimeout(()=>{
            
            location.reload()
        },3000)
        
        
        })
        .catch((error) => {
            // An error happened.
        });
});


