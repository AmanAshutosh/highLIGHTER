import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import toast from "react-hot-toast";

const BlogCard = ({ blog }) => {
  const contextData = useContext(BlogContext);
  const deleteFn = contextData.deleteBlog;

  const onDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?",
    );

    if (confirmDelete) {
      deleteFn(blog.id);
      toast.success("Article deleted!");
    }
  };

 
  const dateValue = new Date(blog.createdAt);
  const readableDate = dateValue.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="blog-card">
      <span className="blog-category">
        {blog.category ? blog.category : "Technology"}
      </span>

      <h3 className="blog-title">{blog.title}</h3>

      <p className="blog-content">
        {blog.content.length > 100
          ? blog.content.substring(0, 100) + "..."
          : blog.content}
      </p>

      <div className="blog-footer">
        <div className="footer-item">
          <span></span> {blog.author ? blog.author : "Anonymous"}
        </div>

        <div className="footer-item">
          <span></span> {readableDate}
        </div>
      </div>

      <div className="card-actions">
        <Link to={"/edit/" + blog.id} className="btn btn-edit">
          Edit
        </Link>

        <button onClick={onDeleteClick} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
