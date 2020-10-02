import React, { FC, Fragment } from 'react';
import { AppBar, IconButton, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate()
    
  const HideOnScroll: FC<any> = ({ children }) => {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar>
            <Toolbar >
                <IconButton onClick={()=> navigate('/')}>

                </IconButton>
            </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};
