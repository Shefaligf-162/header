import React from 'react';
import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

/*const app={
	height: '56px',
	width: '100%',
	position: 'fixed',
	top: '0' ,
	left: '0',
	backgroundColor: '#703B09',
	display:'flex',
	alignItems:'center',
	padding: '0 20px',
	boxSizing:'border-box',
	justifyContent:'space-between' 
}*/
const toolbar=(props)=>(
<header className={classes.Toolbar}>
       <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>	);
export default toolbar;