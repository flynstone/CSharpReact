import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Basic from './code/Basic';

const Bold = {
  color: 'teal',
  paddingLeft: '10px' 
}

const Violet  = {
  color: 'violet'
}

export default function Controller() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="10">
        <Card>
          <CardHeader /><h2>C# (Asp.Net Core Web Api / Entity Framework) - <b style={Bold}>Controllers</b></h2>
          <CardContent>
            <div className='Container'>
              <p>This is where we create our Api routes.</p>
            </div>

            <Basic />
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}