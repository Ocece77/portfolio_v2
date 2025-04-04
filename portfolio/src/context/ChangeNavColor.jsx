import React, { useContext, useEffect , useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion , useInView , useAnimation } from 'framer-motion'
import PropTypes from 'prop-types';
import { NavContext } from './NavProvider';


//ChangeNavColor animation
// eslint-disable-next-line no-unused-vars
const ChangeNavColor = ({children}) => {
  const { onDarkBg, toggleColor } = useContext(NavContext);
  const changeNavColorRef = useRef(null);
  const isInView = useInView(changeNavColorRef,  {once : false}) // once false afin que l'animation agit  plusieurs fois

  useEffect(()=>{

   if (isInView){
    toggleColor(!onDarkBg)
   } else {
    toggleColor(!onDarkBg); // Quand l'élément sort de la vue
   }
  }, [isInView])
  return (
    <div ref={changeNavColorRef} className='h-fit w-fit'>
        {children}
    </div>
  )
}

ChangeNavColor.propTypes = {
  children : PropTypes.string,
}

export default ChangeNavColor;