/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import Hero from "../pages/Hero"
import About from "../pages/About";
import Blobs from "./Blobs";

export default function ParallaxScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth Scroll Setup
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main ref={containerRef} className="relative h-[200vh] bg-surface overflow-hidden md:overflow-visible">
            <Blobs />
            <div className="relative">
                <HeroLayer scrollYProgress={scrollYProgress} />
                <AboutLayer scrollYProgress={scrollYProgress} />
            </div>
        </main>
    );
}

// Hero Layer
function HeroLayer({ scrollYProgress }: {scrollYProgress: any }) {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className="sticky top-0 h-screen bg-bg">
                <Hero />
        </motion.section>
    );
}

function AboutLayer({ scrollYProgress }: {scrollYProgress: any }) {
    const scale = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className="relative h-screen">
                <About />
        </motion.section>
    )
}