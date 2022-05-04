import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import AppSettings from './code/AppSettings';
import Class from './code/Class';
import DatabaseSeed from './code/DatabaseSeed';
import DataContext from './code/DataContext';
import Program from './code/Program';
import ServiceExtensions from './code/ServiceExtensions';
import SeedContext from './code/SeedContext';
import Course from './code/Course';
import Enrollment from './code/Enrollment';
import CourseEnrollment from './code/CourseEnrollment';
import UpdateDbContext from './code/UpdateDbContext';
import Swagger from './code/Swagger';
import UpdateProgram from './code/UpdateProgram';

const Bold = {
  color: 'teal',
  paddingLeft: '10px'
}

const Violet  = {
  color: 'violet'
}

export default function CSharp() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2>C# (Asp.Net Core Web Api / Entity Framework) - <b style={Bold}>Models</b></h2>
          <CardContent>
            <div className='Container'>
              <div className='Text'>
              <p>Is an object oriented programming language (class-based).</p>
              <br />
              <p>Naming conventions are as follows.. </p>
                <br />
                <p>
                  <b style={Violet}>Pascal Case</b> =<b style={Bold}>class</b>,<b style={Bold}>record</b> or<b style={Bold}>struct</b>
                </p>
                <p>
                  <b style={Violet}>camel Case</b> =<b style={Bold}>private</b> or<b style={Bold}>internal</b> fields with the prefix <b style={Violet}>_</b>
                </p>
              <br />

              <p>In C# classes are declared using the keyword<b style={Bold}>class</b></p>
              </div>

              <Class />

              <div className='Text'>
                <p>Next step after building a<b style={Bold}>class</b> is to build a<b style={Bold}>DataContext</b></p>
              </div>
               

                <DataContext />

                <div className='Text'>
                <p>It would now be time to configure the database in the Program.cs. I prefer adding a new folder where I will add all the extensions to the project and call them inside the Program.cs</p>
                <br />
                <p>**Note that prior to Asp.Net Core 6, there was a Startup.cs file where you would add these configurations.</p>
              </div>

              <ServiceExtensions />

              <div className='Text'>
                <p>We will now create a connection string to the database in the appsettings.json</p>
              </div>

              <AppSettings />

              <div className="Text">
                <p>In the Program.cs we need to add the following line</p>
              </div>

              <Program />

              <div className="Text">
                <p>We could then create a migration using entity framework code first. But this would create a database with no data in it... We could seed some data into our Students table by creating a new C# class.</p>
              </div>

              <DatabaseSeed />

              <div className="Text">
                <p>Once this is done we now have to go back to our ApplicationDbContext to configure the migration</p>
              </div>

              <SeedContext />

              <div className="Text">
                <p>We could create our database with its seeds by running the command in the terminal. But we could also add some tables in the database.</p>

                <br /> 
                <p>Let's start by adding a many-to-many relationship. To do so we will need to create 2 new tables in our database, with one of them being a<b style={Bold}>Junction Table</b> (that will link both tables)</p>
              </div>

              <Course />

              <div className="Text">
                <p>Now the<b style={Bold}>Junction Table</b></p>
              </div>

              <Enrollment />

              <div className="Text">
                <p>And add this line to the<b style={Bold}>Student</b> class</p>
              </div>

              <CourseEnrollment />

              <div className="Text">
                <p>Add these lines to the<b style={Bold}>ApplicationDbContext</b> to create our 2 new tables</p> 
              </div>

              <UpdateDbContext />

              <div className="Text">
                <p>Now we have a database, but how do we get the data? What I am used to is the MVC (model-view-controller) pattern. Now that we've covered the basics of models, 
                  it would be a good idea to add an extension to help us visualize our controllers.</p> 
              </div>

              <Swagger />
              
              <div className="Text">
                <p>We then modify our Program.cs file. This is what it should look like at this point.</p> 
              </div>

              <UpdateProgram />

              <div className='Text'>
<iframe src="https://player.vimeo.com/video/705861252?h=6d45a66dcf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="600" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="New Recording - 5/3/2022, 2:45:09 PM"></iframe>
</div>

              <div className="Text">
                <p style={Violet}>Note it would of been better practice to add a<b style={Bold}>Domain Layer</b> (C# class library) for the folder models. For simplicity I will keep all the folders in 1 project folder.</p> 
                <br />
                <p>Next step would be to build the<b style={Bold}>Controller</b>.</p> 
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}