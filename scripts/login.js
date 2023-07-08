document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  // Perform login validation
  if (username.length < 6 || password.length < 8) {
    alert('Username should be at least 6 characters long and password should be at least 8 characters long.');
    return;
  }
  
  // Retrieve existing users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the user already exists and the password matches
  const existingUser = storedUsers.find(user => user.username === username && user.password === password);
  if (existingUser) {
    // Redirect to the home page or perform any other action
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password.');
  }
  
  // Reset the form
  document.getElementById('loginForm').reset();

  

});


