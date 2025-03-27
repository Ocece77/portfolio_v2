import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {  useRef } from 'react'


const projectsList =  [
  {
    nom : "ParApple Games ",
    note : "Participation Swift Student Challenge 2025",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    photos : [""],
    lien : ""
  },

  {
    nom : "Pokédex ",
    note : "Collaboration avec Ya Kelly",
    description : "Application web répertoriant les 100 premiers pokémons",
    photos : [""],
    lien : "https://ocece77.github.io/Pokedex-online/"
  },
  

  {
    nom : "TODO App",
    note : "Projet perso",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    photos : [""],
    lien : "https://todo-list-app-1-0wsu.onrender.com"
  },
  

  {
    nom : "Flynanga App ",
    note : "Pour Flynanga",
    description : "Site vitrine de flynanga",
    photos : [""],
    lien : ""
  },
  


]
const Projects = () => {

  gsap.registerPlugin(ScrollTrigger);

  const mainRef = useRef(null);
  const projectContainerRef = useRef(null);


   useGSAP(()=>{
    let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, { 
        xPercent: -100 * (sections.length - 1),
        ease: "none",
          scrollTrigger: {
            trigger: projectContainerRef.current,
            pin: mainRef.current,
            pinSpacing: true,
            scrub: 1,
            end: "+=3000",
            }

    });


   }, [])

  return (
    <div ref={mainRef} className='h-screen w-screen flex'>

      <div ref={projectContainerRef} className='flex h-fit  w-fit'>

        {
          projectsList.map((project, i) =>{
            return(
            <div key={i} className='panel h-screen w-screen flex flex-col'>
              {/*Title */}
              <div className=' text-end'>
                 <h1 className='text-[5em] font-bold'>{project.nom}</h1>
              </div>
              {/*Image */}
              <div>

              </div>

              {/*Image */}
              <div className='absolute bottom-10 flex w-full items-end px-10 justify-between'>
                <p className='font-mono text-sm w-1/3'>{project.description}</p>
                <p className='font-mono text-sm w-1/5'>{project.note}</p>

              </div>
            </div>)
  
          })
        }
          


      
      </div>

    </div>
  )
}

export default Projects
