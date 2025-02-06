document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.post-grid');
  
  fetch('/_data/posts.yml')
    .then(res => res.text())
    .then(data => {
      const posts = jsyaml.load(data).posts;
      
      posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
          <img src="/content/${post.folder}/thumbnail.jpg" 
               class="post-thumbnail" 
               alt="${post.title}">
          <div class="post-content">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.url}" 
               class="cta-button"
               target="_blank">
              View ${post.category === 'YouTube' ? 'Video' : 'Post'}
            </a>
          </div>
        `;
        grid.appendChild(card);
      });
    });
});
