import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { Grid } from 'semantic-ui-react';

const Teal = {
  color: 'teal'
}

export default function Info() {
  return(
    <Grid style={{ padding: '2rem', justifyContent: 'center' }}>
      <Grid.Column width="12">
        <Card>
          <CardHeader /><h2><b style={Teal}>Javascript</b></h2>
          <CardContent>
            <div className='Text'>
              <p>Since I will be using <b style={Teal}>Typescript</b> for both Angular and React, I thought it would be a good idea to cover the basics of Javascript.</p>
              <br />
              <p>What is Javascript?</p>
              <p>In the early 1990s there was a browser war between the <b style={Teal}>Netscape Navigator</b> and <b style={Teal}>Microsoft Internet Explorer</b>. In September (1995), <b style={Teal}>Brandan Eich</b> developed a new scripting language in only 10 days.
              It was originally called <b style={Teal}>Mocha</b>, but it's name change quickly to <b style={Teal}>LiveScript</b>, than later became Javascript. In 1997, with Javascript rapidly growing,
              <b style={Teal}> Netscape</b> created a language specification to <b style={Teal}>European Computer Manufacturers Association (ECMA)</b>. In 1998, Netscape was becoming obsolete (losing the war against Internet Explorer), it was purchased by AOL, after failing
              to save the Navigator, AOL outsourced their code which later led to the rise of <b style={Teal}>FireFox</b>. Today Javascript is the most commonly used programming language (with the rise of internet intself).</p>

              <br />
              <p>The basics</p>
              <p>Javascript is <b style={Teal}>case-sensitive</b> and uses <b style={Teal}>Unicode</b> character set. There are 3 kinds of variable declarations.</p>
              <ul>
               <li><b style={Teal}>var</b> - It declares a variable (optionally initialized it to a value)</li>
               <li><b style={Teal}>let</b> - It declares a block-scoped / local variable (optionally initialized it to a value)</li>
               <li><b style={Teal}>const</b> - It declares a block-scoped (read-only named constant)</li>
              </ul>
              <br />
              <p>Data Types</p>
              <p>There are 8 data types in the latest ECMAScript standard, with 7 of them that are <b style={Teal}>primitives</b></p>
              <ol>
                <li><b style={Teal}>Boolean</b> - true or false</li>
                <li><b style={Teal}>null</b> - special keyword denoting a null value</li>
                <li><b style={Teal}>undefined</b> - top-level property whose value is not defined</li>
                <li><b style={Teal}>Number</b> - integer or floating point number</li>
                <li><b style={Teal}>BigInt</b> - integer with arbitrary precision</li>
                <li><b style={Teal}>String</b> - text value</li>
                <li><b style={Teal}>Symbole</b> - data type whose instances are unique and immutable</li>
              </ol>
              <p>and <b style={Teal}>Object</b></p>
              <br />
              
              <p>What is Typescript?</p>
              <p>Is developed and maintained by <b style={Teal}>Microsoft</b>. It is essentially a superset of Javascript and it transpiles to Javascript. Typescript adds additional syntax to JS which helps catch errors while developping.</p>
            </div>

            <div className='Text'>
              <h3>References</h3>
              <a href='https://javascript.info/intro'>https://javascript.info/intro</a>
              <a href='https://www.failory.com/cemetery/netscape'>https://www.failory.com/cemetery/netscape</a>
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types'>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types</a>
            </div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  )
}