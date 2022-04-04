import React from "react"
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import background from '../../assets/img/page-not-found.jpg';

const styles = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  padding: '0',
  margin: '0',
  width: '100vw',
  height: '100vh',
}

export default function NotFound() {

  return (
    <div style={styles}>
      <div className="Container" style={{  }}>
        <Button as={Link} to='/articles' primary>
          Return to articles
        </Button>
      </div>
    </div>
  )
}