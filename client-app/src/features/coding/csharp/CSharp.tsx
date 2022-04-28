import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Class from './code/Class';
import DataContext from './code/DataContext';

const Bold = {
  color: 'teal'
}

const Red  = {
  color: 'violet'
}

export default function CSharp() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="10">
        <Card>
          <CardHeader /><h2>C# (Asp.Net Core / Entity Framework) </h2>
          <CardContent>
            <div className='Container'>
              <p>Is an object oriented programming language (class-based).</p>
              <br />
              <p>Naming conventions are as follows.. </p>
                <br />
                <p>
                  <b style={Red}>Pascal Case</b> = <b style={Bold}>class</b>, <b style={Bold}>record</b> or <b style={Bold}>struct</b>
                </p>
                <p>
                  <b style={Red}>camel Case</b> = <b style={Bold}>private</b> or <b style={Bold}>internal</b> fields with the prefix <b style={Bold}>_</b>
                </p>
                
              <br />
              <p>In C# classes are declared using the keyword <b style={Bold}>class</b></p>
              <br />

              <Class />

              <div className='Content'>
                <p>Next step after building a <b style={Bold}>class</b> is to build a <b style={Bold}>DataContext</b></p>
              </div>
               

                <DataContext />
            </div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}