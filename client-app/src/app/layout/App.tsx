import React from 'react';
import Header from './Header';
import ArticleDashboard from '../../features/articles/dashboard/ArticleDashboard';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../../features/home/Home';
import ArticleForm from '../../features/articles/form/ArticleForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArticleDetails from '../../features/articles/details/ArticleDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const location = useLocation();

  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Header />
            <Container style={{ width: '100vw' }}>
              <Switch>
                <Route exact path='/articles' component={ArticleDashboard} />
                <Route path='/articles/:id' component={ArticleDetails} />
                <Route key={location.key} path={['/createArticle', '/manage/:id']} component={ArticleForm} />
                <Route path='/errors' component={TestErrors} />
                <Route component={NotFound} />
              </Switch>
            </Container> 
          </>
        )}
      />   
      </ThemeProvider>    
    </div>
  );
}

export default observer(App);
