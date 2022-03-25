import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function Home() {
  return (
    <Container style={{marginTop: '7rem'}}>
      <h1>Home page</h1>
      <h3>Go to <Link to='/articles'>Articles</Link></h3>
    </Container>
  )
}