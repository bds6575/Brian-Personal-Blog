document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert("Please complete the form");
        return;
    }

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ username, title, content });
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
