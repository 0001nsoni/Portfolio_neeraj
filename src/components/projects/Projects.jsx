import React, { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Projects() {
    const items = [
        {
            id: 1,
            title: "Animated Front Page",
            img: "/Fanta.png",
            desc: "I created a vibrant landing page inspired by Fanta, featuring smooth scrollable animations using HTML, CSS, JavaScript, and GSAP. This project showcases engaging animations and a playful design, though it's not yet responsive.",
            demoLink:"https://0001nsoni.github.io/FantaWebPage/"
        },
        {
            id: 2,
            title: "Razorpay Clone",
            img: "/Razorpay.png",
            desc: "Razorpay Clone as part of my learning journey in web development, focusing on mastering secure payment gateways and dynamic transactions. This project simulates the core features of Razorpay, providing a seamless user experience for processing payments, order management, and transaction tracking.",
            demoLink:"https://razor-pay-neeraj.vercel.app/"
        },
        {
            id: 3,
            title: "Spotify Clone",
            img: "/Spotify.png",
            desc: "Developed a Spotify Clone as a learning project to deepen my understanding of web development. The project involved creating a static web application that visually replicates the core features of Spotify, including the layout and design of the music streaming platform.",
            demoLink:"https://0001nsoni.github.io/Spotify-Clone/"
        },
        {
            id: 4,
            title: "ChatBot",
            img: "/Ai.png",
            desc: "AI Chatbot using HTML, CSS, JavaScript, and Gemini API. This bot provides real-time, intelligent responses using a user-friendly interface. Powered by Gemini API, it understands and answers natural language queries. Ideal for customer support, personal assistance, and educational tools. Easily customizable for diverse applications.",
            demoLink:"https://0001nsoni.github.io/AI_Chat_Bot/"
        },
    ];

    const Single = ({ item }) => {
        const ref = useRef();
        const { scrollYProgress } = useScroll({
            target: ref,
        //  offset:["start start", "end start"]
        });
        const y=useTransform(scrollYProgress,[0,1],[-300,300]);
        const handleRedirect = () => {
            window.open(item.demoLink, "_blank"); // Open demo link in a new tab
        };
        return (
            <section>
                <div className="container">
                    <div className="wrapper">
<div className="imageContainer"  ref={ref}>

                    <img src={item.img} alt="" />
</div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>
                            {item.title}
                        </h2>
                        <p>
                            {item.desc}
                        </p>
                        <button onClick={handleRedirect}>
                            See Demo
                        </button>
                    </motion.div>
                    </div>
                </div>
            </section>
        );
    };

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref} id="Projects">
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Projects;
