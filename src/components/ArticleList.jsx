import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import styles from "./Components.module.css";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return <p className={styles.error}> There has been an error!</p>;
  }

  if (loading) {
    return <p className={styles.loading}>Loading articles...</p>;
  }

  if (articles.length === 0) {
    return <p className={styles.empty}>No articles available.</p>;
  }

  return (
    <ul className={styles.articleList}>
      {articles.map((article) => (
        <li key={article.article_id} className={styles.articleItem}>
          <Link to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
