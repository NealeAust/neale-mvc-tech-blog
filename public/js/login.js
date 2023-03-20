async function loginFormHandler(event) {
    event.preventDefault();


    console.log('login handler function engaged');

    // Get information entered in login form.
    const name = document.querySelector('#username-form').value.trim();
    const password = document.querySelector('#password-form').value.trim();

    console.log(name);

    // Upon entering login details.
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.ok)
        // Response to fetch received, status checked and applicable message displayed. 
        if (response.ok) {
            alert('Welcome to Tech Blog!');
            document.location.replace('/dashboard');

        } else {
            alert('Failed to log in, please try again!');
        }
    }
};
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);