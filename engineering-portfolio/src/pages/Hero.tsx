import { motion } from "motion/react"
import { Mail, DownloadCloud, ChevronDown } from "lucide-react";
import ProfileImage from "../assets/temp-profile-picture.png"
import CV from "../assets/ENGINEERING_RESUME.pdf"

export default function Hero () {
    return (
        <section id="home" className="relative bg-bg py-32 px-6 lg:px-24">
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
                        inline-block overflow-hidden whitespace-nowrap
                        animate-typing text-center">
                        OTONBARA ALFRED OKOLAI
                    </h1>
                    <motion.h2 
                        className="text-lg md:text-xl text-text-secondary text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: false }}>
                        CIVIL & ENVIRONMENTAL ENGINEER 
                        <br />(WATER RESOURCES)
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
                className="relative flex flex-col md:flex-row gap-10 justify-center items-center mt-20 z-20"
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
                            className="relative px-4 md:px-6 py-2 md:py-3 bg-zinc-950 rounded-full leading-none flex items-center gap-2.5 
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
                            className="relative px-4 md:px-6 py-2 md:py-3 bg-surface rounded-full leading-none flex items-center gap-2.5 
                                    text-text-secondary cursor-pointer group-hover:text-text-primary transition duration-200
                                    border border-white/30">
                            <span><DownloadCloud/></span>
                            <span>Download CV</span>
                        </button>
                    </a>
                </div>
            </motion.div>
            {/* Scroll Down */}
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 py-5
                            flex flex-col items-center text-text-secondary cursor-pointer z-10"
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                onClick={() => {
                    const nextSection = document.querySelector("#about");
                    nextSection?.scrollIntoView({ behavior: "smooth"});
                }}>
                <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-text-secondary"/>
            </motion.div>
        </section>
    )
}