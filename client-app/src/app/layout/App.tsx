import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../models/article';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    axios.get<Article[]>('http://localhost:4000/api/articles').then(res => {
      console.log(res);
      setArticles(res.data);
    });
  }, []);

  const handleSelectArticle = (id: string) => {
    setSelectedArticle(articles.find(x => x.id === id));
  }

  const handleCancelSelectArticle = () => {
    setSelectedArticle(undefined);
  }

  return (
    <div className="App">
      <Header />
      <ArticleDashboard
        articles={articles}
        selectedArticle={selectedArticle}
        selectArticle={handleSelectArticle}
        cancelSelectArticle={handleCancelSelectArticle}
      />
    </div>
  );
}

export default App;
