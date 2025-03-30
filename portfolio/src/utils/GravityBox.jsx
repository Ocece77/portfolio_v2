import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Matter from "matter-js";
import sticker1 from "../assets/smileysticker.png";
import sticker2 from "../assets/rainbowsticker.png";
import sticker3 from "../assets/cookiesticker.png";
import sticker4 from "../assets/bluesmileysticker.png";
import sticker5 from "../assets/murakamisticker.png";

const GravityBox = ({ texte , groundRemover = 60 }) => {
  const stickersArray = [sticker1, sticker2, sticker3, sticker4, sticker5];
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const texteRef =  useRef(null);
  const { Engine, Render, Runner, Bodies, Composite, World , MouseConstraint, Mouse ,Events} = Matter;

  // Fonction pour initialiser la scène

  const initScene = () => {
    // Nettoyer l'instance de scène précédente si elle existe
    if (engineRef.current) {
      Render.stop(renderRef.current);
      Engine.clear(engineRef.current);
      renderRef.current.canvas.remove();
    }

    const engine = Engine.create();
    engineRef.current = engine;

    // Création de l'environnement du moteur
    const world = engine.world;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight *2,
        background: 'transparent',
        wireframes: false,
      },
    });
    renderRef.current = render;

    // Créer des murs statiques
    // Bodies.rectangle(x, y, width, height, { options });

    const wallLeft = Bodies.rectangle(0, window.innerHeight, 10, window.innerHeight *2 , { isStatic: true, label: "wallLeft", render: { fillStyle: 'transparent' } });
    const wallRight = Bodies.rectangle(window.innerWidth , window.innerHeight, 10 , window.innerHeight *2 , { isStatic: true, label: "wallRight", render: { fillStyle: 'transparent' } });
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight *.95, window.innerWidth, 1, { isStatic: true, label: "ground", render: { fillStyle: 'transparent' } });
    const textBox = Bodies.rectangle(window.innerWidth / 2, window.innerHeight /2, texteRef.current.clientWidth +100, texteRef.current.clientHeight +100 , { isStatic: true, label: "textBox",  render: { fillStyle: 'transparent' } });



    // Ajouter tous les corps au monde
    Composite.add(world, [wallLeft, wallRight, ground, textBox]);

    // Fonction pour créer un sticker
    const createStickers = () => {
      const size = Math.floor(Math.random() * 40) + 30; // Taille entre 30 et 40
      const stickerTexture = stickersArray[Math.floor(Math.random() * stickersArray.length)];

      const sticker = Bodies.circle(Math.random() * window.innerWidth, -30, 30, {
        friction: 0.001, 
        restitution: 0.3, // elasticité
        inertia: Infinity, // Empêche la rotation
        frictionAir: 0.01,
        render: {
          sprite: {
            texture: stickerTexture,
            xScale:  stickerTexture == sticker5 ? size/300 : size / 1100,
            yScale:  stickerTexture == sticker5 ? size/300 : size / 1100,
          },
        },
      });

      return sticker;
    };

    // Ajouter un sticker toutes les 300ms
    
    const interval = setInterval(() => {
      World.add(world, createStickers());
    }, 5);

    setTimeout(()=>{
      clearInterval(interval)
    } , 1000);

    // evenement sur le mouvement de la souris
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.8,
        render: { visible: false },
      },
    });

    //Permet de scroll le canvas
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("wheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    // ajout dans le monde du detecteur de mouvement de souris
    World.add(world, mouseConstraint);



    // Exécuter le moteur et le rendu
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);



  };


  // Appeler initScene une fois au chargement initial
  useEffect(() => {
    setTimeout(()=>{
      initScene();
    }, 2000)

    // Nettoyer la scène lors du démontage du composant
    return () => {
      if (engineRef.current) {
        Render.stop(renderRef.current);
        Engine.clear(engineRef.current);
        renderRef.current.canvas.remove();
      }
    };
  }, []);

  // Gérer l'événement de scroll pour supprimer le sol
 useEffect(() => {
  const handleScroll = () => {
    const world = engineRef.current?.world;

    // Si l'utilisateur a scrollé de plus de 100px, on retire le sol
    if (window.scrollY > groundRemover && world) {
      console.log(window.scrollY , world) 
      // Retirer le sol si il existe déjà
      const ground = world.bodies.find(body => body.label === "ground");
      const textBox = world.bodies.find(body => body.label === "textBox");

      console.log(ground)
      if (ground || textBox) {
        World.remove(world, ground);
        World.remove(world, textBox);
        console.log("Sol retiré");
      }
    }
  };

  // Ajouter l'événement de scroll
  window.addEventListener('scroll', handleScroll);

  // Nettoyer l'événement lors du démontage du composant
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  // Gérer le redimensionnement de la fenêtre pour réinitialiser la scène
  useEffect(() => {
    const handleResize = () => {
      initScene();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
       {/*Scène */}
      <div ref={sceneRef} className="stickers z-97 w-screen h-screen absolute "></div>

      {/*Texte */}
      <div className="flex w-full h-screen absolute text-center justify-center items-center">
        <h1  ref={texteRef} className="font-bold text-7xl lg:text-6xl w-1/2 ">{texte}</h1>
      </div>

    </div>
  );
};

GravityBox.propTypes = {
  texte: PropTypes.string,
  groundRemover :PropTypes.number,
};

export default GravityBox;
