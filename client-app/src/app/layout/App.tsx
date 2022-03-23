import React, { useEffect, useState } from 'react';
import { Article } from '../models/article';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

function App() {
  const { articleStore } = useStore();

  const [articles, setArticles] = useState<Article[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    articleStore.loadArticles();
  }, [articleStore]);

  const handleDeleteArticle = (id: string) => {
    setSubmitting(true);
    agent.Articles.delete(id).then(() => {
      setArticles([...articles.filter(x => x.id !== id)]);
      setSubmitting(false);
    });
  }

  if (articleStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: '7rem' }}>
        <ArticleDashboard
          articles={articleStore.articles}
          deleteArticle={handleDeleteArticle}
          submitting={submitting}
        />
      </Container> 
    </div>
  );
}

export default observer(App);
