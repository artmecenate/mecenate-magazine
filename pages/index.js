import Head from "next/head";
import Image from 'next/image'
import mecenateBlogLogo from '../public/MecenateMagazine2.png'
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';

import MenuBar from "../public/menuBar";

import CardHighlight from "../public/cardHighlight";
import CardNews from "../public/cardNews";
import TopBar from "../public/topBar";

import React, { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {  
  ssr: false,
  loading: () => <p>Loading ...</p>,
  })


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



export default function Home({data}) {



  return (


    <div className={styles.container}>



      <TopBar/>

      <img src= "/MecenateMagazine4.png/" className = {styles.MecenateMagazineLogo}/>

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
export async function getServerSideProps() {
  // Fetch data from external API
  

  const result = await fetch('http://dev-api.artmecenate.com/magazine/articles?limit=10&offset=0');
  const data = await result.json()

  // Pass data to the page via props
  return { 
    props: { 
      data: data 
    }, 
  }
}
