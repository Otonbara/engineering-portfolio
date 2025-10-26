import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 60%", "end end"],
    });

    const titleX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const textX = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative h-screen px-6 lg:px-24 bg-bg flex flex-col justify-center items-center">
            <div className="absolute container inset-0"/>
            <div className="relative flex flex-col md:flex-row justify-evenly gap-10">
                <div className="md:w-1/2">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-text-primary text-center md:text-left"
                        style={{ x: titleX, opacity }}>
                        DRIVEN BY NECESSITY AND PRECISION
                    </motion.h2>
                </div>
                <div className="md:w-1/2">
                    <motion.p
                        className="text-text-secondary text-base md:text-lg leading-relaxed text-justify"
                        style={{ x: textX, opacity }}>
                        Necessity is what motivates me to work. 
                        My commitment to ensuring sustainable water management safeguards social justice and 
                        public safety stems from my own experience with the effects of flooding.
                        My approach to any engineering problem is based on the idea that infrastructure needs to be accurate, 
                        useful, and durable. In order to make sure that designs improve rather than degrade the environment, 
                        I intend to integrate digital tools with field-tested rigor.
                        My goal is to promote efficiency and innovation in my sector in the real world.
                    </motion.p>
                </div>
                

            </div>
        </section>
    )
}