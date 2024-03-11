document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;

        if (emailInput === 'admin@admin.com' && passwordInput === '123456') {
            alert('Login successful');
        } else {
            alert('Incorrect email or password');
        }
    });
});