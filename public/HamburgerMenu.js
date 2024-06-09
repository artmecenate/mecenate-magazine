
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'
import {BASE_URL, HOME} from '../constants/apiConstants'

export default function HamburgerMenu(props) {


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
  

  if(props.flag){  
    return (
        <div> 
        <div className={styles.HamburgerEntriesContainer}>
              
              <Button className={styles.HamburgerButton} onClick ={homeLink} > HOME </Button>
              <Button className={styles.HamburgerButton} onClick ={artLink} > art </Button>
              <Button className={styles.HamburgerButton} onClick ={artistsLink} > artists </Button>
              <Button className={styles.HamburgerButton} onClick ={collectorsLink} > collectors </Button>
              <Button className={styles.HamburgerButton} onClick ={focusLink}> focus </Button>
              <Button className={styles.HamburgerButton} onClick ={artMecenateLink}> artmecenate </Button>
        </div>
        

        </div>
    )
  }
  if(props.flag){

    return(<div style={{display: 'none'}}></div>)
  } 
}