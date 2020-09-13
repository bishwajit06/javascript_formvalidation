const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

// Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check Email validate
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } 
    else {
        showError(input, 'Email is not valid');
    }
}

// Check Required
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } 
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else {
        
    }
}

// Check Password Match

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Add listener
form.addEventListener('submit', function(e){
    
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 30);
    checkEmail(email);
    checkPasswordMatch(password, password2);

})

// Email validate
// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// Add Listener
// form.addEventListener('submit', function(e){
    
//     e.preventDefault();

//     if (username.value === '') {
//         showError(username, 'Username is required');
//     }
//     else{
//         showSuccess(username);
//     }

//     if (email.value === '') {
//         showError(email, 'Email is required');
//     }
//     else if(!validateEmail(email.value)){
//         showError(email, 'Email is not valid');
//     }
//     else{
//         showSuccess(email);
//     }

//     if (password.value === '') {
//         showError(password, 'Password is required');
//     }
//     else{
//         showSuccess(password);
//     }

//     if (password2.value === '') {
//         showError(password2, 'Confirm password is required');
//     }
//     else{
//         showSuccess(password2);
//     }

// })

