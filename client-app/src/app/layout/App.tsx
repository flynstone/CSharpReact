import React, { useEffect, useState } from 'react';
import { Article } from '../models/article';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Articles.list().then(res => {
      let articles: Article[] = [];
      res.forEach(article => {
        article.dateCreated = article.dateCreated.split('T')[0];
        articles.push(article);
      });
      setArticles(res);
      setLoading(false);
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
    setSubmitting(true);
    if (article.id) {
      agent.Articles.update(article).then(() => {
        setArticles([...articles.filter(x => x.id !== article.id), article]);
        setSelectedArticle(article);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      article.id = uuid();
      agent.Articles.create(article).then(() => {
        setArticles([...articles, article]);
        setSelectedArticle(article);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  }

  const handleDeleteArticle = (id: string) => {
    setSubmitting(true);
    agent.Articles.delete(id).then(() => {
      setArticles([...articles.filter(x => x.id !== id)]);
      setSubmitting(false);
    });
  }

  if (loading) return <LoadingComponent content='Loading app' />

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
          submitting={submitting}
        />
      </div> 
    </div>
  );
}

export default App;
