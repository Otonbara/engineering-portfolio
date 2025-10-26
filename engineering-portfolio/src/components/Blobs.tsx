'use client'
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Blobs() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll();

    const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 mix-blend-screen">
            <motion.div 
                className="absolute w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen blur-3xl animate-blob duration-20s delay-0s overflow-hidden"
                style={{
                    x: mousePos.x * 60,
                    translateY: mousePos.y * 60,
                    y: blob1Y,
                }}/>
            <motion.div 
                className="absolute w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen blur-3xl animate-blob duration-25s delay-2s top-1/3 left-1/4 overflow-hidden"
                style={{
                    x: mousePos.x * -50,
                    translateY: mousePos.y * 80,
                    y: blob2Y,
                }}/>
            <motion.div 
                className="absolute w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen blur-3xl animate-blob duration-30s delay-4s bottom-1/4 right-1/4 overflow-hidden"
                style={{
                    x: mousePos.x * 80,
                    translateY: mousePos.y * -60,
                    y: blob3Y,
                }}/>
        </div>
    )
}