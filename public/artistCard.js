import Head from "next/head";


import styles from "../styles/Home.module.css";
import {BASE_URL, HOME} from '../constants/apiConstants'




export default function artistCard(props) {

  console.log(props.picture)

  return (

 
        


          <a href = {'http://artmecenate.com' + '/' + props.url} className = {styles.artistCardContainer}>

            <div className = {styles.artistCardIMGcontainer}>
                <img src= {props.picture} className = {styles.artistCardIMG}/>
            </div>
            <div className = {styles.artistCardTXT}>
                <div className = {styles.artistCardtitle}>
                  {props.title}
                </div>    
            </div>
          </a>         
        
    
  );
}






