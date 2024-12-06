import React from 'react'
import "../hero/hero.scss"

import { animate, transform, motion } from 'framer-motion'

function Hero() {
   
   
    const textVariants = {
        inital: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }


        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        inital: {
            x: 0,

        },
        animate: {
            x: "-220%",

            transition: {
                repeat: Infinity,
                repeatType:"mirror",
                duration: 20,

            }


        },

    }
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',  // Adds smooth scrolling
        });
    };
    return (
        <div className='hero'>
            <div className="wrapper">

                <motion.div className='textContainer' variants={textVariants} initial="inital" animate="animate">
                    <motion.h2 variants={textVariants}>NEERAJ SONI</motion.h2>
                    <motion.h1 variants={textVariants}>Web Devloper and DevOps Engineer</motion.h1>
                    
                </motion.div>
                
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} 
            inital="inital" 
            animate="animate">
                Problem Solver & DevOps Engineer
            </motion.div>
            

            <div className="imageContainer">
                <img src="/neer2.1.png" alt=""  />
            </div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" className='scrollar' onClick={scrollToBottom}   />
            
        </div>

    )
}

export default Hero