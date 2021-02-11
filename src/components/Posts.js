import React, { useState, useEffect } from "react";
import { axios } from "../Api/axios";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get(`/posts`);
    console.log(response.data);
    setPosts(response.data);
  };
  return (
    <div>
      {posts.map(({ title, id }) => (
        <div key={id} className="post">
          <h1
            style={{
              fontSize: "14px",
              textAlign: "left",
              justifyContent: "left",
              alignItems: "left",
            }}
          >
            {title}
          </h1>
          <Link to={`/posts/${id}/comments`}>
            <button>Show Comment</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
