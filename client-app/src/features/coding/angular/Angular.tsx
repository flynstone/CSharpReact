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
              <p>Angular is a popular<b style={Teal}>Font-End</b> framework created by<b style={Teal}>Google</b></p>
              <br />
              <p>For front-end development I use<b style={Teal}>Visual Studio Code</b>. From the terminal I navigate to folder where I want to create the project and type<b style={Teal}>ng new app-name</b>. This will give us the option to generate a routing module and to choose
              between<b style={Teal}>CSS</b><b style={Teal}>SCSS</b><b style={Teal}>SASS</b> and<b style={Teal}>LESS</b>. By default the project is built in<b style={Teal}>Typescript</b>.</p>
            </div>

<div className='Container'><iframe src="https://player.vimeo.com/video/706258330?h=a29e28798d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="600" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="New Recording - 5/4/2022, 2:56:51 PM"></iframe></div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}