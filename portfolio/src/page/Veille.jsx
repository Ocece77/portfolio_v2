import React, { useContext, useEffect, useRef } from 'react'
import PixelTransition from '../utils/PixelTransition'
import GravityBox from '../utils/GravityBox'
import BlockBg from '../utils/BlockBg'
import HighlighterAnimation from '../utils/HighlighterAnimation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../utils/Reveal'
import { NavContext } from '../context/NavProvider';
import ChangeNavColor from '../context/ChangeNavColor';
import videoOptimus from "../assets/video/figure_02_video.mp4";
import ImageTrack from '../utils/ImageTrack';

const Veille = () => {

  const { onDarkBg, toggleColor } = useContext(NavContext);
  
  const colorsTailwind = [ "sky-200", "green-200", "amber-200", "pink-200" ];
  const robotNews = [
    {
      nom: "Figure améliore la marche de ses robots humanoïdes grâce à l'IA",
      description: "Figure a utilisé l'intelligence artificielle pour rendre la démarche de ses robots plus naturelle, en les entraînant dans des simulateurs physiques.",
      lien: "https://www.livescience.com/technology/robotics/watch-eerie-video-of-army-of-humanoid-robots-marching-naturally-thanks-to-a-major-ai-upgrade"
    },
    {
      nom: "Tesla partage une vidéo montrant l'amélioration de la marche d'Optimus",
      description: "Tesla a publié une vidéo démontrant la marche améliorée de son robot humanoïde Optimus, grâce à des mises à jour récentes.",
      lien: "https://www.teslarati.com/tesla-optimus-improved-walk-update-video/"
    },
    {
      nom: "Tesla annonce la production de masse des robots Optimus pour 2025",
      description: "Tesla prévoit de produire massivement son robot humanoïde Optimus en 2025, avec des objectifs de production ambitieux.",
      lien: "https://finance.yahoo.com/news/teslas-optimus-robots-enter-mass-101736202.html"
    },
    {
      nom: "Figure entamera des tests alpha de son robot humanoïde à domicile en 2025",
      description: "Figure prévoit de débuter des tests alpha de son robot humanoïde dans des environnements domestiques plus tard en 2025.",
      lien: "https://techcrunch.com/2025/02/27/figure-will-start-alpha-testing-its-humanoid-robot-in-the-home-in-2025/"
    },
    {
      nom: "Tesla Bot Gen 3 : Elon Musk présente les dernières mises à jour",
      description: "Elon Musk a révélé les dernières avancées du Tesla Bot Gen 3, mettant en avant des capacités complexes et des améliorations notables.",
      lien: "https://www.youtube.com/watch?v=wWH2Ktqv0o4"
    },
    {
      nom: "Figure annonce BotQ, une installation de fabrication de robots humanoïdes",
      description: "Figure a dévoilé BotQ, une installation dédiée à la production en série de robots humanoïdes, visant à augmenter l'efficacité de fabrication.",
      lien: "https://www.figure.ai/news/botq"
    },
    {
      nom: "Tesla Optimus : aperçu des prototypes et de l'évolution du design",
      description: "Un aperçu détaillé des prototypes du robot Tesla Optimus et de l'évolution de son design au fil des itérations.",
      lien: "https://robotsguide.com/robots/optimus"
    },
    {
      nom: "Figure lève 675 millions de dollars pour accélérer le développement de robots humanoïdes",
      description: "Figure a sécurisé un financement de 675 millions de dollars pour accélérer le développement et la production de ses robots humanoïdes.",
      lien: "https://www.theinformation.com/articles/humanoid-robotics-firm-figure-attracts-39-billion-valuation-and-questions"
    },
    {
      nom: "Tesla Optimus : démonstration des capacités de marche et de manipulation",
      description: "Tesla a démontré les capacités de marche et de manipulation de son robot Optimus, mettant en avant les progrès réalisés.",
      lien: "https://www.youtube.com/watch?v=cMeVqMvA-jw"
    },
    {
      nom: "Figure dévoile Helix, une IA pour une manipulation plus précise des objets",
      description: "Figure a introduit Helix, une intelligence artificielle permettant à ses robots de manipuler avec précision divers objets domestiques.",
      lien: "https://www.figure.ai/news/helix"
    }
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

      {/*page transition*/}
      <PixelTransition /> 

      {/*background*/}
         <div>
           <BlockBg/>
         </div>
        
      {/*pc(ordinateur) seulement*/}
      <div className='h-screen w-screen relative md:block hidden  overflow-y-visible overflow-x-hidden'>
        <div className='h-[200vh]'>
         <GravityBox texte={"Ma Veille technologique"}/>
        </div>
      </div>

      
       {/*deuxième page - titre de la veille*/}
      <div ref={veilleTitreRef} className='h-screen w-screen bg-transparent md:flex hidden justify-center items-center -z-20 overflow-x-hidden'>
         <h1 className='titre font-bold lg:text-8xl text-6xl'>Les Robots Humanoïdes</h1>
      </div>

       {/*troisième page - contenue de la veille*/}
       <ChangeNavColor>
        <div className='h-fit w-screen pb-80 flex flex-col justify-center overflow-x-hidden bg-black text-white -mt-100'>
         
           {/*vidéo d'intro */}
             <section className='flex flex-col relative h-screen w-screen'>

                {/*titre de la page - mobile seulement */}
                <div className='px-5 text-center md:hidden block pt-10'>
                      <h1 className='lg:hidden block text-6xl font-black z-20 py-10'>Ma Veille technologique</h1>
                  </div>
                    
                {/*vidéo */}
                <video autoPlay loop muted preload="auto" className='lg:absolute h-screen inset-x-0 top-0 pointer-events-none' playsInline={true} >
                    <source src={videoOptimus} type="video/mp4"/>
                </video>

                 {/*Titre du thème de la veille*/}
                  <div className='lg:absolute lg:top-80 lg:z-20 px-10 w-fit'>
                    <h1 className='lg:text-6xl text-3xl font-bold lg:-mt-0 '>
                      Les Robots Humanoïdes de Demain : <br/> 
                    <span className="font-medium">À la Conquête de Notre Vie Quotidienne</span>
                    </h1>
                </div>

              </section>

             {/*Description de la veille*/}
              <section className='h-fit  items-center justify-center text-center font-mono px-40 py-20'>
                <Reveal>
                  <p>
                    Les avancées récentes dans la robotique, notamment avec les robots humanoïdes comme Figure et Optimus de Tesla, marquent un tournant majeur dans l'intégration de l'intelligence artificielle et de la robotique dans nos vies quotidiennes. Ces technologies promettent de transformer non seulement l'industrie, mais aussi nos maisons intelligentes de demain.
                  </p>
                </Reveal>
              </section>
          
              {/*Image de robots */}
                <ImageTrack/>

              {/*News récents*/}
                <section className='h-screen w-screen bg-black px-20 py-20'>
                  <div>
                    <h1 className='font-pixelify text-7xl'>
                     Les dernières actus
                    </h1>
                  </div>
                  <div className='grid grid-cols-2'>
              
                    {/*one video __ côté gauche*/}
                    <div className='h-screen' >
                      <video autoPlay loop muted preload="auto" className='h-screen pointer-events-none rounded-xl object-cover p-20' playsInline={true} >
                          <source src={videoOptimus} type="video/mp4"/>
                      </video>
                    </div>

                    {/*2 video __ côté droit*/}
                    <div className='grid grid-cols-1' >
                    <video autoPlay loop muted preload="auto" className=' pointer-events-none rounded-xl object-cover p-20' playsInline={true} >
                          <source src={videoOptimus} type="video/mp4"/>
                      </video>


                      <div className='relative'>
                      <video autoPlay loop muted preload="auto" className=' pointer-events-none rounded-xl object-cover p-20' playsInline={true} >
                              <source src={videoOptimus} type="video/mp4"/>
                          </video>
                          <div className='absolute bottom-5 left-3.5'>
                            <p className='font-pixelify text-sm'>Marche naturelle d'un humanoïde grâce à l'apprentissage par renforcement</p>
                            <p className='text-sm'>March 25, 2025 </p>
                          </div>

                      </div>
                   
                    </div>
                  </div>
                </section>


              {/*Toutes les News  */}
                <section>

                </section>
    

            


          </div>   
      </ChangeNavColor>
      </div>

  )
}

export default Veille