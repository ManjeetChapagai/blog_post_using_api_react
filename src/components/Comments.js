//This works like restaurantDetai
import React, { useState, useEffect } from "react";
import { axios } from "../Api/axios";
import { useParams } from "react-router-dom";

export const Comments = () => {
  const [comment, setComment] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    const response = await axios.get(`/comments/${id}`);
    console.log(response.data);
    setComment(response.data);
  };

  return (
    <div>
      {Object.keys(comment).length > 0 ? (
        <div className="comment">
          <h1>Comment </h1>
          {comment.body}
        </div>
      ) : null}
    </div>
  );
};
