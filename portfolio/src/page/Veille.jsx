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
import atlas from "../assets/robots/atlas.jpg";
import figure from "../assets/robots/figure02.jpg";
import gr2 from "../assets/robots/gr2.jpg";
import neo from "../assets/robots/onex.jpeg";
import optimus from "../assets/robots/optimus.jpeg";

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
      scale: 90,
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
      <div>
           <BlockBg/>
         </div>
        
      {/*pc(ordinateur) seulement*/}
      <div className='h-screen w-screen relative md:block hidden  overflow-y-visible'>
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
        <div className='relative h-fit w-screen pb-80 flex flex-col gap-10 justify-center overflow-x-hidden bg-black  text-white'>


        <div className='bg-black -z-10 h-screen w-screen absolute'> {/*background */}</div>  

           {/*vidéo d'intro */}
             <div className='flex flex-col relative h-screen w-screen'>

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

              </div>

             {/*Description de la veille*/}
              <div className='text-center lg:pt-0 pt-20 lg:p-40  font-mono '>
                <Reveal>
                  <p>
                    Les avancées récentes dans la robotique, notamment avec les robots humanoïdes comme Figure et Optimus de Tesla, marquent un tournant majeur dans l'intégration de l'intelligence artificielle et de la robotique dans nos vies quotidiennes. Ces technologies promettent de transformer non seulement l'industrie, mais aussi nos maisons intelligentes de demain.
                  </p>
                </Reveal>
       
              </div>
          
              {/*présentation de optimus */}
              <div className='h-screen w-screen text-white pb-10'>
              </div>
         

                {/*plus d'articles */}
                <div className='text-white z-40 '>
                  <div className='flex flex-col gap-10 '>

                    <div className='lg:ps-20 px-5'>
                        <h1 className=' lg:text-7xl text-4xl z-50 font-bold lg:w-5/6 lg:pt-0 pt-10'>Les robots humanoïde transforme <HighlighterAnimation texte={"notre avenir !"} color='#ad03fc' opacity={1}/></h1>
                        <span className='font-bold text-4xl font-pixelify '>🤖 🦾</span>
                    </div>
                  
                    <Reveal>
                      <div className=' lg:ps-20 px-5'>
                        <span className='text-xl font-mono'>Les maisons intelligentes évoluent à toute vitesse, rendant nos foyers plus confortables, plus sûrs et plus  <span className='text-black'><HighlighterAnimation texte={"éco-friendly"} color='#8ffc00' opacity={1}/></span> grâce aux nouvelles technologies !</span>
                      </div>
                    </Reveal>

                  {/*section IOT*/}

                      <section className='relative h-fit w-screen'>

                          <div className='bg-black -z-10 h-screen w-screen absolute'> {/*background */}</div>
                            <div className='grid md:grid-cols-3 grid-cols-1 h-fit w-screen pt-16 px-5'>        
                                    {/*listes d'articles */}
                                    {
                                      robotNews.map((news, i) => {
                                        return( 
                                        <div
                                          key={i}
                                          className={`block ${i > 2 && window.innerWidth > 768 ? "-mt-30":"mt-4"} p-6 h-fit  text-gray-900 bg-white border rounded-lg shadow-sm hover:bg-${ colorsTailwind[i % colorsTailwind.length]} transition-all hover:-translate-y-10`}
                                        >
                                          <h1 className={`mb-2 text-2xl font-bold tracking-tight text-${ colorsTailwind[i % colorsTailwind.length]} `}>{news.nom}</h1>
                                          <p className="font-normal font-mono pb-10">{news.description}</p>
                                          <hr className='pt-4'/>
                                          <a
                                            href={news.lien}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`font-black  hover:text-indigo-600`}
                                          >
                                            Lire plus
                                          </a>
                                        </div>
                                        )
                                      })
                                    }
                              </div> 
                      </section>


                    {/*section IOT */}
                    {/*Écologie et innovation*/}
                    {/*Sécurité et vie privée : des enjeux majeurs */}

                  </div>
                </div>

          </div>   
      </ChangeNavColor>
      </div>

  )
}

export default Veille