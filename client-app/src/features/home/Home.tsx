import { Card, CardContent, CardHeader } from '@mui/material';
import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

const HomeStyle = {
  height: '100vh',
  width: '100%',
  backgroundColor: '#3f2f80',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/batthern.png")',
}

export default function Home() {
  const { userStore, modalStore } = useStore();
  return (
    <Card style={HomeStyle}>
      <CardHeader /> <h2>Home Page</h2>
      <CardContent>
        {userStore.isLoggedIn ? (
          <>
            <h3>Welcome to website!</h3>
            <br />
            <Button as={Link} to='/articles' size='huge' inverted>Go to Articles</Button>
          </>          
        ) : (
            <>
              <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                Login
              </Button>
              <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>
                Register
              </Button> 
            </>
        )}
        
      </CardContent>
    </Card>
  )
}