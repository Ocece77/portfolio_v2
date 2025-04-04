import React, { useContext } from 'react'
import Reveal from '../utils/Reveal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import sticker1 from "../assets/smileysticker.png";
import { NavContext } from '../context/NavProvider';
import ChangeNavColor from '../context/ChangeNavColor';


const Footer = () =>{
  

  return (

    <ChangeNavColor>
      <div className='h-screen w-screen '>
        {/*Collab texte */}

          <div className='h-screen w-screen border-8 bg-amber-400 flex flex-col justify-center items-center md:px-0 px-5'>
            <Reveal>
              <h1 className='text-[6em] lg:text-[10em] font-bold lg:leading-25 leading-15 h-fit py-15'>
                
                Al<div className='relative lg:w-50 w-30 inline-block lg:-mx-12 -mx-5'>
                  <img src={sticker1} alt="face" className='animate-bounce rounded-xl object-contain w-45 rotate-12 absolute -bottom-10 lg:left-3 -left-1' />
                  </div>
                  rs,
                  <br /> on fait une<span className='underline text-white'> collab </span>?
              </h1>
            </Reveal>

          {/*Liens vers les réseaux socials */}
            <div className='w-full flex lg:flex-row flex-col lg:justify-end lg:px-50 font-mono text-sm lg:gap-10 gap-4 '>
              <Reveal delay={1.2}>
                  <a className='flex gap-2 items-center hover:text-amber-900 transition-all text-sm' href="https://www.linkedin.com/in/oceanekasindu" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      Linkedin
                  </a>
                </Reveal>

                <Reveal delay={1.4}>
                  <a className='flex gap-2 items-center hover:text-amber-900 transition-all text-sm'  href="https://github.com/ocece77" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                      Github
                  </a>
                </Reveal>

                <Reveal delay={1.6}>
                  <a className='flex gap-2 items-center hover:text-amber-900 transition-all text-sm'  href="https://www.instagram.com/lostine196" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                      Instagram
                  </a>
                </Reveal>
              
            </div>

          </div>  

      </div>
    </ChangeNavColor>
  )
}

export default Footer
