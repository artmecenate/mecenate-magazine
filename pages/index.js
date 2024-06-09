import Head from "next/head";
import Button from '@mui/material/Button';
import MenuBar from "../public/menuBar";
import CardNews from "../public/cardNews";
import CardHighlight from "../public/cardHighlight";
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



      

      <a href = {HOME} className = {styles.MecenateMagazineLogoContainer}>
        <img src= "/MagMecenateLogo.png" className = {styles.MagMecenateLogo}/>
      </a>

      <MenuBar/>

      <div className = {styles.contentContainer}>
          

          <CardHighlight/>


          <h1 className={styles.sectionHeader}> NEWS </h1>

          

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




