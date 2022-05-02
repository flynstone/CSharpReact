import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';

const Teal = {
  color: 'teal'
}

export default function MyBuild() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2>My computers</h2>
          <CardContent>
            <div className='Container'>
              <p>First I have my gaming desktop.</p>

              <br />
              <ul>
                <li>OS Windows 11 Pro</li>
                <li>AMD Ryzen 5900X <b style={Teal}>(CPU 12 Cores, 24 Logical Processors)</b></li>
                <li>32 GB Memory DDR4 <b style={Teal}>(RAM)</b></li>
                <li>MSI MEG X570 UNIFY <b style={Teal}>(Motherboard)</b></li>
                <li>Nvidia GeForce RTX 3070 Ti (Founders Edition) <b style={Teal}>(GPU)</b></li>
              </ul>
            </div>

            <div className='Container'>
              <p>Then I have my web server. A Lenovo Thinkstation D30.</p>

              <br />
              <ul>
                <li>OS Windows Server 2019 Essentials</li>
                <li>2 x Intel Xeon E5-2650 v2 @ 2.60 GHz <b style={Teal}>(CPU 8 Cores, 16 Logical Processors Each)</b></li>
                <li>32 GB Memory DDR3 <b style={Teal}>(RAM)</b></li>
                <li>LENOVO 0B98401 PRO <b style={Teal}>(Motherboard)</b></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}