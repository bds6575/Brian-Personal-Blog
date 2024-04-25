
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
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
        `;
        blogPostsSection.appendChild(article);
    });
}

// Call displayPosts when the page loads
window.addEventListener('load', displayPosts);
