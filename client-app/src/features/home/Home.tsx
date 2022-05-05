import { Card, CardContent, CardHeader } from '@mui/material';
import React from "react";
import { Grid } from 'semantic-ui-react';


export default function Home() {
  
  return (
    <>
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
        <Grid.Column width="12">
          <Card>
            <CardHeader /> <h2>Home Page</h2>
            <CardContent>
              <div className='Text'>
                <p>I would first like to thank anyone that takes time to visit this website.</p>
                <br />
                <p>There are 2 sections on this website.</p>
                <br />
                <p>The first one is on the top left area where there are 2 dropdowns which leads to coding examples for both Front-End and Back-End.</p>
                <b style={{color: 'red'}}>** Note that it is still under developement. More content coming soon.</b>
                <br />
                <p>The second section is where I use a database. I've created a very basic twitter clone where users can register, login, add new articles, edit articles, edit their profiles (add a bio descripion, add pictures / set a profile picture, view contacts following/followers),
                   and finally allow users to add comments on any articles. This process is done using SignalR which means comments are added instantly (in real time).</p>
                <br />
                <p>In order to register you will need a valid email address, you will receive a confirmation link in your inbox. Without this you will not be able to successfully register. I will NEVER send any emails to the registered user, some might be generated, 
                  an example would be in the case someone forgets their password and need to reset it. Also note that your passwords will be encrypted (I will cover what this means in the C# section), but as short description this means that even if I have the same password as any one else 
                  in the database there would be no easy way for me to know what your password is unless I had some sort of decrypting software and alot of time to lose. This is why it is recommended to never use the same password.
                </p>
                <br />
                <p>You do not need to register to view the articles. You can simply click on the Go to Articles button to view the list of created articles. But you will not be able to comment on articles, add articles or view/edit your profile</p>
              </div>
            </CardContent>
          </Card>
        </Grid.Column>
      </Grid>
    </>
        
  )
}