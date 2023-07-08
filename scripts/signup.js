  // Import the functions you need from the SDKs you need
  import {
      initializeApp
  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import {
      getAuth,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      signInWithPopup, 
      updateProfile,
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



  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
      let username = document.querySelector("#signupUsername").value
      let email = document.querySelector("#signupEmail").value
      let password = document.querySelector("#signupPassword").value
      
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            event.preventDefault()
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              
              // alert("registered")
              document.querySelector('.poplogout').style.display='block'
              setTimeout(()=>{
                document.querySelector('.poplogout').style.display='none'
              },3000)

              updateProfile(auth.currentUser, {
                displayName: username, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
          });
    
  })
  const provider = new GoogleAuthProvider()
document.querySelector("#googleicon").addEventListener("click",(event)=>{
  event.preventDefault()
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.

    const user = result.user;
    console.log(user)
    localStorage.setItem("userLogged",user.displayName)
    window.location.href = "index.html"
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