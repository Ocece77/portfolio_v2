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
import ChangeNavColor from '../context/ChangeNavColor';

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
            end: `+=2000`,
            }
    });
   }, [])

  return (
    
    <>
      {/*première page - pc only */}
      <div className='h-screen w-screen relative md:block hidden z-999'>
        <div className='h-[300vh] z-999'>
            <GravityBox texte={"Hey, regarde un peu ce que j'ai fait !"} groundRemover={window.innerHeight + 50}/>
          </div>
        </div>

  
        {/*tablette/pc */}
        <div id="projects" ref={mainRef} className='md:block hidden h-screen w-screen bg-neutral-950 text-white '>
          <div ref={projectContainerRef} className='flex w-fit h-fit gap-20'>

                {/*Panel de projet pc/tablet*/}
                <h1 className='absolute left-10 top-50 z-1 animate-pulse font-mono text-[] md:text-[12px]'>[clique <br/> n'importe où.]</h1>

                <Stickers/>
                {      
                  projectsList.map((project, i) =>{
                    return(
                    <div key={i} className='panel h-screen w-150 flex flex-col items-center justify-center px-10'>
                      <div className='grid grid-cols-1 w-full h-150 justify-center'>
                            {/*Title */}
                            <div className='z-1000'>
                              <h1 className='text-5xl font-bold'>{project.nom}</h1>
                              <a  className="text-[12px] font-mono -mt-1.5 hover:opacity-40 hover:underline transition-all w-fit z-1000" href={project.lien} target="_blank">[ Clique ici pour voir le projet ]</a>
                            </div>

                            {/*Image */}
                            <div className=''>
                              <img src={project.image} alt={project.nom} className='object-cover rounded-xl w-full h-50' />
                            </div>

                            {/*Titre & description  */}
                            <div className='flex flex-col gap-5'>
                              <p className='font-mono text-[12px] text-neutral-400'>{project.description}</p>
                                <div className='flex gap-4'>
                                    {
                                      project.tech.map((techName , i)=>{
                                        return(
                                          <div key={i} className="px-2 py-1 border border-white text-[10px] uppercase h-fit">
                                            <p>{techName}</p>
                                            </div>
                                        )
                                      })
                                    }
                              </div>
                              <p className={`font-mono text-[12px] w-fit text-black rounded p-2 ${project.colorBg} h-fit`}>{project.note}</p>
                            </div>
                      </div>
                    </div>)
          
                  })
                }
          </div>
        </div>

         {/*mobile*/}
         <div id="projects" className='grid grid-cols-1 md:hidden h-fit w-screen bg-neutral-950 text-white z-99'>
          <div className='grid grid-cols-1 w-fit h-fit gap-10'>

                {      
                  projectsList.map((project, i) =>{
                    return(
                    <div key={i} className='h-screen w-screen flex flex-col items-center justify-center px-10'>
                      <div className='grid grid-cols-1 w-full h-150 justify-center'>
                            {/*Title */}
                            <div>
                              <h1 className='text-3xl font-bold'>{project.nom}</h1>
                              <a  className="text-[8px] font-mono -mt-1.5 hover:opacity-40 hover:underline transition-all w-fit " href={project.lien} target="_blank">[ Clique ici pour voir le projet ]</a>
                            </div>

                            {/*Image */}
                            <div >
                              <img src={project.image} alt={project.nom} className='object-cover rounded-xl w-screen h-50' />
                            </div>

                            {/*Titre & description  */}
                            <div className='flex flex-col gap-5'>
                              <p className='font-mono text-[12px] text-neutral-400'>{project.description}</p>
                                <div className='grid gap-4'>
                                    {
                                      project.tech.map((techName , i)=>{
                                        return(
                                          <div key={i} className="px-2 py-1 border border-white text-[10px] uppercase h-fit">
                                            <p>{techName}</p>
                                            </div>
                                        )
                                      })
                                    }
                              </div>
                              <p className={`font-mono text-[12px] w-fit text-black rounded p-2 ${project.colorBg} h-fit`}>{project.note}</p>
                            </div>
                      </div>
                    </div>)
          
                  })
                }
          </div>
        </div>
      
    </>


  )
}

export default Projects
