// Retrieve posts from localStorage
function getBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts;
}

// Display blog posts
function displayPosts() {
    const blogPostsSection = document.getElementById('blog-posts');
    const posts = getBlogPosts();

    // Clear existing content
    blogPostsSection.innerHTML = '';

    // Create HTML elements for each post
    posts.forEach((post) => {
        const article = document.createElement('article');
        article.classList.add('blog-post'); // Add the 'blog-post' class
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
            <button class="delete-post">Delete</button> 
        `;

        // Add event listener to the delete button
        const deleteButton = article.querySelector('.delete-post');
        deleteButton.addEventListener('click', () => {
            // Remove the parent article when the delete button is clicked
            article.remove();

            // Update localStorage to remove the deleted post
            const updatedPosts = posts.filter((p) => p.title !== post.title);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
        });

        blogPostsSection.appendChild(article);
    });
}

// Call displayPosts when the page loads
window.addEventListener('load', displayPosts);
