const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim(); // get email from login form
    const password = document.querySelector('#password-login').value.trim(); // get password from login form
  
    if (email && password) { // if email and password are not empty
      const response = await fetch('/api/users/login', { // post login request to api/users/login route
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); // redirect to homepage
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => { // signup form
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim(); // collect name from signup form
    const email = document.querySelector('#email-signup').value.trim(); // collect email from signup form
    const password = document.querySelector('#password-signup').value.trim(); // collect password from signup form
    let admin = document.querySelector("#admin"); // collect admin checkbox for signup form (remove once implementing master role)

    if (admin.checked) { // Set values for admin property, depending on the checkbox status from admin check
      admin = true; 
    } else {
      admin = false;
    }
  
    if (name && email && password) { // Make sure fields are not empty
      const response = await fetch('/api/users', { // Post a new user to the database
        method: 'POST',
        body: JSON.stringify({ name, email, password, admin }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); // Redirect to homepage
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler); // Event listener for login button
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler); // Event listener for register button
  