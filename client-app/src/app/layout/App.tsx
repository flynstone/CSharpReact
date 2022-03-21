import React, { useEffect, useState } from 'react';
import { Article } from '../models/article';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    agent.Articles.list().then(res => {
      let articles: Article[] = [];
      res.forEach(article => {
        article.dateCreated = article.dateCreated.split('T')[0];
        articles.push(article);
      });
      setArticles(res);
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

  const handleCreateOrEditArticle = (article: Article) => {
    article.id
      ? setArticles([...articles.filter(x => x.id !== article.id), article])
      : setArticles([...articles, {...article, id: uuid()}]);
    setEditMode(false);
    setSelectedArticle(article);
  }

  const handleDeleteArticle = (id: string) => {
    setArticles([...articles.filter(x => x.id !== id)]);
  }

  return (
    <div className="App">
      <Header openForm={handleFormOpen} />
      <div className="Container">
        <ArticleDashboard
          articles={articles}
          selectedArticle={selectedArticle}
          selectArticle={handleSelectArticle}
          cancelSelectArticle={handleCancelSelectArticle}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditArticle}
          deleteArticle={handleDeleteArticle}
        />
      </div> 
    </div>
  );
}

export default App;
