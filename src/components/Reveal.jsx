import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView  } from 'framer-motion'

export const Reveal = ({ children, width='100%'}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
        >{children}</motion.div>
    </div>
  )
}
