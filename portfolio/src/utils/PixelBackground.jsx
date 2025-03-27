import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion';


const animationVariants =  {
   initial:{
    opacity: 0
   },
   open: (i) =>({
    opacity:1,
    transition : {duration : 0 , delay : 0.2 * i}
   }) ,
   closed:(i)=>({
    opacity: 0,
    transition : {duration : 0 , delay : 0.2 * i}

   })
}

const PixelBackground = () => {

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
          className='block' 
          whileInView="closed"
          viewport={{ once: true }}
          variants={animationVariants} 
          initial={'open'} 
          custom={rdn}
          reducemotion="never" 
          >
          </motion.div>)
    }) 
  }

  return (
    <div className='fixed top-0 z-80 w-screen h-screen flex'>
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

export default PixelBackground
