import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, DownloadCloud } from "lucide-react";
import ProfileImage from "../assets/temp-profile-picture.png"
import CV from "../assets/ENGINEERING_RESUME.pdf"

export default function Hero () {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])
    
    return (
        <section id="hero" className="relative overflow-hidden bg-bg py-32 px-6 lg:px-24">
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen blur-3xl animate-blob duration-20s delay-0s"
                    style={{
                        transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
                    }}/>
                <div 
                    className="absolute w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen blur-3xl animate-blob duration-25s delay-2s top-1/3 left-1/4"
                    style={{
                        transform: `translate(${mousePos.x * -40}px, ${mousePos.y * 60}px)`,
                    }}/>
                <div 
                    className="absolute w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen blur-3xl animate-blob duration-30s delay-4s bottom-1/4 right-1/4"
                    style={{
                        transform: `translate(${mousePos.x * 60}px, ${mousePos.y * -40}px)`,
                    }}/>
            </div>
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 z-20">
                {/* Text Section */}
                <motion.div 
                    className="flex flex-col justify-center items-center lg:items-start space-y-4"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                        via-purple-400 to-accent2 bg-clip-text text-transparent
                        inline-block overflow-hidden whitespace-nowrap pr-1
                        animate-typing text-center">
                        OTONBARA ALFRED OKOLAI
                    </h1>
                    <motion.h2 
                        className="text-lg md:text-xl text-text-secondary text-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: false }}>
                        CIVIL & ENVIRONMENTAL ENGINEER
                    </motion.h2>
                    <motion.h3 
                        className="text-sm md:text-base text-text-secondary"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: false }}>
                        BASED IN LAGOS, NIGERIA
                    </motion.h3>
                </motion.div>
                {/* Image Section */}
                <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}>
                    <img 
                        src={ProfileImage}
                        alt="Otonbara Alfred Okolai"
                        className="w-56 h-56 md:w-72 md:h-72 rounded-lg object-cover shadow-lg border-4 border-white/10
                                    transition-transform duration-700 hover:scale-105 hover:shadow-accent/30"/>
                </motion.div>
            </div>
            {/* CTA Buttons */}
            <motion.div 
                className="relative flex flex-col md:flex-row gap-10 justify-center items-center mt-20 z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Get In Touch */}
                <div className="relative group">
                    <div 
                        className="absolute -inset-1 bg-linear-to-r from-accent via-purple-400 to-accent2 
                                    rounded-full blur opacity-55 group-hover:opacity-100 
                                    transition duration-1000 group-hover:duration-200 animate-tilt"/>
                    <a href="mailto:alfredokolai@gmail.com">
                        <button 
                            className="relative px-6 py-3 bg-zinc-950 rounded-full leading-none flex items-center gap-2.5 
                                    text-text-secondary cursor-pointer group-hover:text-text-primary transition duration-200
                                    border border-white/30">
                            <span><Mail/></span>
                            <span>Get In Touch</span>
                        </button>
                    </a>
                </div>
                {/* CV */}
                <div className="relative group">
                    <div 
                        className="absolute -inset-1 bg-linear-to-r from-border via-accent2 to-text-secondary 
                                    rounded-full blur opacity-55 group-hover:opacity-100 
                                    transition duration-1000 group-hover:duration-200 animate-tilt"/>
                    <a 
                        href={CV}
                        target="_blank">
                        <button 
                            className="relative px-6 py-3 bg-surface rounded-full leading-none flex items-center gap-2.5 
                                    text-text-secondary cursor-pointer group-hover:text-text-primary transition duration-200
                                    border border-white/30">
                            <span><DownloadCloud/></span>
                            <span>Download CV</span>
                        </button>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}