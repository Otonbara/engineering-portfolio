import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import KPSL from "../assets/kpsl_logo.png"
import EENL from "../assets/EENL.png"

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end end"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const experienceData = [
        {
            logo: EENL,
            company: "Eretek Engineering Nigeria Ltd.",
            role: "Civil Engineering Intern",
            duration: "July 2023 - Dec 2023",
            location: "Yenagoa, Nigeria",
            details: [
                "Supported the supervision of a 4km stormwater drainage and 2km road network for NDPHC.",
                "Reviewed construction drawings, monitored progress, and performed quality and safety checks.",
                "Collaborated with engineers and foremen on planning, materials, and contractor performance.",
            ],
        },
        {
            logo: KPSL,
            company: "Koe Procurement & Services Ltd.",
            role: "Civil Engineering Intern",
            duration: "Aug 2022 - Jun 2023",
            location: "Yenagoa, Nigeria",
            details: [
                "Contributed to the successful delivery of an estate development project comprising 40 units of 5-bedroom, one-storey duplexes.",
                "Assisted with site layout, reinforcement placement, and structural work, gaining hands-on construction supervision experience.",
                "Collaborated with contractors, site engineers, and labor teams to maintain project timelines and meet quality benchmarks.",
            ],
        },
    ];

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative bg-bg py-32 px-6 lg:px-24 z-20">
            <motion.h2
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                        via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left">
                EXPERIENCE
            </motion.h2>

            <div className="relative flex flex-col gap-14 z-10">
                {/* Timeline Line */}
                <div className="absolute top-0 left-2 w-[3px] h-full bg-accent/20 rounded-full z-0">
                    <motion.div
                        className="absolute left-0 w-[3px] 
                            bg-linear-to-b from-accent via-accent/70 to-accent/20
                            rounded-full origin-top shadow-[0_0_10px_var(--accent)]"
                        style={{ height: lineHeight }} />
                </div>

                {/* Experience Cards */}
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.15,
                            ease: "easeOut",
                        }}
                        className="relative flex flex-col md:flex-row md:items-center gap-6 pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <motion.div
                            className="absolute left-0 md:left-0 top-10 md:top-21 w-5 h-5 rounded-full bg-accent border-[3px] border-surface z-20"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}/>

                        {/* Left Side: Company Info */}
                        <div className="flex flex-col items-start p-6 md:w-[45%]">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="w-14 h-14 object-fit rounded-lg"/>
                                <div className="flex flex-col justify-center items-center md:items-start gap-1">
                                    <h3 className="text-lg text-text-primary text-center">
                                        {exp.company}
                                    </h3>
                                    <p className="text-sm text-text-secondary">
                                        {exp.role}
                                    </p>
                                    <span className="text-sm text-text-secondary font-medium">
                                        {exp.location}
                                    </span>
                                    <span className="text-xs text-text-secondary font-medium">
                                        {exp.duration}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Responsibilities */}
                        <div className="bg-surface/90 border border-border p-6 backdrop-blur-md md:w-[55%]">
                            <ul className="list-disc list-inside text-sm text-text-secondary leading-relaxed space-y-1">
                                {exp.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
