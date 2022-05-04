import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';

const Teal = {
  color: 'teal',
  paddingLeft: '10px'
}

export default function ReactFramework() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2>Javascript / Typescript <b style={Teal}> React</b></h2>
          <CardContent>
            <div className='Container'>
              <p>React is a popular <b style={Teal}>Font-End</b> framework created by <b style={Teal}>Facebook</b></p>
              <br />
            </div>

          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}