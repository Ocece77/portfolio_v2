import React, { useRef, useEffect } from 'react';
import PixelTransition from '../utils/PixelTransition';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoAnimation from '../utils/PhotoAnimation';
import BlockBg from '../utils/BlockBg';
import HighlighterAnimation from '../utils/HighlighterAnimation';
import { Draggable } from 'gsap/Draggable';
import sticker1 from "../assets/emojiquestion.png";
import sticker2 from "../assets/btssioLogo.png";
import sticker3 from "../assets/pcLogo.png";
import sticker4 from "../assets/logo/angularLogo.png";
import sticker5 from "../assets/logo/bootstrapLogo.png";
import sticker6 from "../assets/logo/clogo.png";
import sticker7 from "../assets/logo/csharpLogo.png";
import sticker8 from "../assets/logo/cssLogo.png";
import sticker9 from "../assets/logo/figmaLogo.png";
import sticker10 from "../assets/logo/htmlLogo.png";
import sticker11 from "../assets/logo/jsLogo.png";
import sticker12 from "../assets/logo/kotlinLogo.png";
import sticker13 from "../assets/logo/nodeLogo.png";
import sticker14 from "../assets/logo/pythonLogo.png";
import sticker15 from "../assets/logo/reactLogo.png";
import sticker16 from "../assets/logo/swiftLogo.png";
import sticker17 from "../assets/logo/tailwindLogo.png";
import sticker18 from "../assets/rainbowsticker.png";

import Reveal from '../utils/Reveal';
import ChangeNavColor from '../context/ChangeNavColor';

const stickersArray1 = [sticker4, sticker5, sticker6, sticker7 ];
const stickersArray2 = [sticker8, sticker9, sticker10 ];
const stickersArray3 = [sticker11, sticker12, sticker13 ];
const stickersArray4 = [sticker14, sticker15, sticker16, sticker17];


const About = ()=> {
  
  const experienceArray = [
    {
      nom : "BTS SIO",
      date : "2023 - 2025",
      description:"Fait au lycée léonard de Vinci à Melun",
      label: "scolaire"
    },
    {
      nom : "BAC STI2D option EE",
      date : "2021",
      description:"Lycée la mare carée",
      label: "scolaire"
    },
    {
      nom : "PIX",
      date : "Mars 2025",
      description:"Obtenu avec 497 PIX ",
      label: "certification"
    },
    {
      nom : "Lauréate au concours 'Minecraft' crée ta ville et ton territoire de demain",
      date : "2019",
      description:"Organisé par le ministère de la Cohésion des territoires et des Relations avec les collectivités territoriales",
      label: "prix"
    },
    {
      nom : "Stagiaire en developpement Full Stack",
      date : "2024",
      description:"GMG HR",
      label: "experience"
    },
    {
      nom : "Développeur informatique",
      date : "2025",
      description:"Atelier Artistique tryptik",
      label: "experience"
    },
    {
      nom : "Ambassatrice BECOMTECH",
      date : "2023 - maintenant",
      description:"Associations nationale pour les filles et les femmes, Becomtech oeuvre à la mixité dans l'informatique",
      label: "associatif"
    },
    {
      nom : "Bénévole",
      date : "2023 - maintenant",
      description:"pour RockCorps",
      label: "associatif"
    },

  ]

  gsap.registerPlugin(ScrollTrigger ,Draggable);
  const stageSectionRef = useRef(null);
   

  useGSAP(() => {
    Draggable.create(".draggable-sticker");

    const stageSections = gsap.utils.toArray(".stagesection"); // Récupère toutes les sections
    const spacer = 20;
    const minScale = 0.8;
    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    stageSections.forEach((stage, i) => {
      const scaleVal = distributor(i, stage[i], stageSections); 
      gsap.to(stage, {
        scrollTrigger: {
          trigger: stage,
          start: `top top`,
          scrub: true,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: stage,
        start: `top+=${i * spacer} top`,
        end: `bottom top+=${500 + (stageSections.length * spacer)}`,
        endTrigger: '.cards',
        pin: true,
        pinSpacing: false,
        id: `pin-${i}`,
        invalidateOnRefresh: true,
      });
    });

  }, []);

  return (
    <div>
      {/* Page transition */}
      <PixelTransition /> 

      {/* Sections animées */}
      <div ref={stageSectionRef} className='cards'>

      {/* Section d'introduction */}
      <div className='h-screen w-screen stagesection flex text-center justify-center items-center'>
        <h1 className="font-bold text-6xl lg:w-1/2">
          <img src={sticker1} alt="question sticker" className='draggable-sticker w-50 absolute top-0 right-0 lg:top-20 lg:right-10 -rotate-12'/>
            Mais c'est qui cette Océane <HighlighterAnimation texte="KASINDU" color='#ffd900'/>?
        </h1>
        <img src={sticker1} alt="question sticker" className='draggable-sticker w-50 absolute bottom-10 lg:right-10 left-10 rotate-12'/>
      </div>

     {/* Section description sur moi */}
      <div className='h-screen w-screen stagesection flex justify-center items-center bg-white'>
             <BlockBg/>
             <img src={sticker2} alt="question bts sio" className='draggable-sticker w-50 absolute top-0 right-0 lg:top-20 lg:left-10 -rotate-12'/>
              <h1 className="font-bold text-5xl text-center lg:w-5/6">
                  Je suis une étudiante en <HighlighterAnimation texte="BTS SIO" color='#00d5ff'/> intéressée par la robotique et <HighlighterAnimation texte="kiffant" color='#7b00ff'/> la <HighlighterAnimation texte="programmation" color='#ffd000'/>  et le  <HighlighterAnimation texte="roller aggressif" color='#0ffa55'/> 
              </h1>
              <img src={sticker3} alt="question pc" className='draggable-sticker w-50 absolute bottom-10 right-10 rotate-12 '/>
        </div>

       {/* Section photos */}
        <div className='h-[550vh] w-screen stagesection'>
            <PhotoAnimation/>
        </div>

        {/* Section mes hards skils */}
        <div className='h-screen w-screen stagesection '>
          <BlockBg/>
          <div className='relative h-screen w-screen flex flex-col justify-center items-center rounded text-center'>
            {/*sticker en haut à droite */}
          {
            stickersArray1.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ top: `${i * 40}px`, right: `${i * 300}px` }} 
                className={`draggable-sticker w-40 absolute otate-1 z-50`}/>
              )
            })
          }


        {/*sticker en haut à gauche */}
          {
            stickersArray2.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ top: `-${i*30}px`, left: `${i * 400}px` }} 
                className={`draggable-sticker w-45 absolute z-10`}/>
              )
            })
          }

        {/*sticker en bas à droite */}
          {
            stickersArray4.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ bottom: `${i * 50}px`, right: `${i * 300}px` }} 
                className={`draggable-sticker w-45 absolute z-10`}/>
              )
            })
          }

        {/*sticker en bas à gauche */}
          {
            stickersArray3.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ bottom: `${i * 30}px`, left: `${i * 400}px` }} 
                className={`draggable-sticker w-40 absolute z-10`}/>
              )
            })
          }
            <h1 className="font-bold text-5xl lg:text-6xl lg:w-1/2">Je suis à <span className='underline'>l'aise</span> avec ces <HighlighterAnimation texte="technologies" color="#ff0066"/></h1>
            <p className='font-mono text-sm'>[Parce que je les ai apprises  <HighlighterAnimation texte="en dehors" color="#ffb300"/> et <HighlighterAnimation texte="au cours" color="#80ff00"/> en dehors de ma formation hihi !!]</p>
          </div>
        </div>


      </div>
  
      {/* Section mes expériences*/}
      <div className='lg:h-screen h-fit w-screen stagesection border-4 bg-zinc-950 border-white'>
         {/* titre de la section => mes expériences*/}
    
          <div className='relative flex justify-center items-center pt-10 px-5 text-white h-fit'>
            <Reveal delay={0.5}>
              <h1 className="relative font-bold text-4xl lg:text-6xl lg:w-2/3 h-full lg:px-0  ">Et j'ai plein d'expériences 
                <HighlighterAnimation texte="professionelle" color="#ad03fc" opacity={1} />
                <img src={sticker18} alt="rainwbow sticker" className='draggable-sticker w-20 lg:w-50 lg:absolute -bottom-10 -right-40 rotate-12'/>
              </h1>
            </Reveal>
          </div>

          <ChangeNavColor>
            <div className='w-screen h-full px-10 gap-5 items-center flex lg:flex-row flex-col  text-white font-mono justify-center'>
                      {/*expérience */}

                    <div className='flex flex-col gap-5 '>
                      {/*ma scolarité */}
                      <p>Expérience professionelle</p>
                      {
                        experienceArray.map((experience , i)=>{
                          if (experience.label =="experience"){
                            return (
                              <div key={i} className="block max-w-sm p-6 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:bg-amber-200 transition-all">
                                <h1 className="mb-2 text-xl font-bold tracking-tight">{experience.nom}</h1>
                                <p className="font-normal text-sm ">{experience.description}</p>
                              </div>
                            )
                          }
                        })
                      }
                    </div>

                    <div className='flex flex-col gap-5'>        
                    {/*ma scolarité */}
                    <p>Mon parcours scolaire</p>

                    {
                        experienceArray.map((experience , i)=>{
                          if (experience.label =="scolaire"){
                            return (
                              <div key={i} className="block max-w-sm p-6 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:bg-sky-200 transition-all">
                                <h1 className="mb-2 text-xl font-bold tracking-tight">{experience.nom}</h1>
                                <p className="font-normal text-sm">{experience.description}</p>
                              </div>
                            )
                          }
                        })
                      }
                    </div>

                    <div className='flex flex-col gap-5 '>        
                      {/* mes expérience associatifs */}
                      <p>Mes expériences associatifs</p>
                      {
                        experienceArray.map((experience , i)=>{
                          if (experience.label =="associatif"){
                            return (
                              <div key={i} className="block max-w-sm p-6 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:bg-green-200 transition-all">
                                <h1 className="mb-2 text-xl font-bold tracking-tight">{experience.nom}</h1>
                                <p className="font-normal text-sm">{experience.description}</p>
                              </div>
                            )
                          }
                        })
                      }
                    </div>

                    <div className='flex flex-col gap-5 '>        
                      {/*mes prix */}
                      <p>Mes prix et distinctions</p>
                      {
                        experienceArray.map((experience , i)=>{
                          if (experience.label =="prix"){
                            return (
                              <div key={i} className="block max-w-sm p-6 w-80 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:bg-pink-200 transition-all">
                                <h1 className="mb-2 text-xl font-bold tracking-tight">{experience.nom}</h1>
                                <p className="font-normal text-sm">{experience.description}</p>
                              </div>
                            )
                          }
                        })
                      }
                       <p>Mes certifications</p>

                      {
                        experienceArray.map((experience , i)=>{
                          if (experience.label =="certification"){
                            return (
                              <div key={i} className="block max-w-sm  p-6 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:bg-red-200 transition-all">
                                <h1 className="mb-2 text-xl font-bold tracking-tight">{experience.nom}</h1>
                                <p className="font-normal text-sm">{experience.description}</p>
                              </div>
                            )
                          }
                        })
                      }
                    </div>

                 
              </div>
          </ChangeNavColor>
          </div>

        </div>

 

  );
}

export default About;
