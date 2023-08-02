// Function to open the signup modal
function openSignupModal() {
    var modal = document.getElementById('signupModal');
    modal.style.display = 'block';
}

// Function to close the signup modal
function closeSignupModal() {
    var modal = document.getElementById('signupModal');
    modal.style.display = 'none';
}

// Function to validate the signup form
function validateSignup() {
    var username = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (username === '') {
        alert('Please enter a username.');
        return false;
    }

    if (email === '') {
        alert('Please enter an email.');
        return false;
    }

    if (password === '') {
        alert('Please enter a password.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // You can add additional validation logic here if needed

    // If the form is valid, you can perform AJAX request to submit the data to the server
    // For this front-end demo, we assume the form is always valid
    alert('Signup successful! Redirecting to main page...');
    closeSignupModal();

    // Redirect to main page
    window.location.replace('index.html');

    return false; // Prevent form submission
}
