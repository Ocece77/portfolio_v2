import React, {  useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineSmiley from '../utils/SplineSmiley';
import Stickers from '../utils/Stickers';
import parapplegamespreviewer from "../assets/projetimage/parapplegameprewiew.jpeg";
import todolistapppreview from "../assets/projetimage/todolistapppreview.jpeg";
import flynangapreview from "../assets/projetimage/flynangapreview.png";

const projectsList =  [
  {
    nom : "ParApple Games ",
    note : "Participation Swift Student Challenge 2025",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    image : parapplegamespreviewer,
    lien : ""
  },

  {
    nom : "Pokédex ",
    note : "Collaboration avec Ya Kelly",
    description : "Application web répertoriant les 100 premiers pokémons",
    image :  "",
    lien : "https://ocece77.github.io/Pokedex-online/"
  },
  

  {
    nom : "TODO App",
    note : "Projet perso",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    image :  todolistapppreview,
    lien : "https://todo-list-app-1-0wsu.onrender.com"
  },
  

  {
    nom : "Flynanga App ",
    note : "Pour Flynanga",
    description : "Site vitrine de flynanga",
    image :  flynangapreview,
    lien : ""
  },


  {
    nom : "I not Hungry",
    note : "Projet perso",
    description : "Générer des recettes grâce à des emojis ou des image du frigo",
    image :  "",
    lien : ""
  },
  

  {
    nom : "Finaily AI ",
    note : "Projet perso",
    description : "Trouver des offres d'emplois adapté à votre profil grâce à l'IA",
    image : "",
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
    
    <div id="projects" ref={mainRef} className='h-screen w-screen flex'>
      <div ref={projectContainerRef} className='flex h-fit w-fit'>
   

        <div className='panel text-center flex h-screen w-screen items-center justify-center relative'>
          {/* Conteneur principal pour les objets 3D */}
            <div className='relative w-screen h-screen z-10 -bottom-5 md:block hidden'> 
              {/* Objet 3D Spline */}
              <div  data-depth="0.9" className=' absolute z-10  h-screen w-screen  '>
                <SplineSmiley />
              </div>

            </div>

            {/*mobile only */}
            <div className='md:hidden block'>
              <h1 className='text-[3em] font-bold w-screen'>Hey, <span className='underline'> regarde </span>un peu que j'ai fais !</h1>
            </div>


          </div>

        {
          
          projectsList.map((project, i) =>{
            return(
            <div key={i} className='panel h-screen w-screen flex items-center justify-center '>
              <Stickers/>
              <div className='w-full flex flex-col px-10 gap-3'>
                    {/*Title */}
                    <div className='text-end'>
                      <h1 className='lg:text-[4em] text-[3em] font-bold '>{project.nom}</h1>
                    </div>

                    {/*Image */}
                    <div className='flex justify-center lg:h-100 overflow-hidden '>
                    <img src={project.image} alt={project.nom} className='w-full object-cover rounded' />
                    </div>

                    {/*Titre & description  */}
                    <div className='flex lg:flex-row flex-col w-full items-end justify-between  lg:gap-0 gap-5'>
                      <p className='font-mono text-sm lg:w-1/3 w-full'>{project.description}</p>
                      <p className='font-mono text-sm lg:w-1/5 w-full'>{project.note}</p>
                    </div>

                    {/*voir le projet btn */}
                    <div className='absolute bottom-10 inset-x-0 w-full flex justify-center'>
                    </div>
                    
                  

              </div>
 
    
            </div>)
  
          })
        }
          
      </div>

    </div>
  )
}

export default Projects
