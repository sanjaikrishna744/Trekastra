import { motion } from "framer-motion";
import { MapPin, Calendar, Sparkles, Plane } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    step: "01",
    title: "Choose Destination",
    description: "Tell us where you want to go — a city, country, or let AI surprise you.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Set Preferences",
    description: "Pick your dates, budget, travel type, and interests like food, adventure, or culture.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "AI Creates Plan",
    description: "Our AI generates a personalized day-wise itinerary optimized for your needs.",
  },
  {
    icon: Plane,
    step: "04",
    title: "Travel Smart",
    description: "Track expenses, translate languages, share location, and enjoy your journey!",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How <span className="gradient-text">Trekastra</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to your perfect AI-planned adventure.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-coral to-emerald transform -translate-y-1/2 opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="font-display text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 mt-8 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
