import Head from "next/head";
import Image from 'next/image'

import styles from "../styles/Home.module.css";







export default function cardHighlight() {


  return (

    <div>

    
        <div className={styles.cardHighlightContainerGeneral}>
         <a href="https://artmecenate.com" className={styles.cardHighlightContainer}>
          <div className = {styles.cardHighlightTXT}>
            <div className = {styles.cardHighlightTXTsection}> TITLE </div>
            <div className = {styles.cardHighlightTXTtitle}> Here’s Your Guide to the Best, Most Desirable Artworks for Sale During New York’s $2.6 Billion Spring Auction Marathon </div>
            <div className = {styles.cardHighlightTXTauthorContainer}> by <div className = {styles.cardHighlightTXTauthor}> Valerio Adinolfi</div>  </div>
          </div>
         </a> 
         
        </div>

       


    </div>


  );
}

