import { motion } from "framer-motion";
import { Glasses, TrendingUp, Users, Rocket } from "lucide-react";

const futureFeatures = [
  {
    icon: Glasses,
    title: "AR Navigation",
    description: "Augmented reality walking directions overlaid on your camera view.",
    status: "Coming Soon",
  },
  {
    icon: TrendingUp,
    title: "Price Prediction",
    description: "AI predicts best time to book flights & hotels for maximum savings.",
    status: "In Development",
  },
  {
    icon: Users,
    title: "Group Collaboration",
    description: "Real-time trip planning with friends and family.",
    status: "Planned",
  },
];

export const FutureScopeSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-hero rounded-full blur-3xl opacity-10" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg shadow-coral/30">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold">Future Scope</h2>
                <p className="text-muted-foreground">What's coming next for Trekastra</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {futureFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {feature.status}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
