import React, {  useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stickers from '../utils/Stickers';
import parapplegamespreviewer from "../assets/projetimage/parapplegamepreview.jpeg";
import todolistapppreview from "../assets/projetimage/todolistapppreview.jpeg";
import flynangapreview from "../assets/projetimage/flynangapreview.jpeg";
import finailypreview from "../assets/projetimage/finailyaipreview.jpeg";
import messagewebapppreview from "../assets/projetimage/messagewebapppreview.jpeg";
import webprojectpreview from "../assets/projetimage/webprojectpreview.jpeg";
import frontendmentorpreview from "../assets/projetimage/frontendmentorpreview.jpeg"
import pokedexpreview from "../assets/projetimage/pokedexpreview.jpeg";
import GravityBox from '../utils/GravityBox'
import HighlighterAnimation from '../utils/HighlighterAnimation';

const projectsList =  [
  {
    nom : "ParApple Games ",
    note : "Participation Swift Student Challenge 2025",
    description : "Application IOS qui fait découvrir les parasport par des jeux utilisant la computer vision",
    image : parapplegamespreviewer,
    lien : "https://github.com/Ocece77/Parapplegames",
    tech : ["SwiftUi" , "Vision Framework", "Machine Learning"], 
    colorBg : "bg-pink-50",
    colorText : "text-pink-500"

  },

  {
    nom : "Pokédex ",
    note : "Collaboration avec Ya Kelly",
    description : "Application web répertoriant les 100 premiers pokémons",
    image :  pokedexpreview,
    lien : "https://ocece77.github.io/Pokedex-online/",
    tech : ["javascript" , "html", "css" , "api"], 
    colorBg : "bg-sky-100",
    colorText : "text-sky-700"
  },
  

  {
    nom : "TODO App",
    note : "Projet perso",
    description : "Application web pour lister ces choses à faire !",
    image :  todolistapppreview,
    lien : "https://todo-list-app-1-0wsu.onrender.com",
    tech : ["Mongo DB" , "Express js", "React js" , "Node js"], 
    colorBg : "bg-amber-50",
    colorText : "text-amber-500"
  },
  

  {
    nom : "Flynanga App",
    note : "Pour Flynanga",
    description : "Site vitrine de flynanga",
    image :  flynangapreview,
    lien : "#projects",
    tech : [ "React js" , "Tailwind css"], 
    colorBg : "bg-red-50",
    colorText : "text-red-500"
  },

  {
    nom : "Finaily AI",
    note : "Projet perso",
    description : "Une super IA optimisant la recherche d'emploi à l'aide du cv ",
    image :  finailypreview,
    lien : "#projects",
    tech : [ "Gemini API" , "Python" , "React js"], 
    colorBg : "bg-amber-50",
    colorText : "text-amber-500"
  },

  {
    nom : "Messagerie web APP",
    note : "Projet perso",
    description : "Envoie n'importe quel message grâce à ce mini tchat en ligne web ",
    image :  messagewebapppreview,
    lien : "https://github.com/Ocece77/message_live_app",
    tech : ["Mongo DB" , "Express js", "React js" , "Node js"], 
    colorBg : "bg-sky-50",
    colorText : "text-sky-500"
  },

  {
    nom : "Mini projets web",
    note : "Projet perso",
    description : "Voici un repo de tout mes minis projets web que j'ai réalisés",
    image :  webprojectpreview,
    lien : "https://github.com/Ocece77/Web-Project",
    tech : [ "html" , "css" , "Typescript" , "JavaScript" ], 
    colorBg : "bg-purple-50",
    colorText : "text-purple-500"
  },

  {
    nom : "FrontEnd Mentor",
    note : "Projet perso",
    description : "Tous les projets front end mentor que j'ai réalisée",
    image :  frontendmentorpreview,
    lien : "https://github.com/Ocece77/Web-Project",
    tech : [ "html" , "css" , "Typescript" , "JavaScript" ], 
    colorBg : "bg-red-50",
    colorText : "text-red-500"
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
            end: '+=3000',
            }
    });
   }, [])

  return (
    
    <>
    <div id="projects" ref={mainRef} className='hidden md:flex  h-screen w-screen'>
      <div ref={projectContainerRef} className='flex w-fit h-fit'>
   
        {/*première page - pc only */}
        <div className='panel lg:block hidden'>
        <GravityBox texte={"Hey, regarde un peu ce que j'ai fait !"} groundRemover={window.innerHeight + 50}/>
          {/* Conteneur principal pour les objets 3D */}
            <div className='w-screen h-screen'> 
            </div>
          </div>

          {/*Panel de projet pc/tablet*/}
            <h1 className='absolute left-10 top-50 z-1 animate-pulse font-mono text-[12px]'>[clique <br/> n'importe où.]</h1>
            {      
              projectsList.map((project, i) =>{
                return(
                <div key={i} className='panel h-screen w-screen md:grid grid-cols-1 grid-flow-row auto-rows-max  hidden items-center justify-center bg-white p-20'>
                  <Stickers/>
                  <div className='w-screen h-screen grid grid-rows-6 px-10 '>
                        {/*Title */}
                        <div className='flex flex-col text-end -pt-40 row-span-1 px-10'>
                          <h1 className='lg:text-[4em] text-[3em] font-bold'>{project.nom}</h1>
                          <a  className={`text-[10px] font-mono -mt-1.5 ${project.colorText} hover:opacity-40 transition-all z-100 w-fit`} href={project.lien} target="_blank">[ Clique ici pour voir le projet ]</a>
                        </div>

                        {/*Image */}
                        <div className='flex justify-center row-span-4'>
                          <img src={project.image} alt={project.nom} className=' object-cover rounded w-screen' />
                        </div>

                        {/*Titre & description  */}
                        <div className='flex lg:flex-row flex-col w-full items-end justify-between lg:gap-0 gap-5 row-span-1 h-1/3'>
                          <p className='font-mono text-sm lg:w-1/3 w-full'>{project.description}</p>
                            <div className='flex gap-4 '>
                          {
                            project.tech.map((techName , i)=>{
                              return(
                                <div key={i} className="px-2 py-2 border border-black text-sm  uppercase">
                                  <p>{techName}</p>
                                  </div>
                              )
                            })
                          }
                          </div>
                          <p className={`font-mono text-sm lg:w-1/5 w-fit rounded p-2 ${project.colorBg}`}>{project.note}</p>
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


 {/*Panel de projet mobile*/}
    <div className='md:hidden flex flex-col  h-fit w-screen'>
         {/* première page - mobile only*/}
         <div className='relative  lg:hidden flex justify-center items-center w-screen'>
            <h1 className='text-4xl font-bold p-10 z-20 text-center'>Hey, regarde un peu ce <HighlighterAnimation texte={"que j'ai fait !"} color='##34e5eb'/> </h1>
          </div>

         
          {      
            projectsList.map((project, i) =>{
              return(
              <div key={i} className=' h-screen w-screen bg-white '>
                <Stickers/>
                <div className='w-full flex flex-col px-10 gap-3'>
                      {/*Title */}
                      <div className='flex flex-col text-end'>
                        <h1 className='lg:text-[4em] text-[3em] font-bold'>{project.nom}</h1>
                        <a  className={`text-[10px] font-mono -mt-1.5 ${project.colorText} hover:opacity-40 transition-all z-100 w-fit`} href={project.lien} target="_blank">[ Clique ici pour voir le projet ]</a>
                      </div>

                      {/*Image */}
                      <div className='flex justify-center '>
                        <img src={project.image} alt={project.nom} className='w-full object-cover rounded ' />
                      </div>

                      {/*Titre & description  */}
                      <div className='flex lg:flex-row flex-col w-full items-end justify-between lg:gap-0 gap-5'>
                        <p className='font-mono text-sm lg:w-1/3 w-full'>{project.description}</p>
                        <div className='flex gap-4'>
                        {
                          project.tech.map((techName , i)=>{
                            return(
                              <div key={i} className="px-2 py-2 border border-black text-sm transition-all">
                                <p>{techName}</p>
                                </div>
                            )
                          })
                        }
                        </div>
                   
                        <p className={`font-mono text-sm lg:w-1/5 w-fit rounded p-2 ${project.colorBg}`}>{project.note}</p>
                      </div>

                      {/*voir le projet btn */}
                      <div className='absolute bottom-10 inset-x-0 w-full flex justify-center'>
                      </div>
                </div>
              </div>
              )
            })
          }
    </div>

    </>


  )
}

export default Projects
