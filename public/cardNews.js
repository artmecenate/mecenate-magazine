import Head from "next/head";


import styles from "../styles/Home.module.css";







export default function cardNews(props) {

  console.log(props.picture)

  return (

    <div>

        <div className = {styles.cardNewsContainerGeneral}>
          <div className = {styles.cardNewsContainer}>

            <img src= {props.picture} className = {styles.cardNewsIMG}/>

            <div className = {styles.cardNewsTXT}>

                <div className = {styles.cardNewsTXTheader}>
                  {props.section}
                </div>
                <div className = {styles.cardNewsTXTtitle}>
                  {props.title}
                </div>
                <div className = {styles.cardNewsTXTsubtitle}>
                  {props.subtitle}
                </div>
                <div className = {styles.cardNewsTXTauthorBar}>
                  <div> by</div>
                  <div className = {styles.cardNewsTXTauthorAuthor}> {props.author} </div>
                  <div className = {styles.cardNewsTXTauthorDate}> - {props.date} </div>
                </div>
            </div>
          </div>
          <a href = {'/ART/'+props.url} className = {styles.cardNewsContainerOverlay}> 
          </a>
        </div>

        <hr/>
    
    </div>


  );
}






