import { useEffect, useState } from "react"
import ProfileImage from "../assets/temp-profile-picture.png"

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
        <section id="hero" className="relative overflow-hidden bg-bg min-h-screen">
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
            <div className="relative flex flex-col-reverse md:flex-row items-center justify-evenly gap-10 px-6 pt-24 md:px-24 z-20">
                {/* Text Section */}
                <div className="flex flex-col justify-center items-start text-left space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                        via-purple-400 to-blue-500 bg-clip-text text-transparent
                        inline-block overflow-hidden whitespace-nowrap pr-1
                        animate-typing">
                        OTONBARA ALFRED OKOLAI
                    </h1>
                    <h2 className="text-lg md:text-xl text-text-secondary">CIVIL & ENVIRONMENTAL ENGINEER</h2>
                    <h3 className="text-sm md:text-base text-text-secondary">BASED IN LAGOS, NIGERIA</h3>
                </div>
                {/* Image Section */}
                <div className="flex justify-center">
                    <img 
                        src={ProfileImage}
                        alt="Otonbara Alfred OKolai"
                        className="w-56 h-56 md:w-72 md:h-72 rounded-lg object-cover shadow-lg border-4 border-white/10
                                    transition-transform duration-700 hover:scale-105 hover:shadow-accent/30"/>
                    </div>
            </div>
        </section>
    )
}