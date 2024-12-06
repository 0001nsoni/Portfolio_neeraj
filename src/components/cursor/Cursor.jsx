import React, { useEffect, useState } from 'react'
import './cursor.scss'
import {motion} from 'framer-motion'
function Cursor() {
    const [position,setPositon]=useState({x:0,y:0});
  useEffect(()=>{
    const mouseMove=(e)=>{
        setPositon({x:e.clientX,y:e.clientY})

    }
    window.addEventListener("mousemove",mouseMove)
    return()=>{
        window.removeEventListener("mousemove",mouseMove);
    }
  },[]) ;
 
  return (
    <motion.div className="cursor" animate={{x:position.x,y:position.y}}>

    </motion.div>
  )
}

export default Cursor