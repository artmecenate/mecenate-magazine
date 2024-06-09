import {React, useState} from 'react';
import Head from "next/head";
import Button,  { ButtonProps }  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import styles from "../styles/Home.module.css";
import {BASE_URL, HOME} from '../constants/apiConstants'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HamburgerMenu from './HamburgerMenu';
import MenuIcon from '@mui/icons-material/Menu';



const ShopButton = styled(Button)({

  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor:'rgba(0,0,0,0.05)',
  fontSize: '18px;',
  fontWeight: '500',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor:'black',
  borderRadius:'40px',
  height:'30px',
  paddingLeft: '15px',
  paddingRight: '15px',
  marginBottom: '5px',
  
  '&:hover': {
  backgroundColor:'rgba(212,0,0,0.1)',
  borderColor:'rgba(212,0,0,1)',
  color:'rgba(212,0,0,1)',
  }
})


const BootstrapButton = styled(Button)({

  fontSize: '16px;',
  fontWeight: '400',
  
  height:'24px',
  borderStyle:'solid',
  borderColor: 'black',

  '&:hover': {
    /*backgroundColor: 'rgba(174,26,22,.05);',*/
    backgroundColor: 'rgba(1,26,22,0.0)',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color: 'rgba(212,0,0,1);',
    fontWeight: '00',
    
  },
  
});


const artLink = () => {

  window.location = HOME + 'ART/artIndex'

}

const artistsLink = () => {

  window.location = HOME + 'ARTISTS/artistsIndex'

}

const collectorsLink = () => {

  window.location = HOME + 'COLLECTORS/collectorsIndex'

}

const commissionersLink = () => {

  window.location = HOME + 'COMMISSIONERS/commissionersIndex'

}

const focusLink = () => {

  window.location = HOME + 'focus'

}

const homeLink = () => {

  window.location = HOME 

}

const shopLink = () => {

  window.location = 'https://shop.artmecenate.com' 

}

const artMecenateLink = () => {

  window.location = 'https://artmecenate.com' 

}



export default function menuBar() {

  const [hamburger, hamburgerSet] = useState(false)

  const handleHamburgerMenu = () => {

    hamburgerSet(!hamburger)

  }


  return (

        <div>
            <div className = {styles.MecenateMagazineBar}>

              <div className = {styles.MecenateMagazineBarInside}>  
    
                  <BootstrapButton onClick ={homeLink} > HOME </BootstrapButton>
                  <BootstrapButton onClick ={artLink} > art </BootstrapButton>
                  <BootstrapButton onClick ={artistsLink} > artists </BootstrapButton>
                  <BootstrapButton onClick ={collectorsLink} > collectors </BootstrapButton>
                  <BootstrapButton onClick ={focusLink}> focus </BootstrapButton>
                  <BootstrapButton onClick ={artMecenateLink}> artmecenate </BootstrapButton>
              </div>    
            
            {/* <ShopButton onClick ={shopLink}> shop <StorefrontIcon/>  </ShopButton> */} 
            
            
            </div>
            <div className={styles.HamburgerIcon}>
            <Button onClick={handleHamburgerMenu}> <MenuIcon fontSize='large' /></Button>
            </div>
            <HamburgerMenu flag = {hamburger}/> 
         </div>
        
        


  );
}
