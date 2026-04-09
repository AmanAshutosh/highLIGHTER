import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { loadData, saveData } from "../utils/localStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const BlogContext = createContext();

const BlogProvider = (props) => {
  const { children } = props;

  const [blogList, setBlogList] = useState(() => {
    return loadData();
  });

  
  useEffect(() => {
    saveData(blogList);
  }, [blogList]);

  
  const addBlog = (title, content, category, author) => {
    const blogObj = {
      id: uuidv4(),
      title: title,
      content: content,
      category: category ? category : "General",
      author: author ? author : "Anonymous",
      createdAt: new Date().toISOString(),
    };

    setBlogList((prev) => {
      return [blogObj, ...prev];
    });
  };


  const updateBlog = (id, t, c, cat, auth) => {
    setBlogList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: t,
            content: c,
            category: cat,
            author: auth,
          };
        } else {
          return item;
        }
      });
    });
  };

  
  const deleteBlog = (id) => {
    setBlogList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: blogList,
        addBlog: addBlog,
        updateBlog: updateBlog,
        deleteBlog: deleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider };
