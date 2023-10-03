import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({ children, animate_position}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let animate = isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 };
  if(animate_position === "horizontal"){
    animate = isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
    
  }
  else if(animate_position === "vertical" || animate_position === ""){
    animate = isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
  }
  else if(animate_position === "-vertical" || animate_position === ""){
    animate = isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
  }
  else if(animate_position === "-horizontal"){
    animate = isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
  }

  return (
    <div ref={ref}>
      <motion.div
        animate={animate}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
