import BlogForm from "../components/BlogForm";

const Create = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ color: "#1a1a1a", marginBottom: "20px" }}>
        Create New Highlight
      </h1>

      <BlogForm></BlogForm>
    </div>
  );
};

export default Create;
