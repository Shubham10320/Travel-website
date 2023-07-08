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

document.querySelector("form").addEventListener("submit", () => {
    event.preventDefault()
    let email = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if (user !== null) {
                // The user object has basic properties such as display name, email, etc.
                // alert("Signed in "+user.displayName);
                document.querySelector('.poplogout').style.display='block'
                document.getElementById('logoutAlert').textContent=`You have Signed in as ${user.displayName}`
                setTimeout(()=>{
                  document.querySelector('.poplogout').style.display='none'
                },3000)

                localStorage.setItem("userLogged",user.displayName)
                window.location.href = "index.html"
                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
                const uid = user.uid;
              }
            // document.getElementById("logout").style.display = "block";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage);
            alert("Invalid Credentials");
        });
});

//sign out
// document.getElementById("logout").addEventListener("click", () => {
//     signOut(auth)
//         .then(() => {
//             // Sign-out successful.
//             alert("log out successfully!");
//             location.href = "./signup.html";
//         })
//         .catch((error) => {
//             // An error happened.
//         });
// });
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   const username = document.getElementById('loginUsername').value;
//   const password = document.getElementById('loginPassword').value;
  
  // Perform login validation
//   if (username.length < 6 || password.length < 8) {
//     alert('Username should be at least 6 characters long and password should be at least 8 characters long.');
//     return;
//   }
  
  // Retrieve existing users from localStorage
//   const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//   // Check if the user already exists and the password matches
//   const existingUser = storedUsers.find(user => user.username === username && user.password === password);
//   if (existingUser) {
//     // Redirect to the home page or perform any other action
//     window.location.href = 'index.html';
//   } else {
//     alert('Invalid username or password.');
//   }
  
  // Reset the form
//   document.getElementById('loginForm').reset();

  

// });


