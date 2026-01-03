import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Calendar, 
  Wallet, 
  Users, 
  Heart, 
  ArrowRight, 
  ArrowLeft,
  Compass,
  UtensilsCrossed,
  Mountain,
  Landmark,
  TreePine,
  ShoppingBag,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OnboardingData {
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  travelType: string;
  interests: string[];
}

const travelTypes = [
  { id: "solo", label: "Solo", icon: "🧳" },
  { id: "friends", label: "Friends", icon: "👥" },
  { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
  { id: "couple", label: "Couple", icon: "💑" },
];

const interests = [
  { id: "food", label: "Food", icon: UtensilsCrossed, emoji: "🍽️" },
  { id: "adventure", label: "Adventure", icon: Mountain, emoji: "🏔️" },
  { id: "culture", label: "Culture", icon: Landmark, emoji: "🏛️" },
  { id: "nature", label: "Nature", icon: TreePine, emoji: "🌿" },
  { id: "shopping", label: "Shopping", icon: ShoppingBag, emoji: "🛍️" },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelType: "",
    interests: [],
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Navigate to dashboard with data
      navigate("/dashboard", { state: data });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleInterest = (id: string) => {
    setData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return data.destination.length > 0;
      case 2: return data.startDate && data.endDate;
      case 3: return data.budget.length > 0;
      case 4: return data.travelType.length > 0;
      case 5: return data.interests.length > 0;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-hero rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-accent rounded-full blur-3xl opacity-15"
        />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg shadow-primary/30">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl font-bold gradient-text">Trekastra</span>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
            <span className="text-sm font-medium text-primary">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-hero"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="glass-card p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <StepContent key="step1" title="Where do you want to go?" subtitle="Enter a city, country, or type 'Anywhere' for surprise!">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    value={data.destination}
                    onChange={(e) => setData({ ...data, destination: e.target.value })}
                    placeholder="e.g., Tokyo, Japan"
                    className="pl-12 h-14 text-lg rounded-xl"
                  />
                </div>
              </StepContent>
            )}

            {step === 2 && (
              <StepContent key="step2" title="When are you traveling?" subtitle="Select your travel dates">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="date"
                        value={data.startDate}
                        onChange={(e) => setData({ ...data, startDate: e.target.value })}
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">End Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="date"
                        value={data.endDate}
                        onChange={(e) => setData({ ...data, endDate: e.target.value })}
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </StepContent>
            )}

            {step === 3 && (
              <StepContent key="step3" title="What's your budget?" subtitle="Enter your total trip budget">
                <div className="relative">
                  <Wallet className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="number"
                    value={data.budget}
                    onChange={(e) => setData({ ...data, budget: e.target.value })}
                    placeholder="e.g., 50000"
                    className="pl-12 h-14 text-lg rounded-xl"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
                </div>
              </StepContent>
            )}

            {step === 4 && (
              <StepContent key="step4" title="Who's traveling?" subtitle="Select your travel type">
                <div className="grid grid-cols-2 gap-4">
                  {travelTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setData({ ...data, travelType: type.id })}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        data.travelType === type.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="text-3xl mb-2 block">{type.icon}</span>
                      <span className="font-medium">{type.label}</span>
                    </motion.button>
                  ))}
                </div>
              </StepContent>
            )}

            {step === 5 && (
              <StepContent key="step5" title="What are your interests?" subtitle="Select all that apply">
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <motion.button
                      key={interest.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                        data.interests.includes(interest.id)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="text-2xl">{interest.emoji}</span>
                      <span className="font-medium">{interest.label}</span>
                    </motion.button>
                  ))}
                </div>
              </StepContent>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              variant="hero"
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2"
            >
              {step === totalSteps ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Trip
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const StepContent = ({ 
  children, 
  title, 
  subtitle 
}: { 
  children: React.ReactNode; 
  title: string; 
  subtitle: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="font-display text-2xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground mb-6">{subtitle}</p>
    {children}
  </motion.div>
);
