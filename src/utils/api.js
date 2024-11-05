import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-73me.onrender.com/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export { fetchArticles };
