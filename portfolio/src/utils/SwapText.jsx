import { useGSAP } from '@gsap/react';
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);
const SwapText = ({value }) => {
// font 
  const fontStyles = [
    "font-pixelify",
    "font-workbench",
    "font-rubik",
    "font-bungee",
    "font-meaculpa"
  ];

  const wordRef = useRef(null);

  useGSAP(()=>{
    gsap.to(wordRef,
      {
        duration:2,
        text:{
          value:value
        }
      }
    )
  },[])

  
  return (
    <>
    <h1 ref={wordRef}>{value}</h1> 
    </>
  )
}

SwapText.propTypes = {
  word : PropTypes.string
}

export default SwapText
