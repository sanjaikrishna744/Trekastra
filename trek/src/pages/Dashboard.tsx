import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Map, 
  Wallet, 
  Globe, 
  FileText, 
  MapPin, 
  ArrowRightLeft,
  Share2,
  Download,
  Play,
  ChevronRight,
  Clock,
  DollarSign,
  Users,
  Star
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FloatingAIAssistant } from "@/components/dashboard/FloatingAIAssistant";
import { TripItinerary } from "@/components/dashboard/TripItinerary";
import { BudgetTracker } from "@/components/dashboard/BudgetTracker";
import { DocumentVault } from "@/components/dashboard/DocumentVault";
import { CurrencyConverter } from "@/components/dashboard/CurrencyConverter";
import { LiveLocation } from "@/components/dashboard/LiveLocation";
import { Translator } from "@/components/dashboard/Translator";

const navItems = [
  { id: "itinerary", icon: Map, label: "Itinerary" },
  { id: "budget", icon: Wallet, label: "Budget" },
  { id: "documents", icon: FileText, label: "Documents" },
  { id: "location", icon: MapPin, label: "Location" },
  { id: "translator", icon: Globe, label: "Translator" },
  { id: "currency", icon: ArrowRightLeft, label: "Currency" },
];

export default function Dashboard() {
  const location = useLocation();
  const tripData = location.state || {
    destination: "Tokyo, Japan",
    startDate: "2024-04-01",
    endDate: "2024-04-05",
    budget: "75000",
    travelType: "solo",
    interests: ["food", "culture", "nature"],
  };

  const [activeTab, setActiveTab] = useState("itinerary");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold gradient-text">Trekastra</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Save Trip
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Trip Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {tripData.destination}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  {tripData.startDate} - {tripData.endDate}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-emerald" />
                  ₹{Number(tripData.budget).toLocaleString()} Budget
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-coral" />
                  {tripData.travelType.charAt(0).toUpperCase() + tripData.travelType.slice(1)} Trip
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {tripData.interests.map((interest: string) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium capitalize"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Mode Badge */}
          <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-coral/10 border border-coral/20">
            <Play className="w-5 h-5 text-coral" />
            <span className="text-sm font-medium text-coral">Demo Mode Active</span>
            <span className="text-sm text-muted-foreground">• Showing sample data for hackathon preview</span>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === item.id
                  ? "bg-gradient-hero text-white shadow-lg shadow-primary/30"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "itinerary" && <TripItinerary destination={tripData.destination} />}
          {activeTab === "budget" && <BudgetTracker budget={tripData.budget} />}
          {activeTab === "documents" && <DocumentVault />}
          {activeTab === "location" && <LiveLocation />}
          {activeTab === "translator" && <Translator />}
          {activeTab === "currency" && <CurrencyConverter />}
        </motion.div>
      </div>

      {/* Floating AI Assistant */}
      <FloatingAIAssistant />
    </div>
  );
}
