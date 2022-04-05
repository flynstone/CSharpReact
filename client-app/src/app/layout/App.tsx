import React, { useEffect } from 'react';
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
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';
import ProfilePage from '../../features/profiles/ProfilePage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <ToastContainer position='bottom-right' hideProgressBar />   
        <ModalContainer />
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
                  <Route path='/profiles/:username' component={ProfilePage} />
                  <Route path='/errors' component={TestErrors} />
                  <Route path='/server-error' component={ServerError} />
                  <Route path='/login' component={LoginForm} />
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
