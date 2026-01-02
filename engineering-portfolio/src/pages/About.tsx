import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Marcus from "../assets/marcus_aurelius.jpg"

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 60%", "end end"],
    });

    const titleX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const textX = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const quoteX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const imageX = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative h-screen px-6 lg:px-24 py-12 md:py-32 bg-bg">
            <div className="absolute container inset-0"/>
            <div className="relative flex flex-col md:flex-row justify-evenly gap-10 z-20">
                <div className="md:w-1/2">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                        via-purple-400 to-accent2 bg-clip-text text-transparent text-center md:text-left"
                        style={{ x: titleX, opacity }}>
                        ENGINEERING PRATICAL SOLUTIONS FOR REAL WORLD INFRASTRUCTURE
                    </motion.h2>
                </div>
                <div className="md:w-1/2">
                    <motion.p
                        className="text-text-secondary text-base md:text-lg leading-relaxed text-justify"
                        style={{ x: textX, opacity }}>
                        I am a civil and environmental engineering graduate with a focus on water engineering,
                        consulting, and sustainable infrastructure.
                        Witnessing the impact of flooding within my state (Bayelsa, Nigeria) shaped my interest in
                        urban drainage and flood management, highlighting how infrasturcture failures affect everyday life.
                        I enjoy combining fieldwork, design and digital modeling to deliver practical, reliable solutions,
                        and I aim to build a career in water engineering consultancy focused on resilient infrastructure.
                    </motion.p>
                </div>
            </div>
            <div className="relative z-20 mt-10 flex flex-col md:flex-row gap-10 justify-center items-center">
                <motion.blockquote
                    className="max-w-xl font-Quintessential text-text-secondary text-center md:text-left text-lg 
                                font-medium border-l-4 pl-4 mt-4 leading-relaxed italic"
                    style={{ x: quoteX, opacity }}>
                    “Don’t think that what’s hard for you to master is humanly impossible; 
                    and if it’s humanly possible, consider it to be within your reach.”
                    <footer className="text-sm text-text-secondary mt-2 font-light">- Marcus Aurelius</footer>
                </motion.blockquote>
                <motion.img 
                    src={Marcus}
                    alt="Marcus Aurelius"
                    style={{ x: imageX, opacity }}
                    className="w-32 h-32 rounded-full object-fill shadow-lg border-4 border-white/10 hidden md:block" />
            </div>
        </section>
    )
}