import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-73me.onrender.com/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const fetchArticle = (articleId) => {
  return api.get(`/articles/${articleId}`).then((response) => {
    return response.data.article;
  });
};

const voteOnArticle = (articleId, voteType) => {
  return api
    .patch(`/articles/${articleId}/votes`, { voteType })
    .then((response) => {
      return response.data.votes;
    });
};

const fetchComments = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then((response) => {
    return response.data.comments;
  });
};

// For use later on Comments components

// const deleteComment = (commentId) => {
//   return api.delete(`/comments/${commentId}`).then((response) => {
//     return response.data;
//   });
// };

// const postComment = (articleId, commentData) => {
//   return api
//     .post(`/articles/${articleId}/comments`, commentData)
//     .then((response) => {
//       return response.data.comment;
//     });
// };

export {
  fetchArticles,
  fetchArticle,
  fetchComments,
  voteOnArticle,
  // deleteComment,
  // postComment,
};
