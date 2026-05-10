import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="relative bg-bg py-32 px-6 lg:px-24 z-30">
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left"
      >
        PUBLICATIONS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary leading-tight">
              Analysis and Design of Sustainable Stormwater Management System in Ota, Ogun State, Nigeria
            </h3>
            <a
              href="https://www.jree.ir/article_236631_81e6b52d6b918751088574ed0082f2ca.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-accent" />
            </a>
          </div>

          <p className="text-text-secondary text-sm">
            Journal of Renewable Energy and Environment (JREE) • 2025
          </p>

          <p className="text-text-secondary/80 text-sm leading-relaxed">
            Adewoye Alade Olanipekun, Daniel Uwumarogie Idusuyi, Femi Alao, Opeyemi Bayode, Oluwatobi Oluwaseun Aiyelokun, Otonbara Alfred Okolai, John Igeimokhia Braimah
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mt-2">
            This study analyzed and designed sustainable stormwater management system in Ota, Nigeria to create Intensity-Duration-Frequency (IDF) curves, determine precipitation depths and corresponding discharge rates for 5, 10, 25, 50 and 100 years return periods.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Stormwater Management", "Rainfall Data", "Return Periods", "Climate Change", "Environmental Sustainability"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-text-secondary/60 text-xs mt-2">
            DOI: 10.30501/jree.2025.521859.2387
          </p>
        </div>
      </motion.div>
    </section>
  );
}