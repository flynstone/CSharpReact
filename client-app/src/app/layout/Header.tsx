import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Header">
        <Link to='/'><img src={logo} height={85} width={85} alt="Logo" /></Link>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='articles'>Articles</Link>
          </Typography>
          
          <Button as={NavLink} to='/createArticle' positive >New Article</Button> 
        </Toolbar>
      </AppBar>
    </Box>
  )
}