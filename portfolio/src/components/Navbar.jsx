import React, { useRef } from 'react'
import { Link } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const navElement = {
  "/veille" : "Ma Veille" ,
  "/btssio" : "Le BTS SIO" ,
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

  

  return (
    /*Nav */

     <nav ref={navRef} className='fixed inset-x-0  w-full h-15 font-mono bg-transparent z-98 text-gray-900  '>
      <div className='h-full w-full'>
        <div className='flex h-full lg:justify-evenly justify-between lg:px-0 px-2.5 items-center'>

         {/*Logo */}
         <div>
           <a href="/" className='font-black lg:text-4xl text-2xl'>OK.</a>
         </div>

          {/*nav element */}
          <div className='flex justify-around text-[8px] lg:text-[12px] lg:gap-5 gap-2 lg:ps-15  '>
          <a href="/#projects" className='hover:text-yellow-500 transition-all'>Mes Projets</a>
            {
              Object.entries(navElement).map(([key, value]) => {
               return (
                   <Link className='hover:text-yellow-500 transition-all' key={key} to={key}>{value}</Link>
              )
              })
            }
          </div>

         {/*Localisation */}
         <div>
           <p className='text-[8px] lg:text-[12px] font-semibold'>France <br/> [{currentTime}]</p>
         </div>


        </div>
      </div>
    </nav>


  )
}

export default Navbar;