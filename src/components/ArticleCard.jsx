import styles from "./Components.module.css";

function ArticleCard(props) {
  const { article } = props;
  return (
    <ul className={styles.articleCard}>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.author}>Author: {article.author}</p>
      <p className={styles.votes}>Votes: {article.votes}</p>
      <p className={styles.comments}>Comments: {article.comment_count}</p>
      <p className={styles.voteCount}>Vote Count: {article.votes}</p>
    </ul>
  );
}

export default ArticleCard;
