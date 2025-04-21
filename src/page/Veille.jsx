import React, { useContext, useEffect, useRef } from 'react'
import GravityBox from '../utils/GravityBox'
import Background from '../utils/Background'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../utils/Reveal'
import { NavContext } from '../context/NavProvider';
import ChangeNavColor from '../context/ChangeNavColor';
import videoOptimus from "../assets/video/figure_02_video.mp4";
import g1unitree from "../assets/video/video_g1_unitree.mp4";
import neogamma from "../assets/video/video_neo_gamma.mp4";
import atlas from "../assets/video/video_atlas.mp4";

import ImageTrack from '../utils/ImageTrack';

const Veille = () => {

  const { onDarkBg, toggleColor } = useContext(NavContext);
  
  const robotNews = [
    {
      nom: "BMW : la vérité éclate sur l’implication des employés humanoïdes de Figure AI",
      lien: "https://www.01net.com/actualites/bmw-verite-implication-robot-humanoide-figure-ai.html",
      img: "https://www.01net.com/app/uploads/2025/04/figure-ai-robot-humanoide-2025-1360x907.jpg",
       date: "7 avril 2025",
      auteur: "01net"
    },
    {
      nom: "Le robot Figure 02 a appris à marcher comme un humain",
      lien: "https://www.futura-sciences.com/tech/actualites/technologie-robot-figure-02-appris-marcher-comme-humain-120782/",
      img: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/AI_figure%2002.png",
       date: "1 avril 2025",
      auteur: "futura sciences"
    },
    {
      nom: "Vidéo : Figure 02 & autres humanoïdes testés sur le terrain",
      lien: "https://www.youtube.com/watch?v=WoXCHr1IaTM",
      img: "https://i.ytimg.com/vi/WoXCHr1IaTM/maxresdefault.jpg",
      date : "31 Mars 2025",
      auteur: "Figure"
    },
    {
      nom: "La Chine va investir 137 milliards de dollars dans la robotique et les industries de haute technologie, selon l'IFR",
      description: "GR-1 vise les applications médicales et d'assistance avec une démarche dynamique.",
      lien: "https://www.therobotreport.com/china-invests-137b-robotics-high-tech-industries-reports-ifr/",
      img: "https://www.therobotreport.com/wp-content/uploads/2025/03/China_Humanoide_Robot_2025.jpg",
      date : "25 Mars 2025",
      auteur:"therobotreport"
    },
    {
      nom: "Vidéo : Nvidia et la prochaine génération de robots humanoïdes",
      description: "Analyse de l'impact des puces Nvidia sur l'IA embarquée dans les robots humanoïdes de 2025.",
      lien: "https://www.youtube.com/watch?v=RzRpNg2DNjs",
      img: "https://i.ytimg.com/vi/RzRpNg2DNjs/maxresdefault.jpg",
      date : "25 Mars 2025",
      auteur: "CNET Highlights"
    },
    {
      nom: "Vidéo : Tous les robots humanoïdes du GTC de Nvidia",
      lien: "https://www.youtube.com/watch?v=Kbh-K6zrjtk",
      img: "https://i.ytimg.com/vi/Kbh-K6zrjtk/maxresdefault.jpg",
       date: "26 mars 2025",
      auteur: "CNET Highlights"
    },
    {
      nom: "Vidéo : le robot Atlas de Boston Dynamics peut désormais courir et faire la roue comme un humain",
      lien: "https://www.zdnet.fr/actualites/le-robot-atlas-de-boston-dynamics-peut-desormais-courir-et-faire-la-roue-comme-un-humain-408640.htm",
      img: "https://www.zdnet.fr/wp-content/uploads/zdnet/2025/03/atlas-boston-1-750x410.jpg",
       date: "24 mars 2025",
      auteur: "zdnet"
    },
    {
      nom: "Elon Musk veut envoyer son robot humanoïde Optimus sur Mars avant les humains",
      lien: "https://www.futura-sciences.com/sciences/actualites/exploration-martienne-robot-humanoide-tesla-marchera-t-il-mars-avant-humains-120454/",
      img: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/Optimus-Starship-SpaceX-mars-Grok-1.jpg",
      date : "16 Mars 2025",
      auteur: "Figure"
    },
    {
      nom: "« Je connais le Kung-Fu », le robot Unitree se lance dans une impressionnante démonstration",
      lien: "https://www.neozone.org/innovation/je-connais-le-kung-fu-le-robot-unitree-se-lance-dans-une-impressionnante-demonstration/",
      img: "https://www.neozone.org/blog/wp-content/uploads/2025/03/robot-art-martiaux.jpg.webp",
      date : "15 Mar 2025",
      auteur:"neozone"
    },
    {
      nom: "Unitree G1 : un robot humanoïde pressé",
      lien: "https://www.journaldugeek.com/2025/01/25/unitree-g1-un-robot-humanoide-presse/",
      img: "https://www.journaldugeek.com/app/uploads/2025/01/unitree-g1.jpg",
      date : "25 janv 2025",
      auteur: "journaldugeek"
    },
    {
      nom: "Vidéo : Flashbot et robots humanoïdes en action",
      lien: "https://www.youtube.com/watch?v=s4ET7Vn3nz4",
      img: "https://i.ytimg.com/vi/s4ET7Vn3nz4/maxresdefault.jpg",
      date : "10 Jan 2025",
      auteur: "IGN"
    },
    {
      nom: "Présentation de FlashBot Arm : Robot de service semi-humanoïde à intelligence artificielle intégrée",
      lien: "https://www.youtube.com/watch?v=WvhUxlcuZAI",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKD88cl6rVYSWeP9LdW2MYQNDgu9dNSbBGgQ&s",
      date : "19 Déc 2024",
      auteur : "Pudu robotics"
    },
    {
      nom: "Tesla est prêt à utiliser des robots humanoïdes pour produire ses voitures électriques",
      lien: "https://fr.motor1.com/news/713451/tesla-robots-humanoides-produire-ve/",
      img: "https://images.frandroid.com/wp-content/uploads/2023/12/tesla-optimus.jpg",
      date : "25 Mars 2024",
      auteur : "motor1"
    },

  ];
  
  
  
  const veilleTitreRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger : veilleTitreRef.current,
        scrub : 1,
        pin:true,
      }
    })

    tl.to(".titre" , {
      scale: 100,
      xPercent : -120,
      transformOrigin: "50% 50%"
    })

  },[]);

  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      if (window.innerWidth < 768){
        toggleColor(true)
      } else{
        toggleColor(false)
      }
    })
  },[onDarkBg])
  
  return (
    <div>

      {/*background*/}
         <div>
           <Background/>
         </div>
        
      {/*pc(ordinateur) seulement*/}
      <div className='h-screen w-screen relative md:block hidden overflow-y-visible overflow-x-hidden'>
        <div className='h-[300vh]'>
         <GravityBox texte={"Ma Veille technologique"}/>
        </div>
      </div>

      
       {/*deuxième page - titre de la veille*/}
      <div ref={veilleTitreRef} className='h-screen w-screen bg-transparent md:flex hidden justify-center items-center -z-20 overflow-x-hidden'>
         <h1 className='titre font-bold lg:text-8xl text-6xl'>Les Robots Humanoïdes</h1>
      </div>

       {/*troisième page - contenue de la veille*/}
       <ChangeNavColor>
        <div className='h-fit w-screen pb-80 flex flex-col justify-center overflow-x-hidden bg-black text-white md:-mt-100'>

                {/*titre de la page - mobile seulement */}
                <div className='md:hidden flex px-5 justify-center text-center pt-10 w-full '>
                      <h1 className='text-5xl font-black py-10'>Ma Veille technologique</h1>
                  </div>

           {/*vidéo d'intro */}
             <section className='flex flex-col relative h-screen w-screen'>
                    
                {/*vidéo */}
                <video autoPlay loop muted preload="auto" className='w-screen lg:absolute h-screen inset-x-0 top-0 pointer-events-none' playsInline={true} >
                    <source src={videoOptimus} type="video/mp4"/>
                </video>

                 {/*Titre du thème de la veille*/}
                  <div className='lg:absolute  lg:bottom-80 lg:z-20 px-10 md:w-screen flex justify-center'>
                    <h1 className='lg:text-6xl text-3xl font-bold lg:-mt-0 '>
                      Les Robots Humanoïdes de Demain : <br/> 
                    <span className="font-medium">À la Conquête de Notre Vie Quotidienne</span>
                    </h1>
                </div>

              </section>

             {/*Description de la veille*/}
              <section className='h-fit items-center justify-center md:text-center md:text-base text-sm font-mono px-10 md:px-40 py-20'>
                <Reveal>
                  <p>
                    Les avancées récentes dans la robotique, notamment avec les robots humanoïdes comme Figure et Optimus de Tesla, marquent un tournant majeur dans l'intégration de l'intelligence artificielle et de la robotique dans nos vies quotidiennes. Ces technologies promettent de transformer non seulement l'industrie, mais aussi nos maisons intelligentes de demain.
                  </p>
                </Reveal>
              </section>
          
              {/*Image de robots */}
              <section className='md:block hidden'>
                <ImageTrack/>
              </section>

              {/*News récents*/}
                <section className='h-fit w-screen bg-black md:p-20 p-3'>
                  {/*Titre de la section */}
                  <div>
                    <h1 className='font-pixelify text-7xl'>
                     Les dernières news
                    </h1>
                  </div>
                  
                 {/*news */}
                  <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-center'>
                    
                    {/* côté gauche*/}
                    <div className='relative md:h-screen h-fit' >

                      <a href="https://sciencepost.fr/le-robot-chinois-unitree-g1-un-futur-maitre-de-kung-fu/"
                       className='absolute transition-all font-bold text-white inset-0 md:h-screen flex items-center justify-center opacity-0 hover:opacity-80 bg-zinc-800  z-30'
                       referrerPolicy="no-referrer">
                        en savoir plus
                        </a>

                      <video autoPlay loop muted preload="auto" className='md:h-screen pointer-events-none rounded-xl object-cover p-5' playsInline={true} >
                          <source src={g1unitree} type="video/mp4"/>
                      </video>

                      
                      <div className='absolute md:bottom-20 bottom-10 left-10 w-2/3'>
                            <p className=' md:text-4xl text-md'>Le robot chinois Unitree G1, un futur maître de kung-fu ?</p>
                            <p className='text-sm'>27 mars 2025</p>
                            <p>par sciencepost</p>
                          </div>
                      
                    </div>

                    {/* côté droit*/}
                    <div className='grid grid-cols-1' >
        

                     {/*neo gamma de x1*/}
                      <div className='relative'>

                      <a href="https://www.lesnumeriques.com/intelligence-artificielle/neo-gamma-le-robot-humanoide-de-1x-technologies-qui-reve-de-s-inviter-dans-nos-foyers-n233497.html"
                       className='absolute transition-all font-bold text-white inset-0 h-full flex items-center justify-center opacity-0 hover:opacity-80 bg-zinc-800 z-30'
                       target='_blank' referrerPolicy="no-referrer">
                        en savoir plus
                        </a>

                      <video autoPlay loop muted preload="auto" className=' pointer-events-none object-cover p-5' playsInline={true} >
                              <source src={neogamma} type="video/mp4"/>
                          </video>

                                
                      <div className='absolute md:bottom-20 bottom-10  left-10 w-2/3'>
                            <p className=' md:text-4xl text-xl'>NEO Gamma, le robot IA de 1X Technologies, va-t-il bientôt s’inviter dans votre maison ?</p>
                            <p className='text-sm'>25 mars 2025</p>
                            <p>par lesnumeriques</p>

                          </div>
                      
                      </div>


                     {/*atlas de boston dynamics*/}
                      <div className='relative'>

                      <a href="https://www.lesnumeriques.com/intelligence-artificielle/neo-gamma-le-robot-humanoide-de-1x-technologies-qui-reve-de-s-inviter-dans-nos-foyers-n233497.html"
                       className='absolute transition-all font-bold text-white inset-0 h-full flex items-center justify-center opacity-0 hover:opacity-80 bg-zinc-800 z-30'
                       target='_blank' 
                       referrerPolicy="no-referrer">
                        en savoir plus
                        </a>

                      <video autoPlay loop muted preload="auto" className='pointer-events-none object-cover p-5' playsInline={true} >
                              <source src={atlas} type="video/mp4"/>
                          </video>

                                
                      <div className='absolute md:bottom-20 bottom-10 left-10 w-2/3'>
                            <p className=' md:text-4xl text-xl'> Boston Dynamics montre les nouvelles capacités acrobatiques de son robot Atlas
                            </p>
                            <p className='text-sm'>20 mars 2025</p>
                            <p>par usine-digitale.fr</p>
                          </div>
                      
                      </div>

                    
                    </div>
                  </div>
                  
                </section>


              {/*Toutes les News  */}
                <section className='md:p-20 p-7 h-fit w-screen bg-black '>
                  {/*Titre de la section */}
                   <div>
                    <h1 className='font-pixelify text-7xl ps-5 pb-16'>
                       Toutes les news
                    </h1>
                  </div>


                  {/*news */}
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
       
                       {
                        robotNews.map((news , i) =>{
                          return(
                                 <div key={i} className='relative'>

                                        <a href={news.lien}
                                        className='absolute transition-all font-bold text-white inset-0 h-full flex items-center justify-center opacity-0 hover:opacity-80 bg-zinc-800 z-30'
                                        target='_blank' referrerPolicy="no-referrer">
                                          en savoir plus
                                          </a>

                                        <img src={news.img} alt={news.nom}  className='h-full w-full opacity-70' />

                                                  
                                        <div className='absolute bottom-5 left-5 w-2/3'>
                                              <p className=' text-sm font-bold'>{news.nom}</p>
                                              <p className='text-sm'>{news.date}</p>
                                              <p>par {news.auteur}</p>
                                            </div>
                                      
                                       </div>
                          )
                        })
                       }
            

                  </div>



                </section>
    

            


          </div>   
      </ChangeNavColor>
      </div>

  )
}

export default Veille