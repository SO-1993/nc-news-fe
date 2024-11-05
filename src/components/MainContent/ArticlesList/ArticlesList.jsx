import { useState, useEffect } from "react";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const API = "http://localhost:9091/api/articles";

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setArticles(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.error("Error fetching articles:", error);
      });
  }, [API]);

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
