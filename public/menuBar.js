import Head from "next/head";
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import Button,  { ButtonProps }  from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import styles from "../styles/Home.module.css";



const BootstrapButton = styled(Button)({

  '&:hover': {
    backgroundColor: 'rgba(174,26,22,.05);',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color: 'rgba(174,26,22,1);'
  },
  
});




export default function menuBar() {


  return (

        <div className = {styles.MecenateMagazineBar}>

          <div className = {styles.MecenateMagazineBarInside}>  
 
              <BootstrapButton > art </BootstrapButton>
              <BootstrapButton> artists </BootstrapButton>
              <BootstrapButton> commissioners & comissions </BootstrapButton>
              <BootstrapButton> focus </BootstrapButton>
          </div>    
          
        </div>


  );
}
