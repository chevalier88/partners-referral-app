import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import RequestsAppear from './RequestsAppear.jsx';
import LoginPage from './LoginPage.jsx'
import RequestFormAppear from './RequestFormAppear.jsx';
import Logout from './Logout.jsx';

// import nodemailerTesting from './nodemailerTest.mjs';


export default function ResponsiveAppBar({showLogin, setShowLogin, loggedIn, setLoggedIn, userData, setUserData}){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // nodemailerTesting();

  return (
    <Router>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 70,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Partner Referral App
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem key="New Request" onClick={handleCloseNavMenu}>
                  <Nav.Link as={Link} to = {"/request"}>
                    <Typography textAlign="center">New Request</Typography>
                  </Nav.Link>
                </MenuItem>
                <MenuItem key="All Requests" onClick={handleCloseNavMenu}>
                  <Nav.Link as={Link} to = {"/requests"}>
                    <Typography textAlign="center">All Requests</Typography>
                  </Nav.Link>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                as={Link} 
                to = {"/request"}
                key="New Request"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                New Request
              </Button>               
              <Button
                as={Link} 
                to = {"/requests"}
                key="View All Requests"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                View All Requests
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Login/LogOut">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="" src="data:image/svg+xml,%3csvg id='gp-globe' data-name='gp-globe' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16' height='48' width='48'%3e%3cdefs%3e%3clinearGradient id='linear-gradient' x1='8' y1='2.13' x2='8.23' y2='2.13' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0' stop-color='%2316e1f5'/%3e%3cstop offset='0.21' stop-color='%2315d8f6'/%3e%3cstop offset='0.57' stop-color='%2311bef7'/%3e%3cstop offset='1' stop-color='%230c97fa'/%3e%3c/linearGradient%3e%3clinearGradient id='linear-gradient-2' x1='6.59' y1='1.9' x2='6.79' y2='1.9' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-3' x1='6.13' y1='2.34' x2='6.76' y2='2.34' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-4' x1='3.94' y1='3.02' x2='5.4' y2='3.02' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-5' x1='1.85' y1='4.17' x2='4.47' y2='4.17' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-6' x1='0.56' y1='5.74' x2='3.89' y2='5.74' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-7' x1='0' y1='7.65' x2='3.66' y2='7.65' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-8' x1='7.47' y1='13.93' x2='7.81' y2='13.93' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-9' x1='5.41' y1='13.55' x2='6.26' y2='13.55' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-10' x1='3.22' y1='12.65' x2='5.03' y2='12.65' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-11' x1='1.35' y1='11.35' x2='4.22' y2='11.35' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-12' x1='0.21' y1='9.66' x2='3.79' y2='9.66' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-13' x1='0.13' y1='9.67' x2='0.22' y2='9.67' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-14' x1='12' y1='10.34' x2='15.68' y2='10.34' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-15' x1='2.47' y1='13.93' x2='4.07' y2='13.93' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-16' x1='4.53' y1='14.85' x2='6.22' y2='14.85' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-17' x1='7.76' y1='1.2' x2='9.07' y2='1.2' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-18' x1='9.5' y1='1.85' x2='11.47' y2='1.85' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-19' x1='12.29' y1='8.42' x2='16' y2='8.42' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-20' x1='11.39' y1='12.04' x2='14.61' y2='12.04' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-21' x1='10.4' y1='13.44' x2='12.89' y2='13.44' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-22' x1='8.98' y1='14.43' x2='10.69' y2='14.43' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-23' x1='6.93' y1='14.92' x2='8.23' y2='14.92' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-24' x1='12.13' y1='6.28' x2='15.87' y2='6.28' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-25' x1='11.63' y1='4.51' x2='15.04' y2='4.51' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-26' x1='3.11' y1='1.68' x2='4.79' y2='1.68' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-27' x1='0.32' y1='5.16' x2='1.01' y2='5.16' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-28' x1='1.39' y1='3.1' x2='2.7' y2='3.1' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-29' x1='10.77' y1='2.99' x2='13.53' y2='2.99' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-30' x1='0.95' y1='12.27' x2='2.07' y2='12.27' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-31' x1='0.13' y1='10.06' x2='0.6' y2='10.06' xlink:href='%23linear-gradient'/%3e%3clinearGradient id='linear-gradient-32' x1='5.3' y1='1.03' x2='6.91' y2='1.03' xlink:href='%23linear-gradient'/%3e%3c/defs%3e%3cpolygon points='8 2.05 8 2.21 8.23 2.13 8 2.05' fill='url(%23linear-gradient)'/%3e%3cpath d='M6.79%2c1.92l-.2%2c0v0Z' fill='url(%23linear-gradient-2)'/%3e%3cpolyline points='6.57 1.85 6.75 2.63 6.41 2.83 6.13 1.88' fill='url(%23linear-gradient-3)'/%3e%3cpath d='M5.16%2c3.94%2c4%2c2.22l.52-.11L5.4%2c3.68Z' fill='url(%23linear-gradient-4)'/%3e%3cpath d='M4.31%2c5.21%2c1.85%2c3.38c-.06.05.61-.31.55-.26L4.45%2c4.93l0%2c0-.16.3Z' fill='url(%23linear-gradient-5)'/%3e%3cpath d='M3.89%2c6.27l-.08.28L.56%2c5.44a1%2c1%2c0%2c0%2c1%2c.25-.51' fill='url(%23linear-gradient-6)'/%3e%3cpath d='M3.64%2c7.92%2c0%2c7.87V7.29l3.66.34Z' fill='url(%23linear-gradient-7)'/%3e%3cpath d='M7.81%2c14.11c.07%2c0-.4-.13-.33-.14l0-.23.31.12Z' fill='url(%23linear-gradient-8)'/%3e%3cpath d='M5.84%2c14.27c.08%2c0-.5-.21-.42-.2L6%2c12.84s.35.27.3.22Z' fill='url(%23linear-gradient-9)'/%3e%3cpath d='M3.76%2c13.64l-.54-.17%2c1.6-1.8.21.26Z' fill='url(%23linear-gradient-10)'/%3e%3cpath d='M1.8%2c12.35c.06.06-.51-.42-.45-.36L4.1%2c10.36l.12.28Z' fill='url(%23linear-gradient-11)'/%3e%3cpath d='M3.77%2c9.28l-3.32%2c1c0%2c.08-.27-.61-.23-.53L3.72%2c9s.08.38.07.35Z' fill='url(%23linear-gradient-12)'/%3e%3cpath d='M.22%2c9.86.13%2c9.48Z' fill='url(%23linear-gradient-13)'/%3e%3cpath d='M12.09%2c9.65A1.81%2c1.81%2c0%2c0%2c1%2c12%2c10l3.21%2c1.51%2c0-.05.15-.35v0l.13-.34%2c0%2c0%2c.12-.37v0L12.2%2c9.2h0l-.06.29v0' fill='url(%23linear-gradient-14)'/%3e%3cpath d='M3.37%2c13.46%2c3%2c13.25l-.51.54%2c0%2c0%2c.27.24%2c0%2c0%2c.29.23%2c0%2c0%2c.29.2.05%2c0%2c.58-.85-.41-.16' fill='url(%23linear-gradient-15)'/%3e%3cpath d='M5.51%2c14.08%2c5.09%2c14l-.56%2c1.18.07%2c0%2c.32.14H5l.34.14.06%2c0%2c.33.1.06%2c0%2c.47-1.57H5.8' fill='url(%23linear-gradient-16)'/%3e%3cpath d='M8.42%2c2.24l.35.16L9.07.07%2c8.6%2c0%2c8.23%2c0H7.76l0%2c2.05.38.11' fill='url(%23linear-gradient-17)'/%3e%3cpath d='M10%2c3.15%2c10%2c3.2l.1.08.12.1L11.47.79h0L11%2c.6%2c10.69.47%2c10.25.32h0L9.5%2c2.81h0A2.2%2c2.2%2c0%2c0%2c1%2c9.76%2c3l0%2c0Z' fill='url(%23linear-gradient-18)'/%3e%3cpath d='M12.31%2c8.3v.1a.81.81%2c0%2c0%2c1%2c0%2c.16v0l3.64.46V9c0-.13%2c0-.27%2c0-.4v0l0-.36V7.77l-3.69.08v.09s0%2c0%2c0%2c.07%2c0%2c0%2c0%2c.07v.08' fill='url(%23linear-gradient-19)'/%3e%3cpath d='M11.55%2c11a2.69%2c2.69%2c0%2c0%2c1-.16.29l2.39%2c2.26.05%2c0%2c.24-.27%2c0%2c0%2c.23-.29%2c0%2c0%2c.22-.3%2c0%2c0-2.84-2-.14.29' fill='url(%23linear-gradient-20)'/%3e%3cpath d='M10.64%2c12.24l-.24.25L11.79%2c15l.06%2c0%2c.31-.19%2c0%2c0%2c.31-.2.05%2c0%2c.28-.2.05%2c0L11%2c11.84a2.75%2c2.75%2c0%2c0%2c1-.22.26' fill='url(%23linear-gradient-21)'/%3e%3cpath d='M9.31%2c13.32a2.59%2c2.59%2c0%2c0%2c1-.33.19l.45%2c2.36h.08l.33-.07h.05l.36-.1.06%2c0%2c.33-.11h0L9.81%2c13l-.31.22' fill='url(%23linear-gradient-22)'/%3e%3cpath d='M7.57%2c14l-.4.07-.24%2c1.91H7l.35%2c0H7.4l.36%2c0h.47l0-2.16L7.81%2c14' fill='url(%23linear-gradient-23)'/%3e%3cpath d='M12.23%2c6.94l0%2c.31%2c3.6-.68v0l-.09-.41v0l-.09-.36v0c0-.14-.08-.27-.13-.4v0l-3.4%2c1.18.07.31' fill='url(%23linear-gradient-24)'/%3e%3cpath d='M14.61%2c3.49h0l-.26-.36h0l-2.7%2c2.05.14.3.07.14.11.3L15%2c4.2h0a3.64%2c3.64%2c0%2c0%2c0-.23-.39h0' fill='url(%23linear-gradient-25)'/%3e%3cpath d='M4.37%2c2.14%2c4.79%2c2%2c4.2%2c1h0c-.14.07-.27.15-.4.23h0l-.31.2h0l-.37.26h0l.55.73.41-.16' fill='url(%23linear-gradient-26)'/%3e%3cpath d='M.77%2c5%2c1%2c4.64.79%2c4.53v0C.71%2c4.68.66%2c4.82.6%2c5h0l-.14.35v0c-.05.13-.09.26-.14.4v0l.09%2c0L.6%2c5.35' fill='url(%23linear-gradient-27)'/%3e%3cpath d='M2.33%2c3.2l.37-.27-.49-.46h0c-.11.11-.21.22-.31.34h0l-.23.29h0l-.26.36h0l.35.24.33-.31' fill='url(%23linear-gradient-28)'/%3e%3cpath d='M11.1%2c4.31l.19.28%2c2.24-2.38h0l-.34-.31h0l-.29-.23h0l-.36-.26h0L10.77%2c3.9l.22.27Z' fill='url(%23linear-gradient-29)'/%3e%3cpath d='M1.5%2c12l-.29-.35L1%2c11.8l0%2c0c.06.11.12.22.19.33l0%2c0%2c.2.31%2c0%2c0%2c.22.3%2c0%2c0%2c.4-.3-.33-.32' fill='url(%23linear-gradient-30)'/%3e%3cpath d='M.29%2c9.88.17%2c9.43h0v.05l.09.38v0l.1.36v0l.12.37v0l.14%2c0-.19-.43' fill='url(%23linear-gradient-31)'/%3e%3cpolyline points='6.5 1.9 6.91 1.94 6.57 0.13 6.11 0.23 5.75 0.32 5.75 0.32 5.3 0.47 5.8 1.9 6.22 1.89' fill='url(%23linear-gradient-32)'/%3e%3c/svg%3e" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="login" onClick={handleCloseUserMenu}>
                  <Nav.Link as={Link} to = {"/login"}>
                    <Typography textAlign="center" as={Link} to = {"/login"}>Login
                    </Typography>
                  </Nav.Link>
                </MenuItem>
                <MenuItem>
                  <Nav.Link as={Link} to = {"/logout"}>
                    <Typography textAlign="center" as={Link} to = {"/login"}>Logout
                    </Typography>
                  </Nav.Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path = "/" />
        <Route path="/request" element = {<RequestFormAppear loggedIn = {loggedIn} userData = {userData} />} />
        <Route path="/requests" element = {<RequestsAppear loggedIn = {loggedIn} userData = {userData} />} />
        <Route path="/login" element = {<LoginPage showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData}/>} />
        <Route path="/logout" element = {<Logout showLogin = {showLogin} setShowLogin = {setShowLogin} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} userData = {userData} setUserData = {setUserData} />} />
      </Routes>
    </Router>

  );
};
