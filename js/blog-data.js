// Sample blog data for demonstration
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Everyday Life',
    excerpt: 'Exploring how artificial intelligence is transforming our daily routines and what to expect in the coming years.',
    content: `
      <p>Artificial Intelligence (AI) has rapidly evolved from a sci-fi concept to an integral part of our daily lives. From voice assistants like Siri and Alexa to recommendation algorithms on streaming platforms, AI technologies are seamlessly integrated into our routines.</p>
      
      <p>In the coming years, we can expect AI to become even more prevalent. Smart homes will anticipate our needs before we even realize them, healthcare diagnostics will become more accurate and accessible, and personalized education will adapt to individual learning styles.</p>
      
      <p>However, this technological revolution also raises important questions about privacy, ethics, and the future of work. As AI systems become more sophisticated, we must establish frameworks to ensure they serve humanity's best interests.</p>
      
      <p>The key to harnessing AI's potential lies in striking a balance between innovation and responsibility. By approaching AI development with thoughtfulness and inclusivity, we can create a future where technology enhances human capabilities rather than replacing them.</p>
    `,
    category: 'Technology',
    date: 'April 15, 2023',
    readTime: '5 min read',
    image: 'https://source.unsplash.com/random/600x400/?tech',
    author: 'Abhinav',
    tags: ['AI', 'Technology', 'Future']
  },
  {
    id: 2,
    title: 'Minimalism in UI: Less is More',
    excerpt: 'How the principles of minimalism can create more effective and elegant user interfaces in modern web design.',
    content: `
      <p>In the world of user interface design, minimalism has emerged as more than just an aesthetic choice—it's a philosophy that enhances usability and user experience. By stripping away unnecessary elements, minimalist UI design focuses on what truly matters.</p>
      
      <p>The core principles of minimalist UI design include:</p>
      <ul>
        <li>Simplicity in layout and navigation</li>
        <li>Limited color palettes</li>
        <li>Thoughtful use of negative space</li>
        <li>Typography as a design element</li>
        <li>Functional animations and transitions</li>
      </ul>
      
      <p>Companies like Apple and Google have embraced minimalism not just for its visual appeal, but for its practical benefits. Simpler interfaces reduce cognitive load, making products more intuitive and accessible to users of all technical abilities.</p>
      
      <p>As we move forward, the challenge for designers will be maintaining simplicity while accommodating increasingly complex functionality. The most successful designs will be those that hide complexity behind elegant simplicity.</p>
    `,
    category: 'Design',
    date: 'March 28, 2023',
    readTime: '4 min read',
    image: 'https://source.unsplash.com/random/600x400/?design',
    author: 'Abhinav',
    tags: ['Design', 'UI/UX', 'Minimalism']
  },
  {
    id: 3,
    title: 'Deep Work in a Distracted World',
    excerpt: 'Strategies for achieving focused work in an age of constant notifications and digital distractions.',
    content: `
      <p>In our hyperconnected world, the ability to focus deeply on cognitively demanding tasks has become increasingly rare—and increasingly valuable. Cal Newport's concept of "Deep Work" offers a framework for reclaiming our attention in a distraction-filled environment.</p>
      
      <p>Deep work refers to professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.</p>
      
      <p>To cultivate a deep work practice, consider these strategies:</p>
      <ol>
        <li>Schedule deep work blocks in your calendar</li>
        <li>Create a distraction-free environment</li>
        <li>Establish clear rules for technology use</li>
        <li>Build concentration like a muscle through consistent practice</li>
        <li>Embrace boredom as an opportunity for mental clarity</li>
      </ol>
      
      <p>The rewards of deep work extend beyond productivity. There's a sense of fulfillment that comes from immersing yourself completely in a challenging task—a satisfaction that shallow, fragmented work can never provide.</p>
      
      <p>In a world that increasingly incentivizes distraction, the ability to focus deeply might be the most valuable skill you can develop.</p>
    `,
    category: 'Productivity',
    date: 'February 12, 2023',
    readTime: '6 min read',
    image: 'https://source.unsplash.com/random/600x400/?productivity',
    author: 'Abhinav',
    tags: ['Productivity', 'Focus', 'Work']
  }
];

// Function to search blog posts
function searchBlogPosts(query) {
  query = query.toLowerCase();
  return blogPosts.filter(post => {
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });
}

// Function to filter posts by category
function filterByCategory(category) {
  if (!category) return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Function to get post by ID
function getPostById(id) {
  return blogPosts.find(post => post.id === parseInt(id));
}

// Initialize search functionality if on a page with search
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.querySelector('.search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      const results = searchBlogPosts(query);
      
      if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
      }
      
      let resultsHTML = '';
      results.forEach(post => {
        resultsHTML += `
          <div class="search-result-item">
            <h4><a href="blog-posts/post.html?id=${post.id}">${post.title}</a></h4>
            <p>${post.excerpt.substring(0, 100)}...</p>
            <span class="result-category">${post.category}</span>
          </div>
        `;
      });
      
      searchResults.innerHTML = resultsHTML;
    });
  }
});
