import React, { FC, Fragment, useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
  Box,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useNavigate } from 'react-router-dom';
import { Drawer } from './drawer/Drawer';
import logo from './image/logo.png';

const useStyles: any = makeStyles(() =>
  createStyles({
    header: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    menu: {
      color: 'white',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
);

const HideOnScroll: FC<any> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<boolean>(false);
  const handleOpen = () => setValue(false);
  const classes = useStyles();

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              onClick={() => navigate('/')}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} alt="logo" />
            </IconButton>
            <Box className={classes.menu}>
              <Button
                onClick={() => {
                  setValue(!value);
                }}
              >
                <MenuIcon />
              </Button>
              <Box>
              <Drawer open={value} handleOpen={handleOpen} />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};
