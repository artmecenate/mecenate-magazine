import Head from "next/head";
import React, {useState} from "react";
import MenuBar from "../../public/menuBar";
import TopBar from "../../public/topBar";
import {BASE_URL, HOME} from '../../constants/apiConstants'


import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';

import {
  PinterestShareButton,
  PinterestIcon,
} from 'next-share'

import {
  RedditShareButton,
  RedditIcon,
} from 'next-share'

import {
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'

import {
  WeiboShareButton,
  WeiboIcon,
} from 'next-share'

import {
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

import {
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'

import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'next-share'

import {
  EmailShareButton,
  EmailIcon,
} from 'next-share'



import styles from "../../styles/Home.module.css";





{/* 
ARTArticle.getInitialProps = async ({query}) => {

  const result = await fetch('http://dev-api.artmecenate.com/magazine/article/'+ query.articleID);
  const data = await result.json()


    return {

        data: data,
        link: query.articleID,

    }
};

*/}


export default function ARTArticle({data, link}) {


  return (


    <div className={styles.container}>

      <Head>
        <meta property="og:type"               content="article" />
        <meta property="og:type:author"        content= {HOME} />
        <meta property="og:title"              content= {data.title} />
        <meta property="og:description"        content= {data.subtitle} />
        <meta property="og:image"              content={data.picture} /> 
      </Head>
      
  
      <TopBar/>
      <a href = {HOME}>
        <img src= "https://da4czav-3sl8rsz.s3.amazonaws.com/public/MecenateMagazine4.png" className = {styles.MecenateMagazineLogo}/>
      </a>

      <div className = {styles.contentContainer}>
        <MenuBar/>

        <div className = {styles.articleSection}> {data.section} </div>
        <div className = {styles.articleTitle}> {data.title} </div>
        <div className = {styles.articleSubtitle}> {data.subtitle} </div>
        <div className = {styles.articleAuthorDateBar}>
          <div className = {styles.articleAuthor}> {data.author},  </div>
          <div className = {styles.articleDate}> {data.time_stamp} </div>
        </div>


        <div className = {styles.articleArticle}>  

          <div dangerouslySetInnerHTML={{ __html: data.content }} />

        </div>




        {/*############ SHARING BUTTONS ##############*/}

        <FacebookShareButton
          url={HOME+'ART/'+data.url}

        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <FacebookMessengerShareButton
          url={HOME+'ART/'+data.url}
          appId={''}
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>

        <TwitterShareButton
          url={HOME+'ART/'+data.url}
          title={data.title}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>



        <WhatsappShareButton
          url={HOME+'ART/'+data.url}
          title={data.title}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>


        <PinterestShareButton
          url={HOME+'ART/'+data.url}
          media={data.title}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <RedditShareButton
          url={HOME+'ART/'+data.url}
          title={data.title}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

       
        <EmailShareButton
          url={HOME+'ART/'+data.url}
          subject={'Check this article on magMecenate'}
          body={data.title + ': '}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>

 


      </div>



    </div>


  );
}

export async function getStaticPaths() {

  
  const res = await fetch(BASE_URL + 'magazine/articles?limit=10&offset=0')
  const posts = await res.json()

  
  const paths = posts.map((post) => ({
    params: { articleID: post.url },
  }
  
  ))

  
  return { paths, fallback: false }
}

{/*

export async function getStaticPaths(){

  return{
    paths:[
      {
              params:{articleID:'Test__1'}
      },
      {
              params:{articleID:'Interviews:_a_chat_with_Mr_Klevra_in_his_studio_4'}
      }
    ],
    fallback: false,
  }
}

*/}

export async function getStaticProps({params}) {
  // Fetch data from external API
  
  
  const result = await fetch(BASE_URL + 'magazine/article/'+ params.articleID);
  const data = await result.json()

  // Pass data to the page via props
  return { 
    props: { 
      data: data,
      link: params.articleID, 

    }, 
  }
}
