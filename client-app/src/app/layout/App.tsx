import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../models/article';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

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

  const handleFormOpen = (id?: string) => {
    id ? handleSelectArticle(id) : handleCancelSelectArticle();
    setEditMode(true);
  } 

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <div className="App">
      <Header />
      <div className="Container">
        <ArticleDashboard
          articles={articles}
          selectedArticle={selectedArticle}
          selectArticle={handleSelectArticle}
          cancelSelectArticle={handleCancelSelectArticle}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
        />
      </div> 
    </div>
  );
}

export default App;
