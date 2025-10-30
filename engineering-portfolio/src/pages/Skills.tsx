/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react"
import { useState } from "react"
import { Brain, Users, BarChart } from "lucide-react"
import AutoCAD from "../assets/AutoCad.svg"
import QGIS from "../assets/QGIS.svg"
import SWMM from "../assets/SWMM.png"
import SketchUp from "../assets/SketchUp.svg"
import Tekla from "../assets/Tekla.svg"
import Excel from "../assets/Excel.svg"

export default function Skills() {
  const technicalSkills = [
    { 
      name: "AutoCAD", 
      icon: AutoCAD,
      tooltip: "Creating precise 2D and 3D drawings, models, and blueprints for site plans and infrastructure." 
    },
    { 
      name: "QGIS", 
      icon: QGIS,
      tooltip: "Advanced geospatial data analysis, catchment delineation, and topographical data extraction for modeling." 
    },
    { 
      name: "EPA SWMM", 
      icon: SWMM,
      tooltip: "Hydrologic-hydraulic modeling for the planning, analysis, and design of sustainable urban drainage systems (SUDS)." 
    },
    { 
      name: "SketchUp", 
      icon: SketchUp,
      tooltip: "Quickly creating conceptual 3D models and visualizations for early project planning and communication." 
    },
    { 
      name: "Tekla Tedds", 
      icon: Tekla,
      tooltip: "Automating and streamlining repetitive calculations for structural designs involving steel, concrete, and timber." 
    },
    { 
      name: "Microsoft Excel", 
      icon: Excel,
      tooltip: "Proficient in organizing, calculating, and analyzing project data, quantities, and budgets using complex formulas." 
    },
  ]

  const softSkills = [
    { name: "Analytical Thinking", icon: <Brain className="w-6 h-6" /> },
    { name: "Team Collaboration", icon: <Users className="w-6 h-6" /> },
    { name: "Technical Reporting", icon: <BarChart className="w-6 h-6" /> },
    { name: "Problem Solving", icon: <Brain className="w-6 h-6" /> },
  ]

  return (
    <section id="skills" className="relative bg-bg py-32 px-6 lg:px-24 z-20">
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
          via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left"
      >
        SKILLS
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl text-text-primary mb-6 border-b border-accent/30 pb-2">
            Technical Software & Tools
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {technicalSkills.map((skill, i) => (
              <FlipCard key={i} skill={skill} />
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-xl text-text-primary mb-6 border-b border-accent/30 pb-2">
            Professional Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)", 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex items-center gap-3 bg-surface border border-border rounded-xl p-4 shadow-md hover:shadow-accent/30 transition-all"
              >
                <div className="text-accent">{skill.icon}</div>
                <span className="text-sm font-medium text-text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FlipCard({ skill }: any) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full h-40 perspective-1000"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Card Inner */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full h-full rounded-xl shadow-md border border-border bg-surface preserve-3d"
        style={{ transformStyle: "preserve-3d" }} 
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 rounded-xl backface-hidden"> 
          <motion.img
            src={skill.icon}
            alt={skill.name}
            className="w-20 h-20 object-contain mb-2 bg-white/60 p-4 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <span className="text-sm font-medium text-text-primary">
            {skill.name}
          </span>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 flex items-center justify-center p-4 rounded-xl bg-accent/10 border border-accent/30 text-center backface-hidden rotateY-180">
          <span className="text-xs text-text-primary font-medium leading-snug px-2">
            {skill.tooltip}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}