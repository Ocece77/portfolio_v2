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

const Veille = () => {

  const { onDarkBg, toggleColor } = useContext(NavContext);
  
  const colorsTailwind = [ "sky-200", "green-200", "amber-200", "pink-200" ];
  const smartHomeNews = [
    {
      nom: "HGTV dévoile sa Smart Home 2025 à San Antonio",
      description: "HGTV a présenté une maison rénovée avec des technologies avancées comme l'éclairage activé par la voix et des appareils connectés.",
      lien: "https://www.expressnews.com/business/real-estate/article/hgtv-smart-home-san-antonio-sweepstakes-20254620.php"
    },
    {
      nom: "Les meilleures innovations smart home du CES 2025",
      description: "Le CES 2025 met en avant des gadgets révolutionnaires comme des télévisions OLED sans fil et des robots domestiques.",
      lien: "https://www.homecrux.com/best-smart-home-devices-from-ces-2025/304192/"
    },
    {
      nom: "Xiaomi lance des rideaux intelligents innovants",
      description: "Xiaomi dévoile un rideau connecté contrôlable via télécommande, application mobile ou commandes vocales.",
      lien: "https://www.digitaltrends.com/home/xiaomis-latest-smart-home-device-could-be-smart-curtain-youve-waited/"
    },
    {
      nom: "Google Nest et Apple HomeKit : Tendances 2025",
      description: "Les maisons intelligentes deviennent plus intuitives avec des intégrations améliorées et des commandes simplifiées.",
      lien: "https://www.starlinghome.io/post/upcoming-smart-home-trends-in-2025-how-google-nest-and-apple-homekit-are-shaping-the-future"
    },
    {
      nom: "Les 7 meilleurs gadgets smart home du CES 2025",
      description: "Tom's Guide sélectionne les innovations les plus marquantes du CES 2025 en matière de sécurité et de confort.",
      lien: "https://www.tomsguide.com/home/smart-home/the-7-best-smart-home-gadgets-of-ces-2025"
    },
    {
      nom: "Les meilleures offres Amazon sur les appareils smart home",
      description: "Des promotions sur des objets connectés comme l'Apple Watch Series 10 et l'aspirateur Dyson V15 Detect Plus.",
      lien: "https://nypost.com/shopping/best-amazon-deals-sales-clearance/"
    },
    {
      nom: "Tendances smart home 2025-2030",
      description: "L'intelligence domestique va s'étendre à tous les aspects de la maison, avec l’IA et la commande vocale en première ligne.",
      lien: "https://chenaniot.com/smart-home-and-building-industry-trends-2025-to-2030/"
    },
    {
      nom: "Les 10 principales tendances smart home pour 2025",
      description: "Automatisation avancée, IA intégrée et nouveaux objets connectés sont au cœur des évolutions à venir.",
      lien: "https://insights.made-in-china.com/fr/Top-10-Smart-Home-Trends-for-2025_jaUtyMpHhxid.html"
    },
    {
      nom: "Les meilleurs dispositifs smart home 2025 selon PCMag",
      description: "PCMag classe les meilleurs gadgets connectés pour améliorer la sécurité et le confort des maisons intelligentes.",
      lien: "https://www.pcmag.com/picks/the-best-smart-home-devices"
    },
    {
      nom: "Tendances smart home 2025 : ce qu’il faut savoir",
      description: "Un résumé des tendances clés du marché avec un focus sur l'automatisation et l'éco-responsabilité.",
      lien: "https://www.smarthomeiq.net/blog/smart-home-trend-2025"
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
      scale: 120,
      xPercent : -120,
      transformOrigin: "56% 50%"
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
    <>

      {/*page transition*/}
      <PixelTransition /> 
      <div>
           <BlockBg/>
         </div>
        
      {/*pc(ordinateur) seulement*/}
      <div className='h-screen w-screen relative lg:block hidden overflow-x-hidden '>
        <GravityBox texte={"Ma Veille technologique"}/>
      </div>

      
       {/*deuxième page - titre de la veille*/}
      <div ref={veilleTitreRef} className='h-screen w-screen bg-transparent md:flex hidden justify-center items-center -z-20  overflow-x-hidden'>
         <h1 className='titre font-bold text-8xl'>La Smart Home 🏡</h1>
      </div>

       {/*troisième page - contenue de la veille*/}
       <ChangeNavColor>
        <div className='relative h-fit w-screen pb-80 flex justify-center overflow-x-hidden bg-black  '>
          <div className='bg-black -z-10 h-screen w-screen absolute'> {/*background */}</div>
          <div className='text-white z-40 '>
            <div className='flex flex-col gap-10  '>

              <div className='px-5 text-center md:hidden block'>
                <h1 className='lg:hidden block text-6xl font-black z-20 py-10'>Ma Veille technologique</h1>
                <hr className='pt-5'/>
                <h1 className=' text-4xl font-bold'>La Smart Home 🏡</h1>
              </div>
              <div className='lg:ps-20 px-5'>
                  <h1 className=' lg:text-7xl text-4xl z-50 font-bold lg:w-4/6 lg:pt-0 pt-10'>L’avenir de la maison est <HighlighterAnimation texte={"déjà là !"} color='#ad03fc' opacity={1}/></h1>
                  <span className='font-bold underline font-pixelify text-[#ad03fc]'>Et c'est trop cool !</span>
              </div>
            
              <Reveal>
                <div className='lg:w-1/2 lg:ps-20 px-5'>
                  <span className='text-xl font-mono'>Les maisons intelligentes évoluent à toute vitesse, rendant nos foyers plus confortables, plus sûrs et plus  <span className='text-black'><HighlighterAnimation texte={"éco-friendly"} color='#8ffc00' opacity={1}/></span> grâce aux nouvelles technologies !</span>
                </div>
              </Reveal>

            {/*section IOT*/}

                <section className='relative h-fit w-screen'>

                    <div className='bg-black -z-10 h-screen w-screen absolute'> {/*background */}</div>

                    <Reveal>
                    <div>
                      <h1 className='font-bold text-2xl lg:ps-20 px-5'>Le <HighlighterAnimation texte={"pouvoir"} color='#ad03fc' opacity={1}/> de l'IOT [Internet of things]</h1>
                    </div>
                    </Reveal>

                    <div>

                    <div className='grid md:grid-cols-3 grid-cols-1 h-fit w-screen pt-16 px-5'>        
                          {/*listes d'articles */}
                          {
                            smartHomeNews.map((news, i) => {
                              return( 
                              <div
                                key={i}
                                className={`block ${i > 2 && window.innerWidth > 768 ? "-mt-60":"mt-4"} p-6 h-fit  text-gray-900 bg-white border rounded-lg shadow-sm hover:bg-${ colorsTailwind[i % colorsTailwind.length]} transition-all hover:-translate-y-10`}
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

                    </div>
                    
                </section>


              {/*section IOT */}
              {/*Écologie et innovation*/}
              {/*Sécurité et vie privée : des enjeux majeurs */}

            </div>
          </div>

        </div>   
      </ChangeNavColor>
      </>

  )
}

export default Veille