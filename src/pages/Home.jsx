import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <div>
     
      <div className="hero-section">
        <h1 className="hero-title">
          Welcome to <span className="highlight-text">high</span>LIGHTER
        </h1>

        <p className="hero-subtitle">
          Discover thoughtful articles on technology, programming, and software
          engineering from passionate writers.
        </p>
      </div>

      <h2 className="section-title">Latest Articles</h2>

      <BlogList></BlogList>
    </div>
  );
};

export default Home;
