import Head from "next/head";


import styles from "../styles/Home.module.css";







export default function cardHighlight() {


  return (

    <div className={styles.cardHighlightContainerGeneral}>

    
        <div className={styles.cardHighlightContainerGeneral}>
         <a href="https://mag.artmecenate.com/ARTISTS/Interviews:_a_chat_with_Mr_Klevra_in_his_studio_10" className={styles.cardHighlightContainer}>
          <div className = {styles.cardHighlightTXT}>
            <div className = {styles.cardHighlightTXTsection}> ARTISTS </div>
            <div className = {styles.cardHighlightTXTtitle}> Interviews: a chat with Mr. Klevra in his studio </div>
            <div className = {styles.cardHighlightTXTauthorContainer}> by <div className = {styles.cardHighlightTXTauthor}> Marco Marasca</div>  </div>
          </div>
         </a>
        </div>

        <div className={styles.cardHighlightContainerGeneral}>
         <a href="https://mag.artmecenate.com/ARTISTS/Interviews:_a_chat_with_Mr_Klevra_in_his_studio_10" className={styles.cardHighlightContainer}>
          <div className = {styles.cardHighlightTXT}>
            <div className = {styles.cardHighlightTXTsection}> ARTISTS </div>
            <div className = {styles.cardHighlightTXTtitle}> Interviews: a chat with Mr. Klevra in his studio </div>
            <div className = {styles.cardHighlightTXTauthorContainer}> by <div className = {styles.cardHighlightTXTauthor}> Marco Marasca</div>  </div>
          </div>
         </a>
        </div>

       


    </div>


  );
}

