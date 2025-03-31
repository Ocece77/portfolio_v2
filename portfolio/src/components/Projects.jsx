import React, {  useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineSmiley from '../utils/SplineSmiley';
import Stickers from '../utils/Stickers';
import parapplegamespreviewer from "../assets/projetimage/parapplegameprewiew.jpeg";
import todolistapppreview from "../assets/projetimage/todolistapppreview.jpeg";
import flynangapreview from "../assets/projetimage/flynangapreview.jpeg";
import finailypreview from "../assets/projetimage/finailypreview.jpeg";
import pokedexpreview from "../assets/projetimage/pokedexpreview.jpeg";
import HighlighterAnimation from '../utils/HighlighterAnimation';
import GravityBox from '../utils/GravityBox'

const projectsList =  [
  {
    nom : "ParApple Games ",
    note : "Participation Swift Student Challenge 2025",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    image : parapplegamespreviewer,
    lien : "https://github.com/Ocece77/Parapplegames",
    colorBg : "bg-pink-50",
    colorText : "text-pink-500"

  },

  {
    nom : "Pokédex ",
    note : "Collaboration avec Ya Kelly",
    description : "Application web répertoriant les 100 premiers pokémons",
    image :  pokedexpreview,
    lien : "https://ocece77.github.io/Pokedex-online/",
    colorBg : "bg-sky-100",
        colorText : "text-sky-700"
  },
  

  {
    nom : "TODO App",
    note : "Projet perso",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    image :  todolistapppreview,
    lien : "https://todo-list-app-1-0wsu.onrender.com",
    color : "orange",
    colorBg : "bg-amber-50",
    colorText : "text-amber-500"
  },
  

  {
    nom : "Flynanga App ",
    note : "Pour Flynanga",
    description : "Site vitrine de flynanga",
    image :  flynangapreview,
    lien : "#projects",
    colorBg : "bg-red-50",
    colorText : "text-red-500"
  },


  {
    nom : "I not Hungry",
    note : "Projet perso",
    description : "Générer des recettes grâce à des emojis ou des image du frigo",
    image :  null,
    lien : "#projects",
    colorBg : "bg-sky-50",
    colorText : "text-sky-500"
  },
  

  {
    nom : "Finaily AI",
    note : "Projet perso",
    description : "Trouver des offres d'emplois adapté à votre profil grâce à l'IA",
    image : finailypreview,
    lien : "#projects", 
    colorBg : "bg-purple-50",
    colorText : "text-purple-500"
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
   

        <div className='panel'>
        <GravityBox texte={"Hey, regarde un peu ce que j'ai fait !"} groundRemover={window.innerHeight + 50}/>
          {/* Conteneur principal pour les objets 3D */}
            <div className='flex justify-center items-center w-screen h-screen z-10 '> 
              {/* Objet 3D Spline
              <div  data-depth="0.9" className='absolute z-10  h-screen w-screen  '>
                <SplineSmiley />
              </div> 
           <h1 className='text-[4em] font-bold w-screen'>Hey, <HighlighterAnimation texte={'regarde'} color='#ffb300' /> un peu que j'ai fait !</h1>
              */}

            </div>

         
          </div>

          {/*Panel de projet  */}
            <h1 className='absolute left-10 top-50 z-1 animate-pulse font-mono text-[12px]'>[clique <br/> n'importe où.]</h1>
            {      
              projectsList.map((project, i) =>{
                return(
                <div key={i} className='panel h-screen w-screen flex items-center justify-center bg-white'>
                  <Stickers/>
                  <div className='w-full flex flex-col px-10 gap-3'>
                        {/*Title */}
                        <div className='flex  flex-col  text-end'>
                          <h1 className='lg:text-[4em] text-[3em] font-bold'>{project.nom}</h1>
                          <a  className={`text-[10px] font-mono -mt-1.5 ${project.colorText} hover:opacity-40 transition-all z-100 w-fit`} href={project.lien} target="_blank">[ Clique ici pour voir le projet ]</a>
                        </div>

                        {/*Image */}
                        <div className='flex justify-center lg:h-100 h-80'>
                          <img src={project.image} alt={project.nom} className='w-full object-cover rounded' />
                        </div>

                        {/*Titre & description  */}
                        <div className='flex lg:flex-row flex-col w-full items-end justify-between lg:gap-0 gap-5'>
                          <p className='font-mono text-sm lg:w-1/3 w-full'>{project.description}</p>
                          <p className={`font-mono text-sm lg:w-1/5 w-fit rounded p-2 ${project.colorBg} `}>{project.note}</p>
                        </div>

                        {/*voir le projet btn */}
                        <div className='absolute bottom-10 inset-x-0 w-full flex justify-center'>
                        </div>
                  </div>
                </div>)
      
              })
            }
          

          <div className='panel'></div>



      </div>

    </div>
  )
}

export default Projects
