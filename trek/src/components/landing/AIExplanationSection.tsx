import { motion } from "framer-motion";
import { Brain, Target, MapPin, TrendingUp, Lightbulb, Zap } from "lucide-react";

const aiCapabilities = [
  {
    icon: Target,
    title: "User Preference Learning",
    description: "AI analyzes your travel style, interests, and past choices to create hyper-personalized recommendations.",
  },
  {
    icon: TrendingUp,
    title: "Budget Optimization",
    description: "Intelligent cost analysis ensures maximum experiences within your budget using real-time pricing data.",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Smart routing minimizes travel time while maximizing attraction visits based on proximity and timing.",
  },
  {
    icon: Lightbulb,
    title: "Context-Aware Decisions",
    description: "AI considers weather, local events, crowd patterns, and seasonal factors for optimal scheduling.",
  },
];

export const AIExplanationSection = () => {
  return (
    <section id="ai" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-hero rounded-full blur-3xl opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">AI Technology</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="gradient-text">Intelligent AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understand how our AI creates the perfect travel experience for you.
          </p>
        </motion.div>

        {/* AI Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {aiCapabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Example Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-hero rounded-full blur-3xl opacity-10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-coral" />
              <h3 className="font-display text-2xl font-bold">AI Reasoning Example</h3>
            </div>
            
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <p className="text-muted-foreground mb-4 italic">
                "Based on your preferences, I've designed this itinerary:"
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </span>
                  <span className="text-foreground">
                    <strong>Budget Match:</strong> Your ₹50,000 budget allows for 3-star hotels and local dining, maximizing experiences without overspending.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-coral">2</span>
                  </span>
                  <span className="text-foreground">
                    <strong>Interest Alignment:</strong> Selected food tours and cultural sites match your "Food 🍽️" and "Culture 🏛️" interests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-emerald">3</span>
                  </span>
                  <span className="text-foreground">
                    <strong>Route Optimization:</strong> Activities grouped by proximity reduce commute time by 40%.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
