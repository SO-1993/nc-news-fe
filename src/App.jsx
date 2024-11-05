import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ArticlesList from "./components/MainContent/ArticlesList/ArticlesList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </div>
  );
}

export default App;
