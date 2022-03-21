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
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { DEFAULT_ID, START_INSERT_ID } from '../../redux/actions/faction_id.actions';


const pages = ['Home', 'Alliance', 'Horde'];


const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toFaccion = (id: number) => {
    dispatch(START_INSERT_ID(id))
    navigate('/WELCOME')
  }
  const toRoute = (page: any) => {
    if (page === "Alliance") {
      toFaccion(1)
    }
    switch (page) {
      case "Home":
        dispatch(DEFAULT_ID({}))
        navigate('/')
        break;
      case "Alliance":
        toFaccion(1)
        break;
      case "Horde":
        toFaccion(2)
        break;
      default:
        navigate('/')
        break;
    }
  }

  return (
    <AppBar position="static" className="tolbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img className="logo_img" src="../public/images/Logowow.png"></img>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => toRoute(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default TopBar;