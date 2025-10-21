import { Home, GraduationCap, Briefcase, FolderGit2, Wrench, Mail, } from "lucide-react";

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "#hero", icon: Home },
        { name: "Education", href: "#education", icon: GraduationCap },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Projects", href: "#projects", icon: FolderGit2 },
        { name: "Skills", href: "#skills", icon: Wrench },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div
                className="px-4 md:px-8 py-3 flex items-center justify-center gap-6 
                backdrop-blur-md bg-surface/90 border border-white/20 rounded-full shadow-md shadow-surface
                overflow-x-auto no-scrollbar">
                <ul className="flex items-center gap-6 text-sm text-text-primary font-semibold whitespace-nowrap">
                    {navLinks.map(({ name, href, icon: Icon }) => (
                        <li key={name}>
                            <a
                                href={href}
                                className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
                                {/* Show icons only on mobile */}
                                <Icon className="md:hidden text-text-primary" size={20} strokeWidth={2} />
                                <span className="hidden md:inline">{name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}