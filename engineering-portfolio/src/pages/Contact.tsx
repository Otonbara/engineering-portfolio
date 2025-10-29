import { motion } from "motion/react"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-bg py-32 px-6 lg:px-24 z-20 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold bg-linear-to-r from-accent 
                   via-purple-400 to-accent2 bg-clip-text text-transparent mb-16 text-center md:text-left w-full"
      >
        CONTACT
      </motion.h2>

      {/* Contact Section Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Left side — Phrase */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left md:w-1/2"
        >
          <h3 className="text-2xl mb-3 text-text-primary">
            Let’s engineer a better environment.
          </h3>
          <motion.div
            className="h-[3px] w-24 bg-linear-to-r from-accent to-accent2 rounded-full mb-5"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            My main goal is to translate requirement into accurate, long-lasting infrastructure. 
            Contact me right now for projects including flood resilience, water management, or GIS modeling.
          </p>
        </motion.div>

        {/* Right side — Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row md:flex-row gap-10 md:w-1/2 justify-center items-center md:items-end"
        >
          {/* Email */}
          <motion.a
            href="mailto:alfredokolai@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center justify-center gap-3 bg-accent/10 hover:bg-accent/20 
                       px-5 py-3 rounded-xl border border-accent/30 transition-all shadow-sm 
                       hover:shadow-accent/30 overflow-hidden w-full sm:w-auto"
          >
            <motion.span
              className="absolute inset-0 rounded-xl bg-linear-to-r from-accent/30 to-accent/10"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Mail className="w-25 h-25 text-text-primary z-10" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/otonbaraokolai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center justify-center gap-3 bg-accent/10 hover:bg-accent/20 
                       px-5 py-3 rounded-xl border border-accent/30 transition-all shadow-sm 
                       hover:shadow-accent/30 overflow-hidden w-full sm:w-auto"
          >
            <motion.span
              className="absolute inset-0 rounded-xl bg-linear-to-r from-accent/30 to-accent2/20"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, delay: 1.25, repeat: Infinity, ease: "easeInOut" }}
            />
            <Linkedin className="w-25 h-25 text-text-primary z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}