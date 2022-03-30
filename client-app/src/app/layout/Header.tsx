import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Header">
        <Link to='/'><img src={logo} height={85} width={85} alt="Logo" /></Link>
          
          <div style={{ flexGrow: 1 }}>
            <Link to='/errors'>Errors</Link>
          </div>
          
          <Button as={NavLink} to='/createArticle' positive content='New Article' />
        </Toolbar>
      </AppBar>
    </Box>
  )
}