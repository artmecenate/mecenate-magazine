import Head from "next/head";

import Button,  { ButtonProps }  from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import styles from "../styles/Home.module.css";

import {BASE_URL, HOME} from '../constants/apiConstants'


const BootstrapButton = styled(Button)({

  '&:hover': {
    backgroundColor: 'rgba(174,26,22,.05);',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color: 'rgba(174,26,22,1);'
  },
  
});


const artLink = () => {

  window.location = HOME + 'ART/artIndex'

}

const artistsLink = () => {

  window.location = HOME + 'ARTISTS/artistsIndex'

}

const commissionersLink = () => {

  window.location = HOME + 'COMMISSIONERS/commissionersIndex'

}

const focusLink = () => {

  window.location = HOME + 'focus'

}

export default function menuBar() {


  return (

        <div className = {styles.MecenateMagazineBar}>

          <div className = {styles.MecenateMagazineBarInside}>  
 
              <BootstrapButton onClick ={artLink} > art </BootstrapButton>
              <BootstrapButton onClick ={artistsLink} > artists </BootstrapButton>
              <BootstrapButton onClick ={commissionersLink}> commissioners & comissions </BootstrapButton>
              <BootstrapButton onClick ={focusLink}> focus </BootstrapButton>
          </div>    
          
        </div>


  );
}
