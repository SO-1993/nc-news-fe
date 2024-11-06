import { useState, useEffect } from "react";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const API = "https://nc-news-73me.onrender.com/articles";

  useEffect(() => {}, []);

  if (error) {
    return <p>There has been error loading the articles.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="article-cards-container">
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </section>
  );
}

export default ArticlesList;
