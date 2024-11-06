import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, voteOnArticle } from "../utils/api";
import ArticleCard from "./ArticleCard";
import CommentList from "./CommentList";
// import CommentInput from "./CommentInput";
import styles from "./Components.module.css";

function ArticleDetail() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [count, setCount] = useState({});
  const [loadingVote, setLoadingVote] = useState(false);

  const handleVote = (voteType) => {
    setLoadingVote(true);
    voteOnArticle(articleId, voteType)
      .then((newVoteCount) => {
        setCount(newVoteCount);
        setLoadingVote(false);
      })
      .catch((error) => {
        console.error("Error voting on article:", error);
        setLoadingVote(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticle(articleId)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setCount(fetchedArticle.votes);
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

      <h1 className={styles.vote}>Vote</h1>

      <button
        className={styles.voteDown}
        onClick={() => handleVote("down")}
        disabled={loadingVote}
      >
        -
      </button>
      <button
        className={styles.voteUp}
        onClick={() => handleVote("up")}
        disabled={loadingVote}
      >
        +
      </button>

      <p>The current vote is {count}</p>
    </div>
  );
}

export default ArticleDetail;
