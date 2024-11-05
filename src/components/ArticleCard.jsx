function ArticleCard(props) {
  const { article } = props;
  return (
    <div>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
