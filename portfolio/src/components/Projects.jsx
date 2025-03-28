import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {  useRef } from 'react'
//import sticker from "../assets/smileyface.jpeg"

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


  {
    nom : "I not Hungry",
    note : "Projet perso",
    description : "Générer des recettes grâce à des emojis ou des photos du frigo",
    photos : [""],
    lien : ""
  },
  

  {
    nom : "Finaily AI ",
    note : "Projet perso",
    description : "Trouver des offres d'emplois adapté à votre profil grâce à l'IA",
    photos : [""],
    lien : ""
  },
  


]
const Projects = () => {

  gsap.registerPlugin(ScrollTrigger);

  const mainRef = useRef(null);
  const projectContainerRef = useRef(null);
  const openingTextRef = useRef(null);


   useGSAP(()=>{
    let sections = gsap.utils.toArray(".panel");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: projectContainerRef.current,
            start: "top 0%",
            end: "bottom 50%",
            scrub: true,
          }
      });

      tl.to(openingTextRef.current ,
        {
          
        }
      )

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
    
    <div id="projects" ref={mainRef} className='h-screen w-screen flex'>
      <div ref={projectContainerRef} className='flex h-fit  w-fit'>

      <div className='panel text-center flex  h-screen w-screen  items-center justify-center'>
       { /*< img src={sticker} alt="sticker"/> */}
          <h1 ref={openingTextRef} className=' font-bold text-5xl'>Hey, regarde un peu ce que je fais ! </h1>
        </div>

        {
          
          projectsList.map((project, i) =>{
            return(
            <div key={i} className='panel h-screen w-screen flex flex-col'>
              {/*Title */}
              <div className=' text-end '>
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
