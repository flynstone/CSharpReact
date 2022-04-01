import { Card, CardContent, CardHeader } from '@mui/material';
import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default function Home() {
  const { userStore } = useStore();
  return (
    <Card>
      <CardHeader /> <h2>Home Page</h2>
      <CardContent>
        {userStore.isLoggedIn ? (
          <>
            <h3>Welcome to website!</h3>
            <br />
            <Button as={Link} to='/articles' size='huge' inverted>Go to Articles</Button>
          </>          
        ) : (
          <h3>Go to <Link to='/login'>Login</Link></h3>
        )}
        
      </CardContent>
    </Card>
  )
}