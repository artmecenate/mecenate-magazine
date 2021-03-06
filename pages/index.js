import Head from "next/head";

import mecenateBlogLogo from '../public/MecenateMagazine2.png'
import Button from '@mui/material/Button';
import MenuBar from "../public/menuBar";
import CardHighlight from "../public/cardHighlight";
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



export default function Home({data}) {



  return (


    <div className={styles.container}>



      <TopBar/>

      <a href = {HOME}>
        <img src= "https://da4czav-3sl8rsz.s3.amazonaws.com/public/MecenateMagazine4.png" className = {styles.MecenateMagazineLogo}/>
      </a>

      <div className = {styles.contentContainer}>
          
          <MenuBar/>

          
          <div className={styles.cardHighlightContainerGeneral}>
            <CardHighlight/>
            <CardHighlight/>
          </div>


          <h1 className={styles.header}>Recent articles</h1>

          <hr/>

          <div >

            { data.map((News, i) => (

                 <CardNews id = {News.id} 
                           title = {News.title} 
                           subtitle = {News.subtitle} 
                           author = {News.author}
                           section = {News.section}
                           subsection = {News.subsection}
                           format = {News.format}
                           content = {News.content}
                           picture = {News.picture}
                           url = {News.url}
                           date = {News.time_stamp}     

                           key = {i} index = {'n'+i}/> ))              
            }
         </div>

        </div>

    </div>


  );
}



// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  

  const result = await fetch(BASE_URL+'magazine/articles?limit=10&offset=0');
  const data = await result.json()

  // Pass data to the page via props
  return { 
    props: { 
      data: data 
    }, 
  }
}
