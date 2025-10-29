import { motion } from "motion/react"

interface FolderIconProps {
  isHovered: boolean
}

export default function FolderIcon({ isHovered }: FolderIconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg">
      
      {/* Gradients */}
      <defs>
        <linearGradient id="folderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.4" />
        </linearGradient>
        
        <linearGradient id="tabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.5" />
        </linearGradient>
        
        <linearGradient id="lidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.5" />
        </linearGradient>
        
        <linearGradient id="lidGradientOpen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Folder Body */}
      <motion.path
        d="M10 40 L10 140 C10 145 12 150 17 150 L183 150 C188 150 190 145 190 140 L190 50 C190 45 188 40 183 40 L10 40 Z"
        fill="url(#folderGradient)"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
      
      {/* Folder Tab */}
      <motion.path
        d="M10 40 L10 25 C10 22 12 20 15 20 L70 20 C72 20 74 21 75 23 L85 40"
        fill="url(#tabGradient)"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
      
      {/* Folder Lid/Flap - Animates on hover */}
      <motion.g
        initial={{ originX: "50%", originY: "100%" }}
        animate={{
          rotateX: isHovered ? -35 : 0,
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "center bottom", transformStyle: "preserve-3d" }}>
        
        <motion.path
          d="M15 40 L185 40 C188 40 190 42 190 45 L190 55 C190 58 188 60 185 60 L15 60 C12 60 10 58 10 55 L10 45 C10 42 12 40 15 40 Z"
          fill="url(#lidGradient)"
          stroke="var(--color-accent)"
          strokeWidth="2"
          
          animate={{
            // This animation correctly transitions between the two gradient IDs
            fill: isHovered ? "url(#lidGradientOpen)" : "url(#lidGradient)" 
          }}
        />
        
        {/* Inner shadow when open */}
        {isHovered && (
          <motion.ellipse
            cx="100"
            cy="55"
            rx="85"
            ry="8"
            fill="rgba(0,0,0,0.2)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.g>
      
      {/* Folder accent line */}
      <motion.line
        x1="20"
        y1="70"
        x2="180"
        y2="70"
        stroke="var(--color-accent)"
        strokeWidth="1"
        animate={{
          opacity: isHovered ? 0.8 : 0.3
        }}
      />

      {/* Document */}
      <motion.g
        animate={{
            y: isHovered ? -25 : 0,
            opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "center"}}>
        
        <motion.rect
            x="65"
            y="80"
            width="70"
            height="90"
            fill="white"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            className="text-text-primary/40"
            rx="3"
        />
        {/*Document lines*/}
        <motion.line x1="75" y1="95" x2="125" y2="95" stroke="var(--color-accent)" strokeWidth="1" className="text-text-primary/30" />
        <motion.line x1="75" y1="105" x2="125" y2="105" stroke="var(--color-accent)" strokeWidth="1" className="text-text-primary/30" />
        <motion.line x1="75" y1="115" x2="120" y2="115" stroke="var(--color-accent)" strokeWidth="1" className="text-text-primary/30" />
      </motion.g>
    </svg>
  )
}