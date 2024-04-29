function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    nameError.textContent = '';
    emailError.textContent = '';

    var isValid = true;

    if (!/^[a-zA-Z _']+$/.test(name)) {
        nameError.textContent = 'Name can only contain letters, spaces, underscores, and apostrophes';
        isValid = false;
    }

    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (isValid) {
        saveFormData(name, email, comment);
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveFormData(name, email, comment) {
    var data = 'Name: ' + name + '\nEmail: ' + email + '\nComment: ' + comment;
    var blob = new Blob([data], { type: 'text/plain' });

    var a1 = document.createElement('a');
    a1.href = URL.createObjectURL(blob);
    a1.download = '/form_data/form_data.txt';
    a1.click();
}
