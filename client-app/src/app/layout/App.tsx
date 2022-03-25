import React from 'react';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import Home from '../../features/home/Home';
import ArticleForm from '../../features/articles/form/ArticleForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArticleDetails from '../../features/articles/details/ArticleDetails';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route
          path={'/(.+)'}
          render={() => (
            <>
              <Header />
              <Container style={{ marginTop: '7rem' }}>
                <Route exact path='/articles' component={ArticleDashboard} />
                <Route path='/articles/:id' component={ArticleDetails} />
                <Route key={location.key} path={['/createArticle', 'manage/:id']} component={ArticleForm} />
              </Container> 
            </>
          )}
        />
       
      </div>
    </ThemeProvider>  
  );
}

export default observer(App);
