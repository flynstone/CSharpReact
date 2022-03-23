import React, { useEffect } from 'react';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

function App() {
  const { articleStore } = useStore();

  useEffect(() => {
    articleStore.loadArticles();
  }, [articleStore]);

  if (articleStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: '7rem' }}>
        <ArticleDashboard />
      </Container> 
    </div>
  );
}

export default observer(App);
