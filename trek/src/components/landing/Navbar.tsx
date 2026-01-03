import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold gradient-text">
              Trekastra
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#ai">AI Tech</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/onboarding">
              <Button variant="hero" size="lg">
                Start Planning
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-card mt-2 p-4 flex flex-col gap-4"
          >
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#how-it-works" mobile>How it Works</NavLink>
            <NavLink href="#ai" mobile>AI Tech</NavLink>
            <Link to="/onboarding" className="w-full">
              <Button variant="hero" className="w-full">
                Start Planning
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <a
    href={href}
    className={`font-medium text-muted-foreground hover:text-foreground transition-colors ${
      mobile ? "text-lg py-2" : ""
    }`}
  >
    {children}
  </a>
);
