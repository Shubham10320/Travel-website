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
