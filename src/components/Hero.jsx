import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import ReactRotatingText from 'react-rotating-text';

export default function Hero({bg_imgs, exp_sub}){
    const [currImgIndex, setCurrImgIndex] = useState(0);
    const BgImgsStyle = {
      'backgroundImage': `url('src/assets/hero/${bg_imgs[currImgIndex]}')`
    }
    
    var ExpSub = JSON.parse(exp_sub)
    console.log(ExpSub)
    useEffect(() => {
        const interval = setInterval(() => {
          // Toggle between 0 and 1 to switch images
          setCurrImgIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5000); // Change images every 5 seconds
    
        return () => clearInterval(interval);
      }, []);
    return(
        <>
          <motion.div animate={{
            backgroundSize: ['100% 100%', '110% 110%' , '120% 120%'],
          }} id="hero-boundary" className="w-full max-w-full md:h-[65vh] lg:h-[93vh] bg-cover bg-center min-[1000px]:bg-origin-padding transition-all ease-in-out duration-300 flex items-center h-[40vh] sm:h-[50vh]" style={BgImgsStyle} transition={{
            duration: 10, // Duration of each animation cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "reverse", // Reverse the animation direction on each iteration
          }}>
            {ExpSub == true ? 
            <>
              <div className="flex flex-1 justify-center self-end">
                  <h1 className="text-slate-100 p-12 font-domine text-lg md:text-2xl lg:text-3xl">Experience the best <span><ReactRotatingText items={['relaxation', 'healing', 'honeymoon', 'holiday']}></ReactRotatingText></span></h1>
              </div>
            </>
            : <></>}
          </motion.div>
        </>
    )
}