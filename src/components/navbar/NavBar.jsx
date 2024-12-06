import React from 'react'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar';
import {motion} from "framer-motion";

function NavBar() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Replace with your file's URL
    link.download = "Neeraj's_Resume.pdf"; // Optional: Set a default file name
    link.click();
  };
  
  return (
    <div className='navbar'>
{/* {slider} */}
  <Sidebar/>
<div className="wrapper">
    <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}><span id='gt'>&lt;</span> Neeraj <span  id='gt'>/</span> Soni <span  id='gt'>&gt;</span></motion.span>
    <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="social">
        <a href="https://www.linkedin.com/in/neerajsoni11/details/skills/"><img src="/174857.png" alt="" /></a>
        <a href="https://github.com/0001nsoni"><img src="/Github-512.webp" alt="" /></a>
        <a href="https://www.geeksforgeeks.org/user/nsonii7v0/"><img src="/images.png" alt="" /></a>
        <a href="https://leetcode.com/u/nsoni8005/"><img src="/LeetCode_logo_rvs.png" alt="" /></a>
        <div className="button">

        
        <motion.button initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="social"  onClick={downloadPDF} >Resume</motion.button>
        
        </div>
    
    
    </motion.div>
</div>


    </div>
  )
}

export default NavBar