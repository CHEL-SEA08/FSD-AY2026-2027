import "./App.css";

const posts = [
  {
    title: "Getting Started with React",
    description:
      "Learn the basics of React components, props, state, and how to build your first application.",
    date: "Aug 24, 2026",
  },
  {
    title: "Why I Like Building Websites",
    description:
      "A quick look at why creating websites is fun and what I’ve learned while building them.",
    date: "Aug 20, 2026",
  },
  {
    title: "My Favorite Coding Tips",
    description:
      "Simple tips that can make coding easier, cleaner, and more enjoyable.",
    date: "Aug 15, 2026",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Blog</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <h2>Welcome to my blog 👋</h2>
          <p>
            Thoughts, tutorials, and things I learn while building with React.
          </p>
        </section>

        <section className="posts" id="blog">
          <h2>Latest Posts</h2>

          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.title}>
                <span>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button>Read More</button>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            Hi! I'm a developer who enjoys learning new technologies and
            sharing what I learn through this blog.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;