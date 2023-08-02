// Function to open the login modal
function openLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}

// Function to validate the login form
function validateLogin() {
    var usernameOrEmail = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (usernameOrEmail === '') {
        alert('Please enter your username or email.');
        return false;
    }

    if (password === '') {
        alert('Please enter your password.');
        return false;
    }

    // You can add additional validation logic here if needed

    // If the form is valid, you can perform AJAX request to submit the data to the server
    // For this front-end demo, we assume the form is always valid
    alert('Login successful! Redirecting to main page...');
    closeLoginModal();

    // Redirect to main page
    window.location.replace('index.html');

    return false; // Prevent form submission
}
