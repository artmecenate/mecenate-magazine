import Head from "next/head";
import React, {useState} from "react";
import {BASE_URL, HOME} from '../constants/apiConstants'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import dynamic from 'next/dynamic'
import styles from "../styles/Home.module.css";


import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});




export default function createArticle() {


  const [editorContent, editorContentSet] = useState('some text')
  const [img, imgSet] = useState(null)
  const [imgURL, imgURLSet] = useState('')

  const [title, titleSet] = useState('')
  const [subtitle, subtitleSet] = useState('')
  const [author, authorSet] = useState('')
  const [date, dateSet] = useState('')
  const [section, sectionSet] = useState('')
  const [subsection, subsectionSet] = useState('')
  const [format, formatSet] = useState('')
  const [url, urlSet] = useState('')

  const [username, usernameSet] = useState('artmecenate@gmail.com')
  const [password, passwordSet] = useState('Octavianus_Augustus')
  const [token, tokenSet] = useState('')

  const handleTitle = (e) => {
    
    titleSet(e.target.value)
    
  }
  const handleSubtitle = (e) => {

    subtitleSet(e.target.value)
   
  }
  const handleAuthor = (e) => {

    authorSet(e.target.value)
  
  }
  const handleDate = (e) => {

    dateSet(e.target.value)
    
  }
  const handleSection = (e) => {

    sectionSet(e.target.value)
    
  }
  const handleSubsection = (e) => {

    subsectionSet(e.target.value)
   
  }
  const handleFormat = (e) => {

    formatSet(e.target.value)
  
  }
  const handleUrl = (e) => {

    urlSet(e.target.value)
  
  }

    const handlePassword = (e) => {

    passwordSet(e.target.value)
  
  }
  const handleUsername = (e) => {

    usernameSet(e.target.value)
  
  }


  

  const handleEditorChange = (content) =>{

        editorContentSet(content)
  }



    const handleImageChange = (e) => {
      
      

      imgSet( e.target.files[0])

      console.log(e.target.files[0])

        //console.log(e.target.files[0])

        let reader = new FileReader();
        reader.onload = function(ev){


        imgURLSet(ev.target.result)


        }

        if(e.target.files[0]){

      reader.readAsDataURL(e.target.files[0])}

                

    };

        const handleLogin = async () => {


      const response = await fetch(BASE_URL+'magazine/login',{

        method:'POST',
        body:JSON.stringify(
            {
              email: username,
              password: password,
            }
          )

          
        ,
        headers:{
           
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()
      tokenSet(data.access_token)
      console.log(data)
      
    }

    const submitArticle = async () => {

      let imageData = new FormData();

      
      imageData.append('picture', img);
      imageData.append('title', title);
      imageData.append('subtitle', subtitle);
      imageData.append('author', author);
      imageData.append('time_stamp', date);
      imageData.append('section', section);
      imageData.append('subsection', subsection);
      imageData.append('format', format);
      imageData.append('content', editorContent);
      imageData.append('url', url);

      console.log(imageData.get('section'))

      const response = await fetch(BASE_URL+'magazine/save',{

        method:'POST',
        body:

          imageData
        ,
        headers:{
          Authorization: 'Bearer '+ token,
          Accept: "application/json",
        }
      })

      const data = await response.json()
      console.log(data)
      
    }

      const handleDelete = async () => {

     

      const response = await fetch(BASE_URL+'magazine/article/' + url ,{

        method:'DELETE',
        
        headers:{
          'Authorization': 'Bearer '+ token,
          Accept: "application/json",
        }
      })

      const data = await response.json()
      console.log(data)
      
    }
  



  return (


    <div className={styles.container}>
      
  

      <a href = {HOME}>
        <img src= "https://da4czav-3sl8rsz.s3.amazonaws.com/public/MecenateMagazine4.png" className = {styles.MecenateMagazineLogo}/>
      </a>

      <div className = {styles.contentContainer}>

        <div style = {{ marginBottom: '10px', display: 'flex'}}>

          <TextField  onChange={handleUsername} value = {username} label="username" variant="outlined" />
          <TextField  onChange={handlePassword} value = {password} label="password" variant="outlined" />
           <Button variant="outlined"  onClick = {handleLogin} >
           LOGIN
          </Button>

        </div>
          
        <div className = {styles.createArticleFields}>
          <TextField  onChange={handleTitle} value = {title} label="Title" variant="outlined" />
          <TextField  onChange={handleSubtitle} value = {subtitle} label="subtitle" variant="outlined" />
          <TextField  onChange={handleAuthor} value = {author} label="author" variant="outlined" />
          <TextField  onChange={handleDate} value = {date} label="date" variant="outlined" />
          <TextField  onChange={handleSection} value = {section} label="Section" variant="outlined" />
          <TextField  onChange={handleSubsection} value = {subsection} label="subsection" variant="outlined" />
          <TextField  onChange={handleFormat} value = {format} label="format" variant="outlined" />
          <TextField  onChange={handleUrl} value = {url} label="URL" variant="outlined" />
        </div>

        <div style={{marginBottom:'30px'}}>
           <input type="file" accept="image/*" onChange={handleImageChange} id={'imageN'} style={{display: "none"}}/> 


                  <label htmlFor={'imageN'}>


                     <Button variant="outlined" component="span" >
                          add picture
                       </Button>


                  </label>

            <img src= {imgURL} style={{height: '300px', marginLeft:'20px'}}/>     
          </div> 

          <Button variant="outlined" color = 'error' onClick = {handleDelete} >
           Delete article
          </Button>



          <SunEditor setContents = {editorContent}  onChange = {handleEditorChange} disable = {false} hideToolbar = {false} 



          setOptions={{

                  mode: 'classic',
            
                  buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['paragraphStyle', 'blockquote'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['fontColor', 'hiliteColor', 'textStyle'],
                ['removeFormat'],
                '/', // Line break
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'lineHeight'],
                ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                ['fullScreen', 'showBlocks', 'codeView'],
                ['preview', 'print'],
                ['save', 'template'],
                /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
                ]
           }}/>

              <div dangerouslySetInnerHTML={{ __html: editorContent }} />




          <Button variant = 'outlined' onClick ={submitArticle}> Submit </Button>

        </div>

    </div>


  );
}
