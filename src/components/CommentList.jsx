import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import { fetchComments } from "../utils/api";
import ArticleCard from "./ArticleCard";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let { articleId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchComments(articleId)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.error("Error fetching comments: ", error);
      });
  }, [articleId]);

  if (error) {
    return <p>There has been an error loading the comments!</p>;
  }

  if (loading) {
    return <p>Loading comments...</p>;
  }

  if (!comments.length) {
    return <p>No comments yet for this article.</p>;
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;

// CommentList
// GET /api/articles/:article_id/comments
// receives article_id as a prop and displays
// receives a function to handle comment deletion
// static; no state management
// [sortOrder, setSortOrder]

// - fetchComments(article_id)
// fetches comments associated with a specific article

// - deleteComment(comment_id)
// deletes a comment using comment_id (only if the user is the author)
