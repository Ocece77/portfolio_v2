import React, { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion';
import sticker1 from "../assets/smileysticker.png";


const animationVariants =  {
   initial:{
    opacity: 0
   },
   open: (i) =>({
    opacity:1,
    transition : {duration : 0 , delay : 0.15 * i}
   }) ,
   closed:(i)=>({
    opacity: 0,
    transition : {duration : 0 , delay : 0.15 * i}

   })
}

const PixelTransition = () => {

  const pixelContainerRef = useRef(null);

  const shuffle = (a) =>{
    var j , x , i ;
    for (i = a.length -1; i > 0; i--){
      j = Math.floor(Math.random() * (i+1));
      x = a[i];
      a[i] = a[j]
      a[j] = x;
    }
    return a;
  }


  const getBlocks = ()=>{

    const {innerWidth , innerHeight} = window;
    const bs = innerWidth * .05;
    const amountOfBlocks = Math.ceil( innerHeight / bs)
    const delays = shuffle([...Array(amountOfBlocks)].map((_,i) => i))
    
    return delays.map((rdn, i) =>{
         return (<motion.div 
          key={i} 
          className='block relative' 
          whileInView="closed"
          viewport={{ once: true }}
          variants={animationVariants} 
          initial={'open'} 
          custom={rdn}
          reducemotion="never" 
          >
            <img src={sticker1} alt="sticker smiley" className='absolute -rotate-45 -top-18 -left-40 '/>

          </motion.div>)
    }) 
  }

  setTimeout(()=>{
    pixelContainerRef.current.classList.add("hidden")
  },3000)

  return (
    <div ref={pixelContainerRef} className='fixed top-0 z-9999 w-screen h-screen flex'>
      {
        [...Array(20)].map((_, i)=>{
          return <div key={i} className='column'>
            {
              getBlocks()
            }
          </div>
        })
      }
      
    </div>
  )
}



export default PixelTransition
