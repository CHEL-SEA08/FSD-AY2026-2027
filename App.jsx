import { useState } from "react";
import "./App.css";

const posts = [
  {
    id: 1,
    title: "My Beach Trip",
    short: "A relaxing trip to the beach.",
    content:
      "My beach trip was a wonderful experience. I enjoyed walking along the shore, watching the sunset, and spending time near the ocean. The peaceful atmosphere made the trip very memorable.",
  },
  {
    id: 2,
    title: "Mountain Adventure",
    short: "Exploring beautiful mountains and nature.",
    content:
      "The mountain trip was full of adventure. I explored hiking trails, enjoyed the fresh air, and saw beautiful views from the top. It was a great experience and a perfect break from busy city life.",
  },
  {
    id: 3,
    title: "City Exploration",
    short: "Discovering a new city and its culture.",
    content:
      "Exploring a new city allowed me to discover interesting places, local food, historical buildings, and different cultures. Every street had something new to see and experience.",
  },
];

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Show full article
  if (selectedPost) {
    return (
      <div className="app">
        <header>
          <h1>My Travel Blog</h1>

          <button
            className="back-button"
            onClick={() => setSelectedPost(null)}
          >
            ← Back
          </button>
        </header>

        <main className="article">
          <h2>{selectedPost.title}</h2>

          <p>{selectedPost.content}</p>

          <button onClick={() => setSelectedPost(null)}>
            Back to Posts
          </button>
        </main>
      </div>
    );
  }

  // Show main blog
  return (
    <div className="app">
      <header>
        <h1>My Travel Blog</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <h2>My Travel Journey</h2>
        <p>Exploring new places and creating new memories.</p>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          Hi, I'm a travel enthusiast. I enjoy visiting new places,
          learning about different cultures, and experiencing new things.
        </p>
      </section>

      <section className="blog" id="blog">
        <h2>Travel Stories</h2>

        <div className="posts">
          {posts.map((post) => (
            <article className="post" key={post.id}>
              <h3>{post.title}</h3>

              <p>{post.short}</p>

              <button onClick={() => setSelectedPost(post)}>
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 My Travel Blog</p>
      </footer>
    </div>
  );
}

export default App;