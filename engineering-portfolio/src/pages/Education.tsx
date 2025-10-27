import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function Education() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end end"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const educationData = [
        {
            degree: "Bachelor of Engineering in Civil & Environmental Engineering",
            school: "Bells University of Technology",
            year: "Feb 2021 - Feb 2025",
        }
    ]
    return (
        <section 
            id="education"
            ref={sectionRef}
            className="relative bg-bg py-32 px-6 lg:px-24 z-20">
            
            <motion.h2
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                        via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left">
                EDUCATION
            </motion.h2>

            {/* Card Container */}
            <div className="relative flex flex-col space-y-24 z-10">
                {/* Timeline Background Line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-accent/20 rounded-full z-0">
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-[3px] 
                                bg-linear-to-b from-accent via-accent/70 to-accent/20
                                rounded-full origin-top shadow-[0_0_12px_var(--accent)]"
                        style={{ height: lineHeight }} />
                </div>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: index * 0.2,
                            ease: "easeOut"
                        }}
                        className={`relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}>
                        {/* Timeline Dot */}
                        <motion.div 
                            className="absolute left-1/2 -translate-x-1/2 w-5 h-5 
                                    rounded-full bg-accent shadow-lg z-20 border-[3px] border-surface"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2 + 0.1,
                                ease: "easeOut",
                            }} />
                        {/* Card */}
                        <motion.div 
                            className="bg-surface/80 border border-border backdrop-blur-md p-6 w-full md:w-[45%] z-10">
                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-text-secondary text-sm italic mb-1">
                                {edu.school}
                            </p>
                            <span className="text-text-secondary text-sm font-medium">
                                {edu.year}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}