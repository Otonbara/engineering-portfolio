export default function Hero () {
    return (
        <section id="hero" className="bg-bg flex flex-col-reverse md:flex-row items-center justify-center 
                            gap-10 px-6 md:px-24 min-h-screen">
            {/* Text Section */}
            <div className="flex flex-col justify-center items-start text-left space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                    via-purple-400 to-blue-500 bg-clip-text text-transparent
                    inline-block overflow-hidden whitespace-nowrap pr-1
                    animate-typing">
                    OTONBARA ALFRED OKOLAI
                </h1>
                <h2 className="text-lg md:text-xl text-text-secondary">CIVIL & ENVIRONMENTAL ENGINEER</h2>
                <h3 className="text-sm md:text-base text-text-secondary">BASED IN LAGOS, NIGERIA</h3>
            </div>
        </section>
    )
}