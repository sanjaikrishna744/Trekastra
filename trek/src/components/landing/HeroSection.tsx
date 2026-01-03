import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Map, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-hero rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-accent rounded-full blur-3xl opacity-20"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,163,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,163,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-coral" />
          <span className="text-sm font-medium">AI-Powered Travel Intelligence</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Plan. Travel.</span>
          <br />
          <span className="text-foreground">Explore — </span>
          <span className="accent-gradient-text">Smarter.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Your AI-powered travel companion that crafts personalized itineraries, 
          manages budgets, and keeps you safe — all in one smart platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link to="/onboarding">
            <Button variant="hero" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="glass" size="xl">
              View Demo
            </Button>
          </Link>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <FeaturePill icon={<Map className="w-4 h-4" />} text="AI Itineraries" />
          <FeaturePill icon={<Wallet className="w-4 h-4" />} text="Budget Tracking" />
          <FeaturePill icon={<Globe className="w-4 h-4" />} text="Live Translation" />
        </motion.div>

        {/* Floating Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-gold" />
              <div className="w-3 h-3 rounded-full bg-emerald" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <PreviewCard
                title="Day 1: Tokyo"
                subtitle="Shibuya, Harajuku, Sensō-ji"
                tag="₹8,500"
                delay={0.6}
              />
              <PreviewCard
                title="Day 2: Kyoto"
                subtitle="Fushimi Inari, Arashiyama"
                tag="₹7,200"
                delay={0.7}
              />
              <PreviewCard
                title="Day 3: Osaka"
                subtitle="Dotonbori, Osaka Castle"
                tag="₹6,800"
                delay={0.8}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturePill = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm">
    <span className="text-primary">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const PreviewCard = ({ title, subtitle, tag, delay }: { title: string; subtitle: string; tag: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-colors cursor-pointer group"
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{title}</h3>
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald/10 text-emerald">{tag}</span>
    </div>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </motion.div>
);
