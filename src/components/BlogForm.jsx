import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import toast from "react-hot-toast";

const BlogForm = (props) => {
  const { initialData, isEdit = false } = props;

  
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [content, setContent] = useState(
    initialData ? initialData.content : "",
  );
  const [category, setCategory] = useState(
    initialData ? initialData.category : "",
  );
  const [author, setAuthor] = useState(initialData ? initialData.author : "");

  const blogCtx = useContext(BlogContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

   
    if (title.trim() === "" || content.trim() === "") {
      toast.error("Please fill out the title and content!");
      return;
    }

    
    if (isEdit) {
      blogCtx.updateBlog(initialData.id, title, content, category, author);
      toast.success("Highlight updated!");
    } else {
      blogCtx.addBlog(title, content, category, author);
      toast.success("New highlight created!");
    }

    
    navigate("/");
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's on your mind?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          className="form-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., Technology, General, React"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          className="form-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="e.g., Ashutosh Aman"
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="form-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Jot down the details here..."
          rows="6"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-submit">
        {isEdit ? "Update Highlight" : "Save Highlight"}
      </button>
    </form>
  );
};

export default BlogForm;
