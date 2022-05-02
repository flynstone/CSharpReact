import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';

const Teal = {
  color: 'teal',
  paddingLeft: '10px'
}

export default function Angular() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2>Javascript / Typescript <b style={Teal}> Angular</b></h2>
          <CardContent>
            <div className='Container'>
              <p>Angular is a popular <b style={Teal}>Font-End</b> framework created by <b style={Teal}>Google</b></p>
              <br />
            </div>

          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}