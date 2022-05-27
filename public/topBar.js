import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function TopBar() {


  return (


      <div className = {styles.topBarContainer}>
        <img src= "/Logo_logo.png/" className = {styles.topBarLogo}/>

        <a href="https://artmecenate.com" className = {styles.topBarLink}> artMecenate.com </a>
      </div>


  );
}