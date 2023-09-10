const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
}); 

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
};

const isValidEmail = Email => {
    const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return re.test(String(Email).toLowerCase());
}

const validateInputs = () => {
    const UsernameValue = Username.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();
    const Password2Value = Password2.value.trim();

    if(UsernameValue === '') {
        setError(Username, 'Username is required');
    } else {
        setSuccess(Username);
    }

    if(EmailValue === '') {
        setError(Email, 'Email is required');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Provide a valid email address');
    } else {
        setSuccess(Email);
    }

    if(PasswordValue === '') {
        setError(Password, 'Password is required');
    } else if (PasswordValue.length < 8 ) {
        setError(Password, 'Password must be at least 8 charactrs');
    } else {
        setSuccess(Password);
    }

    if(Password2Value === '') {
        setError(Password2, 'Please confirm your password');
    } else if (Password2Value !== PasswordValue) {
        setError(Password2, 'Passwords do not match');
    } else {
        setSuccess(Password2);
    }
};

function showMessage() {
    if(Username === setSuccess && Email === setSuccess && Password === setSuccess && Password2 === setSuccess) {
    alert("Form submitted successfully!");
} else {
    alert("There was an error!");
}

return false;
};