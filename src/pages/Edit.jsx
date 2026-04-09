import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const Edit = () => {
  const params = useParams();
  const blogId = params.id;

  const contextValue = useContext(BlogContext);
  const allBlogs = contextValue.blogs;

  
  const selectedBlog = allBlogs.find((item) => {
    return item.id === blogId;
  });

  
  if (!selectedBlog) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "20px" }}>Edit Highlight</h1>

      <BlogForm initialData={selectedBlog} isEdit={true}></BlogForm>
    </div>
  );
};

export default Edit;
