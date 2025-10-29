import { motion } from "motion/react"

export default function Footer() {
    return (
        <footer
            id="footer"
            className="bg-bg relative p-6">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-text-secondary text-sm text-center">
                © {new Date().getFullYear()} Otonbara Alfred Okolai.
            </motion.p>
        </footer>
    )
}