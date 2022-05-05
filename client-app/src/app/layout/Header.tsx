import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Image, Dropdown, Button } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import LoginForm from '../../features/users/LoginForm';
import RegisterForm from '../../features/users/RegisterForm';

const HeaderStyle = {
  width: '100vw',
  backgroundColor: '#2f8999',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")'
}

export default observer(function Header() {
  const { userStore: {user, logout, isLoggedIn} } = useStore();
  const { userStore, modalStore } = useStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Header"  style={HeaderStyle}>
          <Link to="/">
            <img src={logo} height={65} width={65} alt="Logo" />
          </Link>

          <Menu.Item position="right" style={{ paddingLeft: "2rem" }}>
            <Dropdown pointing="top" text="C Sharp (C#)" style={{fontSize: '18px'}}>
              <Dropdown.Menu style={{ backgroundColor: "teal" }}>
                <Dropdown.Header>Repository Pattern</Dropdown.Header>
                <Dropdown.Item as={Link} to='/csharp' content="Models" style={{fontSize: '18px', padding: '1rem'}} />
                <Dropdown.Item as={Link} to='/controller' text="Controllers"  style={{fontSize: '18px', padding: '1rem'}} />

                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>Clean Architecture (CQRS) Pattern</Dropdown.Header>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <div className='Container'>
          <Menu.Item position="right" style={{ paddingLeft: "2rem" }}>
            <Dropdown pointing="top" text="Javascript" style={{fontSize: '18px'}}>
              <Dropdown.Menu style={{ backgroundColor: "teal" }}>
              <Dropdown.Header>Front-End</Dropdown.Header>
              <Dropdown.Item as={Link} to='/javascript' content="Basics" style={{fontSize: '18px', padding: '1rem'}} />
                <Dropdown.Header>Angular</Dropdown.Header>
                <Dropdown.Item as={Link} to='/angular' content="Angular" style={{fontSize: '18px', padding: '1rem'}} />


                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>React</Dropdown.Header>
                <Dropdown.Item as={Link} to='/react' text="React"  style={{fontSize: '18px', padding: '1rem'}} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          </div>
          <div style={{ flexGrow: 1 }}></div>
          <Button as={Link} to='/articles' size='small' color='grey' floated='right' inverted>Go to Articles</Button>
          {userStore.isLoggedIn ? (
          <>
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
          </>          
        ) : (
            <>
              <Button onClick={() => modalStore.openModal(<LoginForm />)} floated='right' color='blue' size='small' inverted>
                Login
              </Button>
              <Button onClick={() => modalStore.openModal(<RegisterForm />)} floated='right' color='green' size='small' inverted>
                Register
              </Button> 
            </>
        )}
        </Toolbar>
      </AppBar>
    </Box>
  );
})