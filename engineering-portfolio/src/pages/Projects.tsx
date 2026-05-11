import { useState } from "react";
import { motion } from "motion/react";
import FloodMap from "../src/assets/Flood_Susceptibility_Report.pdf";
import GIS from "../src/assets/LEVERAGING_GIS_AND_SWMM.pdf"

interface Tag {
  label: string;
  color: "blue" | "yellow" | "green" | "purple";
}

interface Metric {
  value: string;
  label: string;
}

interface Project {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: Tag[];
  metrics: Metric[];
  tools: string[];
  highlights: string[];
  liveUrl?: string;
  reportUrl?: string;
  category: string;
}

const tagColors: Record<Tag["color"], string> = {
  blue: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
  yellow: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
  green: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  purple: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
};

const projects: Project[] = [
  {
    id: "flood-susceptibility",
    year: "May 2026",
    title: "Flood Susceptibility Mapping",
    subtitle: "Bayelsa State, Nigeria",
    category: "Machine Learning · Remote Sensing",
    description:
      "An end-to-end machine learning pipeline for pixel-level flood vulnerability mapping across Bayelsa State using freely available satellite and climate datasets — processed entirely on Google Earth Engine without proprietary tools.",
    tags: [
      { label: "Random Forest", color: "blue" },
      { label: "Google Earth Engine", color: "green" },
      { label: "Sentinel-1 SAR", color: "yellow" },
      { label: "CHIRPS Rainfall", color: "blue" },
      { label: "React Dashboard", color: "purple" },
    ],
    metrics: [
      { value: "0.9971", label: "AUC-ROC" },
      { value: "98%", label: "Flood Recall" },
      { value: "0.9367", label: "Cohen's Kappa" },
      { value: "70,026", label: "Training Samples" },
    ],
    tools: [
      "Google Earth Engine",
      "Python (scikit-learn)",
      "SMOTE Oversampling",
      "Sentinel-1 SAR",
      "CHIRPS v2",
      "USGS SRTM",
      "MODIS",
      "JRC Global Surface Water",
      "React 18 + Vite",
      "Leaflet.js",
      "Vercel",
    ],
    highlights: [
      "Flood inventory generated from Sentinel-1 SAR using Otsu automated thresholding (−17.05 dB) and UN-SPIDER post-classification refinement",
      "SMOTE oversampling corrected severe class imbalance (5.5% flood prevalence) to produce 70,026 balanced training samples",
      "Distance to river (MDI = 0.198) and elevation (MDI = 0.187) emerged as the two dominant predictors — physically consistent with Niger Delta lateral inundation",
      "Deployed as an interactive choropleth dashboard on Vercel with Nominatim location search and model diagnostics panel",
    ],
    liveUrl: "https://bayelsa-flood-dashboard.vercel.app/",
    reportUrl: FloodMap,
  },
  {
    id: "lid-swmm",
    year: "October 2025",
    title: "GIS & SWMM Urban Drainage Analysis",
    subtitle: "Opolo Housing Estate, Yenagoa",
    category: "Hydrologic Modelling · LID Design",
    description:
      "A hydrologic-hydraulic assessment of stormwater drainage performance at a 15.23-hectare urban estate in Yenagoa, evaluating the impact of Low Impact Development (LID) retrofits against a conventional grey-infrastructure baseline using EPA SWMM and QGIS.",
    tags: [
      { label: "EPA SWMM", color: "blue" },
      { label: "QGIS", color: "green" },
      { label: "LID Design", color: "yellow" },
      { label: "Stormwater", color: "purple" },
    ],
    metrics: [
      { value: "87%", label: "Peak Flow Reduction" },
      { value: "86%", label: "Runoff Volume Reduction" },
      { value: "15.23 ha", label: "Study Area" },
      { value: "9", label: "Sub-catchments" },
    ],
    tools: [
      "EPA SWMM",
      "QGIS",
      "USGS DEM (30m)",
      "IDF Curve Analysis",
      "Alternating Block Method",
      "Dynamic Wave Routing",
      "Horton Infiltration Model",
    ],
    highlights: [
      "10-year, 120-minute design storm (66 mm depth) developed via log-log IDF interpolation and alternating block hyetograph method",
      "Nine sub-catchments delineated from 30m DEM in QGIS; impervious fractions computed per catchment from roof and pavement areas",
      "Permeable pavements (273 m² avg per unit) and rain barrels (202 m² roof coverage) modelled as distributed LID controls across all sub-catchments",
      "Peak outfall discharge reduced from 1.058 m³/s to 0.140 m³/s; final surface storage increased by over 40× under the LID scenario",
    ],
    reportUrl: GIS,
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MetricCard({ value, label }: Metric) {
  return (
    <div className="flex-1 basis-[90px] rounded-[10px] border border-blue-500/20 bg-blue-500/[0.07] px-4 py-3 text-center">
      <div className="font-BBH text-[1.35rem] font-bold leading-tight tracking-tight text-blue-400">
        {value}
      </div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-widest text-gray-400">
        {label}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={project.id}
      className={`overflow-hidden rounded-2xl border bg-surface transition-all duration-300 ${
        expanded
          ? "border-blue-500/40 shadow-[0_0_0_1px_rgba(59,130,246,0.35),0_8px_40px_rgba(0,0,0,0.45)]"
          : "border-border shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:border-blue-500/40"
      }`}
    >
      {/* Top accent stripe */}
      <div
        className={`h-[3px] ${
          project.liveUrl
            ? "bg-linear-to-r from-blue-500 via-blue-400 to-yellow-400"
            : "bg-linear-to-r from-blue-500 via-blue-400 to-indigo-400"
        }`}
      />

      <div className="px-7 pt-7">
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          {/* Title block */}
          <div className="flex-1">
            <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-widest text-yellow-300">
                {project.year}
              </span>
              <span className="text-[0.7rem] tracking-wide text-gray-400">
                {project.category}
              </span>
            </div>
            <h3 className="font-BBH text-[1.35rem] font-bold leading-tight tracking-tight text-gray-50">
              {project.title}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-blue-400">
              {project.subtitle}
            </p>
          </div>

          {/* Action buttons */}
          {(project.liveUrl || project.reportUrl) && (
            <div className="flex flex-col md:flex-row shrink-0 flex-wrap gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-500/15 px-4 py-2 text-[0.8rem] font-semibold text-blue-400 transition-all duration-200 hover:border-blue-400/70 hover:bg-blue-500/25 hover:text-blue-300"
                >
                  <ExternalLinkIcon />
                  Live Dashboard
                </a>
              )}
              {project.reportUrl && (
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-yellow-400/30 bg-yellow-400/8 px-4 py-2 text-[0.8rem] font-semibold text-yellow-300 transition-all duration-200 hover:border-yellow-400/60 hover:bg-yellow-400/18 hover:text-yellow-200"
                >
                  <FileTextIcon />
                  Technical Report
                </a>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-[0.88rem] leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tag pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-2.5 py-0.5 text-[0.72rem] font-semibold tracking-wide ${tagColors[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mb-5 mt-4 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between border-t border-border bg-transparent px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-widest text-gray-400 transition-all duration-200 hover:bg-white/3 hover:text-gray-50"
      >
        <span>{expanded ? "Hide Details" : "View Details"}</span>
        <ChevronIcon open={expanded} />
      </button>

      {/* Expanded details panel */}
      <div
        className={`overflow-hidden transition-all duration-400 ${
          expanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-6 border-t border-border px-7 py-6 sm:grid-cols-2">
          {/* Key Highlights */}
          <div>
            <h4 className="mb-3.5 font-BBH text-[0.8rem] font-bold uppercase tracking-widest text-gray-50">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[0.82rem] leading-relaxed text-gray-400"
                >
                  <span className="mt-px shrink-0 font-bold text-blue-500">
                    ›
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h4 className="mb-3.5 font-BBH text-[0.8rem] font-bold uppercase tracking-widest text-gray-50">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-bg px-2.5 py-1 text-[0.72rem] font-medium text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-bg py-32 px-6 lg:px-24 z-20">

      <div className="relative mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent
              via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left"
          >
            PROJECTS
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
