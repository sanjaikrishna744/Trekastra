import { motion } from "framer-motion";
import { Compass, Code, Database, Cpu, Cloud } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-lg font-semibold mb-6 text-muted-foreground">
            Built With Modern Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge icon={<Code className="w-4 h-4" />} text="React + TypeScript" />
            <TechBadge icon={<Cpu className="w-4 h-4" />} text="Gemini AI" />
            <TechBadge icon={<Database className="w-4 h-4" />} text="Secure Storage" />
            <TechBadge icon={<Cloud className="w-4 h-4" />} text="Cloud APIs" />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold gradient-text">Trekastra</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Trekastra. Built for Hackathon Demo.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TechBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
    <span className="text-primary">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);
