import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './about.scss';

function About() {

    const variants = {
        initial: { // Fixed typo from "inital" to "initial"
            x: -100,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div className='about' variants={variants} initial="initial" whileInView="animate">
            <div className='header'>
                <h1>About Me</h1>
            </div>
            <div className="sechead">
                <h2>
                    Web Developer | DevOps Engineer | Problem Solver
                </h2>
            </div>
            <div className="detail">
                <div className="para">
                    <h3 style={{
                        fontSize: '1.5em',
                        whiteSpace: 'pre-wrap', // Ensure text maintains formatting with line breaks
                        lineHeight: '1.8', // Improve line spacing for better readability
                        textAlign: 'justify', // Align text for a cleaner look
                        margin: '20px 0', // Add some spacing
                        color: "#FFFFFF", // Set text color to white
                    }}>
                        I am a passionate Web Developer and DevOps Engineer with a strong foundation in Artificial Intelligence, Data Science, and Software Development. My journey in tech has been a mix of learning, hands-on experimentation, and applying those skills to solve real-world problems. I am deeply interested in web development, cloud computing, and leveraging automation to improve efficiency.
                    </h3>
                </div>
                <div className="image">
                    <img src="/about.png" alt="About me" />
                </div>
            </div>
            <div className="back">
                {/* You can add a background or additional content here */}
            </div>
        </motion.div>
    );
}

export default About;
