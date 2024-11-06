import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";
import ArticleCard from "./ArticleCard";
import CommentList from "./CommentList";
// import CommentInput from "./CommentInput";
import "../App.css";

function ArticleDetail() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticle(articleId)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [articleId]);

  if (error) {
    return <p>There has been an error loading the article!</p>;
  }

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>No article found.</p>;
  }

  return (
    <div>
      <ArticleCard article={article} />
      <CommentList articleId={articleId} />
      {/* <CommentInput articleId={articleId} /> */}

      <p>{article.body}</p>
    </div>
  );
}

export default ArticleDetail;
