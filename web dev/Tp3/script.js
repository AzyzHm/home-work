const name = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const birthday = document.getElementById('birthday');
const country = document.getElementById('country');
const overnightStay = document.getElementById('overnightStay');
const rate = document.getElementById('rate');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    if(name.value === '') {
        alert('Name is required');
    } else if(username.value === '') {
        alert('Username is required');
    } else if(password.value === '') {
        alert('Password is required');
    } else if(birthday.value === '') {
        alert('Birthday is required');
    } else if(country.value === '') {
        alert('Country is required');
    } else if(overnightStay.value === '') {
        alert('Overnight Stay is required');
    } else if(rate.value === '') {
        alert('Rate is required');
    } else {
        alert('Form submitted successfully');
    }
});