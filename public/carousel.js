import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "../styles/Home.module.css";
import Button,  { ButtonProps }  from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const BootstrapButton = styled(Button)({

  fontSize: '15px;',
  fontWeight: '300',

  '&:hover': {
    /*backgroundColor: 'rgba(174,26,22,.05);',*/
    backgroundColor: 'rgba(0,0,0,0.05);',
    color: 'rgba(212,0,0,1)',
    borderColor: '#0062cc',
    boxShadow: 'none',
    fontWeight: '500',
  },

  
  
});

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef();

  /*--------------------
  SETTINGS
  --------------------*/
  const settings = {
    maxItems: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000
  };

  /*--------------------
  METODI
  --------------------*/
  /* Go To */
  const goTo = useCallback(
    index => {
      if (!isAnimating) {
        setCurrentIndex(index);
        setIsAnimating(true);

        setTimeout(() => {
          setIsAnimating(false);
        }, settings.speed);
      }
    },
    [isAnimating, currentIndex]
  );

  /* Go Next */
  const goNext = () => {
    goTo(currentIndex >= settings.maxItems - 1 ? 0 : currentIndex + 1);
  };

  /* Go Prev */
  const goPrev = () => {
    goTo(currentIndex <= 0 ? settings.maxItems - 1 : currentIndex - 1);
  };

  /* Play Timer */
  const playTimer = () => {
    console.log("play Timer");
    setActiveAutoplay(true);
  };

  /* Pause Timer */
  const pauseTimer = () => {
    console.log("pause Timer");
    setActiveAutoplay(false);
  };

  /*--------------------
  HOOKS
  --------------------*/
  useEffect(() => {
    if (settings.autoplay && activeAutoplay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        goNext();
      }, settings.autoplaySpeed);
    }
  }, [currentIndex, activeAutoplay, isAnimating]);

  /*--------------------
  COMPONENTI
  --------------------*/
  /* Next Btn */
  const nextBtn = () => {
    return (
      <button
        className="next"
        onMouseEnter={pauseTimer}
        onMouseLeave={playTimer}
        onClick={() => goNext()}
      >
        next
      </button>
    );
  };

  /* Prev Btn */
  const prevBtn = () => {
    return (
      <button
        className="prev"
        onMouseEnter={pauseTimer}
        onMouseLeave={playTimer}
        onClick={() => goPrev()}
      >
        prev
      </button>
    );
  };

  /* Dots */
  const dots = () => {
    const totalItems = Array.apply(null, Array(settings.maxItems));
    const dotsButtons = totalItems.map((item, index) => {
      return (
        <button
          className="dot"
          key={index.toString()}
          onMouseEnter={pauseTimer}
          onMouseLeave={playTimer}
          onClick={() => goTo(index)}
        >
          {index + 1}
        </button>
      );
    });
    return <div className="dots">{dotsButtons}</div>;
  };

  /* Pagination */
  const pagination = index => {
    return (
      <div className="pagination">
        {index + 1}/{settings.maxItems}
      </div>
    );
  };

  /* Slide */
  const slide = index => {
    return <div className = {styles.CarouselSlide}>{image}</div>;
  };

  
  let title_1 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(0)} className={styles.CarouselTitle}> COMMISSIONS</BootstrapButton>
  let title_2 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(1)} className={styles.CarouselTitle} >SHOP</BootstrapButton>
  let title_3 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(2)} className={styles.CarouselTitle} >ARTISTS</BootstrapButton>
  let title_4 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(3)} className={styles.CarouselTitle} >COLLECTORS </BootstrapButton>
  let title_5 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(4)} className={styles.CarouselTitle} >NEWS</BootstrapButton>

  let image = <div></div>

  let description = <div></div>
  
  
  if (currentIndex == 0){

    title_1 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(0)} className={styles.CarouselTitleBold}> COMMISSIONS</BootstrapButton>

    image = <div className={styles.CarouselImage1}> </div>

   
    description = <div className={styles.CarouselDescription}> 
                     
                     <div className={styles.CarouselDescriptionTitle}> COMMISSIONS </div> 
                     Find the artist you love and commission the artwork you have ever dreamed  
                  </div>
  } 

  if (currentIndex == 1){

    title_2 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(1)} className={styles.CarouselTitleBold}>SHOP</BootstrapButton>
    image = <div className={styles.CarouselImage2}> </div>
    description = <div className={styles.CarouselDescription}>
                  
                  <div className={styles.CarouselDescriptionTitle}>   SHOP </div> 
                   Buy from our excusive selection of paintings, sculptures, and prints  
                   </div>
 } 

 if (currentIndex == 2){

  title_3 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(2)} className={styles.CarouselTitleBold}>ARTISTS</BootstrapButton>
  image = <div className={styles.CarouselImage3}> </div>
  description = <div className={styles.CarouselDescription}> 
                  
                  <div className={styles.CarouselDescriptionTitle}> ARTISTS   </div> 
                     
                  Discover all the Artists of artMecenate  </div>
} 

if (currentIndex == 3){

  title_4 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(3)} className={styles.CarouselTitleBold}>COLLECTORS</BootstrapButton>
  image = <div className={styles.CarouselImage4}> </div>
  description = <div className={styles.CarouselDescription}> 
                <div className={styles.CarouselDescriptionTitle}> COLLECTORS   </div> 
                Discover all the Collectors of artMecenate, their collections, interests, and much more!  </div>
} 

if (currentIndex == 4){

  title_5 = <BootstrapButton disableRipple onMouseEnter={pauseTimer} onMouseLeave={playTimer} onClick={() => goTo(4)} className={styles.CarouselTitleBold}>NEWS</BootstrapButton>
  image = <div className={styles.CarouselImage5}> </div>
  description = <div className={styles.CarouselDescription}> 
                <div className={styles.CarouselDescriptionTitle}>  NEWS</div> 
                Stay always updated on the artworld and the world of artMecenate  </div>
} 
  /*--------------------
  RENDERING
  --------------------*/
  return (
    <div className = {styles.CarouselContainer}>
       
      <div className = {styles.CarouselTitleContainer}> 
        {title_1}
        {title_2}
        {title_3}
        {title_4}
        {title_5}
      </div> 

      {slide(currentIndex)}
      
      <div className={styles.CarouselDescriptionContainer}>

        
        {description}
        
      </div>
    
    </div>
  );
};

export default Slider;
