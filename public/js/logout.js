// A function to logout the user.
async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });


    // Response to fetch received, status checked and applicable message displayed. 
    if (response.ok) {
        alert('Thankyou for visiting Tech Blog!');
        document.location.replace('/');
        
    } else {
        alert('Failed to log out, please try again!');
    }
};
document.querySelector('#logout').addEventListener('click', logout);