import Head from "next/head";


import Button from '@mui/material/Button';
import MenuBar from "../public/menuBar";

import CardNews from "../public/cardNews";
import TopBar from "../public/topBar";

import styles from "../styles/Home.module.css";

import {BASE_URL, HOME} from '../constants/apiConstants'


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



export default function Focus({data}) {



  return (


    <div className={styles.container}>



      <TopBar/>

      <a href = {HOME}>
        <img src= "https://da4czav-3sl8rsz.s3.amazonaws.com/public/MecenateMagazine4.png" className = {styles.MecenateMagazineLogo}/>
      </a>

      <div className = {styles.contentContainer}>
          
          <MenuBar/>

          
         


          <h1 className={styles.sectionHeader}> FOCUS </h1>

          

        </div>

    </div>


  );
}





