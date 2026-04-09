import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogData = useContext(BlogContext);
  const allBlogs = blogData.blogs;

 
  if (allBlogs.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No highlights yet!</h2>
        <p>Click "+ New Post" to get started.</p>
      </div>
    );
  }

 
  return (
    <div className="blog-grid">
      {allBlogs.map((item) => {
        return <BlogCard key={item.id} blog={item} />;
      })}
    </div>
  );
};

export default BlogList;
