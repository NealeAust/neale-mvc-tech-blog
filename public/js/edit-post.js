// Function to edit the post.
async function editFormHandler(event) {
    event.preventDefault();
    
       //  Note we need to subtract 1 from length, as in an array post 1 (first) is 0.
       const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const title = document.querySelector('input[name= "post-title"]').value;
    const post_text= document.querySelector('textarea[name="post-text"]').value;
    
 
console.log(title, post_text);
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // If response is OK post will be updated, else error will be displayed.
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);