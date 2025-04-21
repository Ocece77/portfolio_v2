import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap"; // Import de GSAP
import { useEffect } from "react";
import { useRef } from "react";

const LoadingScreen = ({ isLoading, percentage }) => {
  const loadingScreenRef = useRef(null);

  useGSAP(() => {
    const items = document.querySelectorAll(".percentage");
    if (isLoading) {
      gsap.from(items, {
        textContent: 0,
        duration: 2  ,
        ease:"power1.ease",
        snap: { textContent: 1 },
        stagger: 1,
      });
    } 
  }, [isLoading]); 


  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={loadingScreenRef}
          className="loading-screen fixed inset-0 bg-amber-200 text-white flex items-center justify-center z-1000"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="absolute flex flex-col bottom-8 left-8 text-9xl font-bold">
            <span className="text-sm">Patiente un peu please 🥺</span>
            <p><span className="percentage">100</span>%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;