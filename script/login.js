document.getElementById('login').addEventListener('click', function() {
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();

    if (userName === 'admin' && password === 'admin123') {
        document.body.innerHTML += `
            <div class="fixed inset-0 bg-white/80 flex justify-center items-center z-50">
                <span class="loading loading-bars loading-xl"></span>
            </div>
        `;

        setTimeout(() => {
            window.location.assign('./home.html');
        }, 1500);
    } else {
        alert('Log-in Failed');
    }
});