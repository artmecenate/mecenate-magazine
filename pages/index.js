import Head from "next/head";

import mecenateBlogLogo from '../public/MecenateMagazine2.png'
import Button from '@mui/material/Button';
import MenuBar from "../public/menuBar";
import CardHighlight from "../public/cardHighlight";
import CardNews from "../public/cardNews";
import TopBar from "../public/topBar";

import styles from "../styles/Home.module.css";


{/*

Home.getInitialProps = async ({query}) => {

  const result = await fetch('http://dev-api.artmecenate.com/magazine/articles?limit=10&offset=0');
  const data = await result.json()
  
  console.log(data)

    return {
        data: data,
    }
};

*/}



export default function Home() {



  return (


    <div className={styles.container}>



      <TopBar/>

      <img src= "https://da4czav-3sl8rsz.s3.amazonaws.com/public/MecenateMagazine4.png" className = {styles.MecenateMagazineLogo}/>

      <div className = {styles.contentContainer}>
          
          <MenuBar/>

          
          <div className={styles.cardHighlightContainerGeneral}>
            <CardHighlight/>
            <CardHighlight/>
          </div>


          <h1 className={styles.header}>Recent articles</h1>

          <hr/>

      

        </div>

    </div>


  );
}




