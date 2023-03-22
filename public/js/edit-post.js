// Function to edit the post.
async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name= "post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
    
    //  Note we need to subtract 1 from length, as in an array post 1 (first) is 0.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // If response is OK post will be updated, else error will be displayed.
    if (response, ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);