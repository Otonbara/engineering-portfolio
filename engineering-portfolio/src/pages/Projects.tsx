import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FolderIcon from "../components/FolderIcon";
import Project1 from "../assets/LEVERAGING_GIS_AND_SWMM.pdf";

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#project-gis-swmm") {
      setOpenProject(0);
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  const projectData = [
    {
      title: "Leveraging GIS & SWMM with Low Impact Development Techniques",
      subtitle: "Urban Drainage & Flood Mitigation - Opolo Housing Estate, Bayelsa",
      year: "Oct 2025",
      summary: `A sustainable stormwater management model integrating QGIS-based catchment analysis and EPA SWMM
                simulations to evaluate Low Impact Development (LID) strategies in flood-prone areas.`,
      highlights: [
        "Used QGIS to delineate catchment areas and extract topographical data for hydrological modeling.",
        "Developed SWMM models to simulate pre- and post-development stormwater runoff scenarios.",
        "Implemented LID measures (permeable pavements, rain barrels) reducing peak flow by 87%.",
      ],
      report: Project1,
    },
  ];

  // --- Carousel Scroll Functions ---
  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative bg-bg py-32 px-6 lg:px-24 z-30">
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
                via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left"
      >
        PROJECTS
      </motion.h2>

      {/* Carousel Controls */}
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute -left-3 md:-left-10 bg-accent/20 hover:bg-accent/40 p-2 rounded-full transition-all shadow-lg z-10"
        >
          <ChevronLeft className="text-text-primary w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-hidden pb-6 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide w-full"
        >
          {[...projectData, ...Array(3).fill("soon")].map((proj, index) => {
            const isComingSoon = proj === "soon";
            return (
              <motion.div
                key={index}
                onMouseEnter={() => !isComingSoon && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => !isComingSoon && setOpenProject(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative cursor-pointer snap-center flex flex-col items-center group 
                  ${
                    isComingSoon
                      ? "opacity-50 hover:opacity-80 cursor-default"
                      : "hover:opacity-100"
                  }
                  w-[85%] sm:w-[45%] md:w-[30%] lg:w-[22%] shrink-0`}
              >
                {/* Folder Icon */}
                <div className="w-48 h-40 mb-4">
                  <FolderIcon isHovered={!isComingSoon && hoveredIndex === index} />
                </div>

                {/* Project Info */}
                <div className="text-center px-4 max-w-60">
                  <h3 className="text-text-primary text-lg text-center line-clamp-2">
                    {isComingSoon ? "Coming Soon" : proj.title}
                  </h3>
                  <p className="text-sm text-text-secondary italic mt-2">
                    {isComingSoon ? "New Project" : proj.year}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute -right-3 md:-right-10 bg-accent/20 hover:bg-accent/40 p-2 rounded-full transition-all shadow-lg z-10"
        >
          <ChevronRight className="text-text-primary w-6 h-6" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openProject !== null && projectData[openProject] && (
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-40 p-4"
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-border rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative top-6 text-text-primary overflow-y-auto"
            >
              <h3 className="text-2xl mb-2">{projectData[openProject].title}</h3>
              <p className="text-sm mb-4">{projectData[openProject].subtitle}</p>

              <p className="text-base leading-relaxed mb-6">{projectData[openProject].summary}</p>

              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
                {projectData[openProject].highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex gap-5">
                <a
                  href={projectData[openProject].report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent px-6 py-2 rounded-xl font-medium hover:bg-accent/80 transition-all shadow-lg hover:shadow-xl"
                >
                  View Full Report
                </a>

                <button
                  onClick={() => {
                    setOpenProject(null);
                    history.replaceState(null, "", " ");
                  }}
                  className="inline-block bg-red-500 px-6 py-2 rounded-xl font-medium hover:bg-red-500/80 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}