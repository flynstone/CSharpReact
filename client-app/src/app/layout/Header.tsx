import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function Header() {
  const { userStore: {user, logout} } = useStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Header">            
            
          <Link to='/'><img src={logo} height={85} width={85} alt="Logo" /></Link>

          <div style={{ flexGrow: 1 }}></div>

          <Menu.Item position='right' style={{paddingRight: '2rem'}}>
            <Image src={user?.image || '/img/user.png'} avatar spaced='right' />
            <Dropdown pointing='top' text={user?.displayName} >
              <Dropdown.Menu style={{backgroundColor: 'teal'}}>
                <Dropdown.Item as={NavLink} to='/createArticle' positive content='New Article' icon='plus' />
                <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text='My Profile' icon='user' />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>           
            </Dropdown>
          </Menu.Item>
            
          

        </Toolbar>
      </AppBar>
    </Box>
  )
})