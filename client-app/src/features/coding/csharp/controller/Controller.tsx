import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import AddService from './code/AddService';
import Base from './code/Base';
import Basic from './code/Basic';
import ILogger from './code/ILogger';
import IRepository from './code/IRepository';
import IUnitOfWork from './code/IUnitOfWork';
import MappingProfiles from './code/MappingProfiles';
import ServiceExtensions from './code/ServiceExtensions';
import StudentDto from './code/StudentDto';
import StudentInterface from './code/StudentInterface';
import StudentRepository from './code/StudentRepository';
import UnitOfWork from './code/UnitOfWork';
import ProgramUpdate from './code/ProgramUpdate';
import Final from './code/Final';
import Cors from './code/Cors';

const Bold = {
  color: 'teal',
  paddingLeft: '10px' 
}

export default function Controller() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2>C# (Asp.Net Core Web Api / Entity Framework) - <b style={Bold}>Controllers</b></h2>
          <CardContent>
            <div className='Text'>
              <p>This is where we create our Api routes and the http requests (for the front-end).</p>
              <br />
              <p>I will cover 2 different ways to access the database from the controllers.</p>
            </div>

            <div className='Text'>
              <p>The first way is the repository pattern.</p>
              <br/>
              <p>We first need to build a new interface.</p>
            </div>

            <IRepository />

            <div className='Text'>
              <p>Then we build an abstract class that will<b style={Bold}>inherit</b> our interface.</p>
            </div>

            <Base />

            <div className='Text'>
              <p>We then need a new interface.</p>
            </div>

            <StudentInterface />

            <div className='Text'>
              <p>And a new class.</p>
            </div>

            <StudentRepository />

            <div className='Text'>
              <p>We need 1 last interface before configuring the scopes.</p>
            </div>

            <IUnitOfWork />

            <div className='Text'>
              <p>Now its time for build the class for that interface.</p>
            </div>

            <UnitOfWork />

            <div className='Text'>
              <p>Next step is to create a new extension and install<b style={Bold}>Automapper</b>.</p>
            </div>

            <ServiceExtensions />

            <div className='Text'>
              <p>Import the new extension in the<b style={Bold}>Program.cs</b> file and create a<b style={Bold}>data transfer object</b>.</p>
            </div>

            <StudentDto />

            <div className='Text'>
              <p>Create a<b style={Bold}>MappingProfiles</b> class</p>
            </div>

            <MappingProfiles />

            <div className='Text'>
              <p>Finally the<b style={Bold}>Controller</b></p>
            </div>

            <Basic />

            <div className='Text'>
              <p>Before we do more actions with our controller we should probably add an extension that will record log messages in a file. For this we will need to install a package called<b style={Bold}>NLog</b>.</p>
            </div>

            <ILogger />

            <div className='Text'>
              <p>We can then add this line to our scopes (in the service extension).</p>
            </div>

            <AddService />

            <div className='Text'>
              <p>We then need a new file that we will call<b style={Bold}>nlog.config</b>.</p>
            </div>

            <div className='Text'>
              <p>Then add these 2 lines to the<b style={Bold}>Program.cs</b> file.</p>
            </div>

            <ProgramUpdate />

            <div className='Text'>
              <p>Now back to the<b style={Bold}>Controller</b>.</p>
            </div>

            <Final />

            <div className='Text'>
              <p>We now need to configure<b style={Bold}>Cors (cross-origin policies)</b> to allow our front-end to contact the back-end.</p>
            </div>

            <Cors />

            <div className='Text'>
              <p>Next step will be the<b style={Bold}>View</b> for this back-end I will use <b style={Bold}>Angular</b>.</p>
            </div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}