import Head from "next/head";
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuBar from "../../public/menuBar";
import TopBar from "../../public/TopBar";
import dynamic from 'next/dynamic'

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

const QuillNoSSRWrapper = dynamic(import('react-quill'), {  
  ssr: false,
  loading: () => <p>Loading ...</p>,
  })

import styles from "../../styles/Home.module.css";
import 'react-quill/dist/quill.snow.css';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File





ARTArticle.getInitialProps = async ({query}) => {

  const result = await fetch('http://dev-api.artmecenate.com/magazine/article/'+ query.articleID);
  const data = await result.json()


    return {

        data: data,
        link: query.articleID,

    }
};


export default function ARTArticle({data, link}) {


  return (


    <div className={styles.container}>
      
  
      <TopBar/>
      <img src= "/MecenateMagazine4.png/" className = {styles.MecenateMagazineLogo}/>

      <div className = {styles.contentContainer}>
        <MenuBar/>

        <div className = {styles.articleSection}> {data.section} </div>
        <div className = {styles.articleTitle}> {data.title} </div>
        <div className = {styles.articleSubtitle}> {data.subtitle} </div>
        <div className = {styles.articleAuthorDateBar}>
          <div className = {styles.articleAuthor}> {data.author},  </div>
          <div className = {styles.articleDate}> {data.time_stamp} </div>
        </div>


        <div className = {styles.articleArticle}> Article </div>

        <div dangerouslySetInnerHTML={{ __html: data.content }} />




        {/*############ SHARING BUTTONS ##############*/}

        <FacebookShareButton
          url={'https://github.com/next-share'}
          quote={'next-share is a social share buttons for your next React apps.'}
          hashtag={'#nextshare'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <FacebookMessengerShareButton
          url={'https://github.com/next-share'}
          appId={''}
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>

        <TwitterShareButton
          url={'https://github.com/next-share'}
          title={'next-share is a social share buttons for your next React apps.'}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>



        <WhatsappShareButton
          url={'https://github.com/next-share'}
          title={'next-share is a social share buttons for your next React apps.'}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <LinkedinShareButton url={'https://github.com/next-share'}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <PinterestShareButton
          url={'https://github.com/next-share'}
          media={'next-share is a social share buttons for your next React apps.'}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <RedditShareButton
          url={'https://github.com/next-share'}
          title={'next-share is a social share buttons for your next React apps.'}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

        <TwitterShareButton
          url={'https://github.com/next-share'}
          title={'next-share is a social share buttons for your next React apps.'}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WeiboShareButton
          url={'https://github.com/next-share'}
          title={'next-share is a social share buttons for your next React apps.'}
          image={''}
        >
          <WeiboIcon size={32} round />
        </WeiboShareButton>

        <EmailShareButton
          url={'https://github.com/next-share'}
          subject={'Next Share'}
          body="body"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>

 


      </div>



    </div>


  );
}
