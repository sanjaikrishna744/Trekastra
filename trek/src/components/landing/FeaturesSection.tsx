import { motion } from "framer-motion";
import { 
  Map, 
  Wallet, 
  Globe, 
  MapPin, 
  FileText, 
  Camera, 
  Shield, 
  MessageSquare,
  ArrowRightLeft
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "AI Trip Planner",
    description: "Smart day-wise itineraries tailored to your budget, interests, and travel style.",
    color: "from-primary to-teal",
  },
  {
    icon: MapPin,
    title: "Live Location Sharing",
    description: "Real-time tracking with family & emergency contacts for peace of mind.",
    color: "from-coral to-gold",
  },
  {
    icon: Wallet,
    title: "Budget Tracker",
    description: "Visual expense tracking with AI alerts when you're exceeding limits.",
    color: "from-emerald to-primary",
  },
  {
    icon: Globe,
    title: "AI Translator",
    description: "Real-time language translation for local phrases and emergencies.",
    color: "from-sky to-primary",
  },
  {
    icon: FileText,
    title: "Document Vault",
    description: "Secure storage for passports, visas, tickets, and bookings.",
    color: "from-primary to-navy",
  },
  {
    icon: ArrowRightLeft,
    title: "Currency Converter",
    description: "Real-time conversion with auto-detect for destination currencies.",
    color: "from-gold to-coral",
  },
  {
    icon: Camera,
    title: "Media Capture",
    description: "Capture and organize travel memories in your trip timeline.",
    color: "from-coral to-primary",
  },
  {
    icon: Shield,
    title: "Safety Intelligence",
    description: "Local safety tips, cultural guidance, and emergency assistance.",
    color: "from-emerald to-teal",
  },
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Chat with AI to modify plans, translate, or get instant help.",
    color: "from-primary to-coral",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Travel Smart</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered planning to real-time safety — all your travel needs in one beautiful app.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:scale-[1.02] transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
