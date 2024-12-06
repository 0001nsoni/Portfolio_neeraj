import React from 'react'
import {motion} from 'framer-motion'

function Test() {
  return (
    <div className='course'>
        <motion.div className="box" animate={{opacity:0}} transition={{duration:2,delay:2}}></motion.div>
    </div>
  )
}

export default Test