import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Sun, 
  Utensils, 
  Camera,
  Train,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { useState } from "react";

interface TripItineraryProps {
  destination: string;
}

const itineraryData = [
  {
    day: 1,
    title: "Arrival & Shibuya Discovery",
    date: "April 1, 2024",
    estimatedCost: "₹8,500",
    activities: [
      { time: "09:00", activity: "Arrive at Narita Airport", type: "travel", duration: "2h" },
      { time: "11:30", activity: "Check-in at Shinjuku Hotel", type: "stay", duration: "1h" },
      { time: "13:00", activity: "Lunch at Ichiran Ramen", type: "food", duration: "1h" },
      { time: "14:30", activity: "Shibuya Crossing Experience", type: "attraction", duration: "2h" },
      { time: "17:00", activity: "Harajuku Street Exploration", type: "shopping", duration: "3h" },
      { time: "20:00", activity: "Dinner at Izakaya", type: "food", duration: "2h" },
    ],
  },
  {
    day: 2,
    title: "Traditional Tokyo & Temples",
    date: "April 2, 2024",
    estimatedCost: "₹7,200",
    activities: [
      { time: "07:00", activity: "Tsukiji Outer Market Breakfast", type: "food", duration: "2h" },
      { time: "09:30", activity: "Sensō-ji Temple Visit", type: "attraction", duration: "3h" },
      { time: "13:00", activity: "Traditional Japanese Lunch", type: "food", duration: "1.5h" },
      { time: "15:00", activity: "Tokyo National Museum", type: "culture", duration: "3h" },
      { time: "18:30", activity: "Ueno Park Evening Walk", type: "nature", duration: "1.5h" },
      { time: "20:30", activity: "Yakitori Dinner in Yurakucho", type: "food", duration: "2h" },
    ],
  },
  {
    day: 3,
    title: "Day Trip to Nikko",
    date: "April 3, 2024",
    estimatedCost: "₹9,800",
    activities: [
      { time: "07:00", activity: "Shinkansen to Nikko", type: "travel", duration: "2h" },
      { time: "09:30", activity: "Toshogu Shrine Tour", type: "attraction", duration: "3h" },
      { time: "12:30", activity: "Local Yuba Cuisine Lunch", type: "food", duration: "1.5h" },
      { time: "14:30", activity: "Kegon Falls Visit", type: "nature", duration: "2h" },
      { time: "17:00", activity: "Lake Chuzenji Boat Ride", type: "nature", duration: "1.5h" },
      { time: "19:00", activity: "Return to Tokyo", type: "travel", duration: "2h" },
    ],
  },
  {
    day: 4,
    title: "Modern Tokyo & Entertainment",
    date: "April 4, 2024",
    estimatedCost: "₹6,500",
    activities: [
      { time: "10:00", activity: "teamLab Borderless Museum", type: "attraction", duration: "3h" },
      { time: "13:30", activity: "Lunch in Odaiba", type: "food", duration: "1.5h" },
      { time: "15:30", activity: "Akihabara Electronics District", type: "shopping", duration: "3h" },
      { time: "19:00", activity: "Tokyo Tower Night View", type: "attraction", duration: "2h" },
      { time: "21:30", activity: "Roppongi Night Scene", type: "food", duration: "2h" },
    ],
  },
  {
    day: 5,
    title: "Departure Day",
    date: "April 5, 2024",
    estimatedCost: "₹3,000",
    activities: [
      { time: "08:00", activity: "Hotel Checkout", type: "stay", duration: "1h" },
      { time: "09:30", activity: "Last-minute Souvenir Shopping", type: "shopping", duration: "2h" },
      { time: "12:00", activity: "Airport Transfer", type: "travel", duration: "1.5h" },
      { time: "14:00", activity: "Departure from Narita", type: "travel", duration: "-" },
    ],
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "food": return Utensils;
    case "travel": return Train;
    case "attraction": return Camera;
    case "nature": return Sun;
    default: return MapPin;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "food": return "text-coral bg-coral/10";
    case "travel": return "text-sky bg-sky/10";
    case "attraction": return "text-primary bg-primary/10";
    case "nature": return "text-emerald bg-emerald/10";
    case "shopping": return "text-gold bg-gold/10";
    case "culture": return "text-primary bg-primary/10";
    default: return "text-muted-foreground bg-muted";
  }
};

export const TripItinerary = ({ destination }: TripItineraryProps) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const totalCost = itineraryData.reduce((sum, day) => {
    const cost = parseInt(day.estimatedCost.replace(/[₹,]/g, ''));
    return sum + cost;
  }, 0);

  return (
    <div className="space-y-6">
      {/* AI Reasoning Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display font-semibold">AI Trip Reasoning</h3>
            <p className="text-sm text-muted-foreground">How we crafted your perfect itinerary</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-background/50 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "Based on your <span className="text-primary font-medium">Food 🍽️</span> and <span className="text-primary font-medium">Culture 🏛️</span> interests, I've prioritized authentic culinary experiences and temple visits. 
            Your <span className="text-emerald font-medium">₹75,000 budget</span> allows for comfortable 3-star accommodations, local dining, and one premium day trip. 
            Activities are grouped by <span className="text-coral font-medium">proximity</span> to minimize transit time, with morning temple visits when crowds are lowest."
          </p>
        </div>
      </motion.div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Days" value="5 Days" icon={Clock} />
        <StatCard label="Estimated Cost" value={`₹${totalCost.toLocaleString()}`} icon={DollarSign} />
        <StatCard label="Activities" value="26" icon={Camera} />
        <StatCard label="Locations" value="15+" icon={MapPin} />
      </div>

      {/* Day-by-Day Itinerary */}
      <div className="space-y-4">
        {itineraryData.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden"
          >
            <button
              onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center text-white font-display font-bold">
                  {day.day}
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold">{day.title}</h3>
                  <p className="text-sm text-muted-foreground">{day.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-emerald bg-emerald/10 px-3 py-1 rounded-full">
                  {day.estimatedCost}
                </span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedDay === day.day ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {expandedDay === day.day && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4"
              >
                <div className="relative pl-6 border-l-2 border-primary/20 ml-6 space-y-4">
                  {day.activities.map((activity, actIndex) => {
                    const Icon = getActivityIcon(activity.type);
                    const colorClass = getActivityColor(activity.type);
                    
                    return (
                      <motion.div
                        key={actIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: actIndex * 0.05 }}
                        className="relative"
                      >
                        <div className={`absolute -left-[25px] w-4 h-4 rounded-full ${colorClass.split(' ')[1]} border-2 border-background`} />
                        <div className="p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div className={`w-8 h-8 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="font-medium">{activity.activity}</p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{activity.time}</span>
                                  <span>•</span>
                                  <span>{activity.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon }: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }) => (
  <div className="glass-card p-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-display font-bold text-lg">{value}</p>
      </div>
    </div>
  </div>
);
