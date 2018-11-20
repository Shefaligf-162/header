import React from 'react';
import gslogo from '../../assets/image/SGSITS_Indore.png';
import classes from './Logo.module.css';
const logo=(props)=>(
	<div className={classes.Logo} style={{height: props.height}}>
	<img src={gslogo} alt="SGSITS_Indore"  /></div>
	);
export default logo;