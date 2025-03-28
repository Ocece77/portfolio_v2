import React, { useRef } from 'react'
import { Link } from 'react-router';
import Reveal from '../utils/Reveal.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const navElement = {
  "/intership" : "Mon Stage" ,
  "/veille" : "Ma Veille" ,
}




const Navbar = () => {

   const navRef = useRef(null);

  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = React.useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  setTimeout(()=> {
    navRef.current.classList.add("z-9999")
    navRef.current.classList.remove("z-110");
  }, 2000)
  
  

  return (
    /*Nav */

     <nav ref={navRef} className='fixed inset-x-0  w-full h-15 font-mono bg-transparent z-110 text-gray-900  '>
      <div className=' h-full w-full'>
        <div className='flex h-full justify-evenly items-center'>
         {/*Logo */}
         <div>
           <a href="/" className='font-black lg:text-4xl text-2xl'>OK.</a>
         </div>

          {/*nav element */}
          <div className='lg:flex justify-around text-[12px] gap-5 ps-15  hidden'>
            {
              Object.entries(navElement).map(([key, value]) => {
               return (
                   <Link className='hover:text-yellow-500 transition-all' key={key} to={key}>{value}</Link>
              )
              })
            }
              <a href="#projects" className='hover:text-yellow-500 transition-all'>Mes Projets</a>
          </div>

         {/*Localisation */}
         <div>
           <p className='text-[12px] font-semibold'>France [{currentTime}]</p>
         </div>

         <div className='lg:hidden block'>
           <FontAwesomeIcon icon={faBarsStaggered}  />
         </div>



        </div>
      </div>
    </nav>


  )
}

export default Navbar;