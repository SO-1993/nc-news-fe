function ArticleCard(props) {
  const { article } = props;
  return (
    <li>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
}

export default ArticleCard;
