// Function to delete a post.
async function deleteFormHandler(event) {
    event.preventDefault();

    //  Note we need to subtract 1 from length, as in an array post 1 (first) is 0.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // If response is OK post will be deleted
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".delete-post-btn").addEventListener('click', deleteFormHandler);
