import React, { useEffect , useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion , useInView , useAnimation } from 'framer-motion'
import PropTypes from 'prop-types';


//Reveal animation
// eslint-disable-next-line no-unused-vars
const Reveal = ({children , width = "fit-content" , delay = 1}) => {
  
  const revealRef = useRef(null);
  const isInView = useInView(revealRef,  {once : true}) // once true afin que l'animation agit qu'une seule fois
  const mainControls = useAnimation();

  useEffect(()=>{
   if (isInView){
   mainControls.start("visible")
   }
  }, [isInView, mainControls])
  return (
    <div ref={revealRef} className='relative overflow-hidden h-fit'>
      <motion.div
      variants={{
        hidden : { translateY: -400}, /*En dehors de l'écran  */
        visible : { translateY: 0, }/* Visible sur l'écran  */
      }}
      initial = "hidden" //map les key de la variant
      animate = {mainControls}
      transition={{duration: .5 , delay : delay }}
      >
        {children}
        
        </motion.div>
    </div>
  )
}

Reveal.propTypes = {
  children : PropTypes.string,
  width : PropTypes.string,
  delay : PropTypes.string
}

export default Reveal;