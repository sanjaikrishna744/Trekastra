import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Users, 
  Phone, 
  Shield, 
  Eye, 
  EyeOff,
  Share2,
  Navigation,
  AlertCircle,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const contacts = [
  { id: 1, name: "Mom", phone: "+91 98765 43210", avatar: "👩", sharing: true },
  { id: 2, name: "Best Friend", phone: "+91 87654 32109", avatar: "👤", sharing: true },
  { id: 3, name: "Travel Partner", phone: "+91 76543 21098", avatar: "🧑", sharing: false },
];

export const LiveLocation = () => {
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [sharingContacts, setSharingContacts] = useState(contacts);

  const toggleContactSharing = (id: number) => {
    setSharingContacts(prev => 
      prev.map(c => c.id === id ? { ...c, sharing: !c.sharing } : c)
    );
  };

  return (
    <div className="space-y-6">
      {/* Main Location Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              locationEnabled ? 'bg-gradient-hero' : 'bg-muted'
            }`}>
              <MapPin className={`w-6 h-6 ${locationEnabled ? 'text-white' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold">Live Location Sharing</h2>
              <p className="text-sm text-muted-foreground">
                {locationEnabled ? 'Your location is being shared' : 'Location sharing is off'}
              </p>
            </div>
          </div>
          <Switch 
            checked={locationEnabled} 
            onCheckedChange={setLocationEnabled}
          />
        </div>

        {/* Map Preview */}
        <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-br from-primary/5 to-coral/5 border border-border">
          {/* Mock Map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulse Animation */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-primary/30"
              />
              <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-lg shadow-primary/30 relative z-10">
                <Navigation className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          {/* Location Label */}
          <div className="absolute bottom-4 left-4 glass-card px-4 py-2">
            <p className="font-medium">Shibuya Crossing, Tokyo</p>
            <p className="text-sm text-muted-foreground">Last updated: 2 min ago</p>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            {locationEnabled ? (
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald/10 text-emerald text-sm font-medium">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald"
                />
                Live
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                <EyeOff className="w-4 h-4" />
                Hidden
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Sharing With */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Sharing With
          </h3>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
            Invite
          </Button>
        </div>

        <div className="space-y-3">
          {sharingContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                  {contact.avatar}
                </div>
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {contact.sharing ? (
                  <span className="flex items-center gap-1 text-sm text-emerald">
                    <Eye className="w-4 h-4" />
                    Can see you
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <EyeOff className="w-4 h-4" />
                    Hidden
                  </span>
                )}
                <Switch
                  checked={contact.sharing}
                  onCheckedChange={() => toggleContactSharing(contact.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 border-coral/30"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-coral" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold mb-1">Emergency Contact</h3>
            <p className="text-sm text-muted-foreground mb-4">
              In case of emergency, your location will be automatically shared with this contact.
            </p>
            <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                  👩
                </div>
                <div>
                  <p className="font-medium">Mom</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <Check className="w-5 h-5 text-emerald" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Safety Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="font-display font-semibold">Safety Tips for Tokyo</h3>
        </div>
        <div className="space-y-3">
          {[
            "Japan is one of the safest countries — but stay aware in crowded areas",
            "Emergency number: 110 (Police) or 119 (Fire/Ambulance)",
            "Most locals don't speak English — use the translator feature",
            "Carry cash — many places don't accept cards",
          ].map((tip, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
