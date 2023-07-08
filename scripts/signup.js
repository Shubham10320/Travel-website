  // Import the functions you need from the SDKs you need
  import {
      initializeApp
  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import {
      getAuth,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      signInWithPopup, 
      GoogleAuthProvider
  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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

  const auth = getAuth();



  document.querySelector("#signin").addEventListener("click", () => {
      let username = document.querySelector("#signupUsername").value
      let email = document.querySelector("#signupEmail").value
      let password = document.querySelector("#signupPassword").value

      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            event.preventDefault()
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              alert("registered")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
          });
    
  })
  const provider = new GoogleAuthProvider()
document.querySelector("#google").addEventListener("click",()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  
  // Perform sign-up validation
  if (username.length < 6 || password.length < 8) {
    alert('Username should be at least 6 characters long and password should be at least 8 characters long.');
    return;
  }
  
  // Perform sign-up request to the server
  // Example: You can make an API request to create a new user
  
  // Retrieve existing users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  console.log('Stored Users:');
  storedUsers.forEach(user => {
  console.log('Username: ' + user.username);
  console.log('Email: ' + user.email);
  console.log('Password: ' + user.password);
  console.log('------------------------');
});
  
  // Check if the user already exists
  const existingUser = storedUsers.find(user => user.username === username);
  if (!existingUser) {
    // Append the new user to the existing list
    storedUsers.push({ username, email, password });
    // Store the updated users in localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));
  }
  
  // Reset the form
  document.getElementById('signupForm').reset();
});
