import { Card, CardContent, CardHeader } from '@mui/material';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from 'semantic-ui-react';
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
  
  return (
    <>
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
        <Grid.Column width="12">
          <Card>
            <CardHeader /> <h2>Home Page</h2>
            <CardContent>
        
        </CardContent>
          </Card>
        </Grid.Column>
      </Grid>
    </>
        
  )
}