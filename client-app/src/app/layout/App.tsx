import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../models/article';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';

function App() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get<Article[]>('http://localhost:4000/api/articles').then(res => {
      console.log(res);
      setArticles(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ArticleDashboard articles={articles} />
    </div>
  );
}

export default App;
