document.getElementById('login').addEventListener('click', function() {
    const name = document.getElementById('userName');
    const userName = name.value.trim();
    const pass = document.getElementById('password');
    const password = pass.value.trim();
    if (userName === 'admin' && password === 'admin123') {
        window.location.assign('./index.html');
    } else {
        alert('Log-in Failed');
    }
})