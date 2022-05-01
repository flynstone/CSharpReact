import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

const HeaderStyle = {
  width: '100vw',
  backgroundColor: '#2f8999',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")'
}

export default observer(function Header() {
  const { userStore: {user, logout, isLoggedIn} } = useStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Header"  style={HeaderStyle}>
          <Link to="/">
            <img src={logo} height={65} width={65} alt="Logo" />
          </Link>
          
          <Menu.Item position="right" style={{ paddingLeft: "2rem" }}>
            <Dropdown pointing="top" text="C Sharp (C#)">
              <Dropdown.Menu style={{ backgroundColor: "teal" }}>
                <Dropdown.Header>Repository Pattern</Dropdown.Header>
                <Dropdown.Item as={Link} to='/csharp' content="Models" style={{fontSize: '24px', padding: '1rem'}} />
                <Dropdown.Item as={Link} to='/controller' text="Controllers"  style={{fontSize: '24px', padding: '1rem'}} />

                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>Clean Architecture (CQRS) Pattern</Dropdown.Header>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          {isLoggedIn &&
            <>
              <div style={{ flexGrow: 1 }}></div>
              <Menu.Item position="right" style={{ paddingRight: "2rem" }}>
                <Image src={user?.image || "/img/user.png"} avatar spaced="right" />
                <Dropdown pointing="top" text={user?.displayName}>
                  <Dropdown.Menu style={{ backgroundColor: "teal" }}>
                    <Dropdown.Item as={NavLink} to="/createArticle" positive content="New Article" icon="plus" />
                    <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text="My Profile" icon="user" />
                    <Dropdown.Item onClick={logout} text="Logout" icon="power" />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </>}
        </Toolbar>
      </AppBar>
    </Box>
  );
})