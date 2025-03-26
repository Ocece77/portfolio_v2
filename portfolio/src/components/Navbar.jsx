import React from 'react'
import { Link } from 'react-router';


const navElement = {
  "/intership" : "Mon Stage" ,
  "/veille" : "Veille" ,
  "/projectpage" : "Project" ,
}




const Navbar = () => {

  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = React.useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 1000);
  
  

  return (
    /*Nav */
    <nav className='fixed inset-x-0  w-full h-15 font-mono  '>
      <div className=' h-full w-full'>
        <div className='flex h-full justify-evenly items-center'>
         {/*Logo */}
         <div>
           <Link to="/" className='font-black lg:text-4xl text-2xl'>OK.</Link>
         </div>

          {/*nav element */}
          <div className='flex justify-around text-sm gap-5 ps-15'>
            {
              Object.entries(navElement).map(([key, value]) => {
               return <Link className='hover:text-yellow-500 transition-all' key={key} to={key}>{value}</Link>
              })
            }
          </div>

         {/*Localisation */}
         <div>
           <p className='text-sm'>France [{currentTime}]</p>
         </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;