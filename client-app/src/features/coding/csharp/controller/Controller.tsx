import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Base from './code/Base';
import Basic from './code/Basic';
import IRepository from './code/IRepository';
import IUnitOfWork from './code/IUnitOfWork';
import MappingProfiles from './code/MappingProfiles';
import ServiceExtensions from './code/ServiceExtensions';
import StudentDto from './code/StudentDto';
import StudentInterface from './code/StudentInterface';
import StudentRepository from './code/StudentRepository';
import UnitOfWork from './code/UnitOfWork';

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
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2>C# (Asp.Net Core Web Api / Entity Framework) - <b style={Bold}>Controllers</b></h2>
          <CardContent>
            <div className='Container'>
              <p>This is where we create our Api routes and the http requests (for the front-end).</p>
              <br />
              <p>I will cover 2 different ways to access the database from the controllers.</p>
            </div>

            <div className='Container'>
              <p>The first way is the repository pattern.</p>
              <br/>
              <p>We first need to build a new interface.</p>
            </div>

            <IRepository />

            <div className='Container'>
              <p>Then we build an abstract class that will<b style={Bold}>inherit</b> our interface.</p>
            </div>

            <Base />

            <div className='Container'>
              <p>We then need a new interface.</p>
            </div>

            <StudentInterface />

            <div className='Container'>
              <p>And a new class.</p>
            </div>

            <StudentRepository />

            <div className='Container'>
              <p>We need 1 last interface before configuring the scopes.</p>
            </div>

            <IUnitOfWork />

            <div className='Container'>
              <p>Now its time for build the class for that interface.</p>
            </div>

            <UnitOfWork />

            <div className='Container'>
              <p>Next step is to create a new extension and install<b style={Bold}>Automapper</b>.</p>
            </div>

            <ServiceExtensions />

            <div className='Container'>
              <p>Import the new extension in the<b style={Bold}>Program.cs</b> file and create a<b style={Bold}>data transfer object</b>.</p>
            </div>

            <StudentDto />

            <div className='Container'>
              <p>Create a<b style={Bold}>MappingProfiles</b> class</p>
            </div>

            <MappingProfiles />

            <div className='Container'>
              <p>Finally the<b style={Bold}>Controller</b></p>
            </div>

            <Basic />
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}