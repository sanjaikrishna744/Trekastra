import { motion } from "framer-motion";
import { 
  FileText, 
  Plane, 
  CreditCard, 
  Hotel, 
  Shield, 
  Upload,
  Eye,
  Download,
  Wifi,
  WifiOff,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    id: 1,
    name: "Passport",
    type: "passport",
    icon: CreditCard,
    status: "uploaded",
    offline: true,
    expiry: "Dec 2028",
  },
  {
    id: 2,
    name: "Japan Visa",
    type: "visa",
    icon: Shield,
    status: "uploaded",
    offline: true,
    expiry: "Jul 2024",
  },
  {
    id: 3,
    name: "Flight Tickets",
    type: "ticket",
    icon: Plane,
    status: "uploaded",
    offline: true,
    details: "DEL → NRT | Apr 1",
  },
  {
    id: 4,
    name: "Hotel Booking",
    type: "hotel",
    icon: Hotel,
    status: "uploaded",
    offline: false,
    details: "Shinjuku Hotel | Apr 1-5",
  },
  {
    id: 5,
    name: "Travel Insurance",
    type: "insurance",
    icon: Shield,
    status: "pending",
    offline: false,
  },
  {
    id: 6,
    name: "Return Tickets",
    type: "ticket",
    icon: Plane,
    status: "uploaded",
    offline: true,
    details: "NRT → DEL | Apr 5",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "passport": return "from-primary to-teal";
    case "visa": return "from-emerald to-primary";
    case "ticket": return "from-coral to-gold";
    case "hotel": return "from-sky to-primary";
    case "insurance": return "from-primary to-coral";
    default: return "from-primary to-teal";
  }
};

export const DocumentVault = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold mb-1">Document Vault</h2>
            <p className="text-muted-foreground">Securely store and access your travel documents</p>
          </div>
          <Button variant="hero" className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>

        {/* Security Badge */}
        <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-emerald/10 border border-emerald/20">
          <Shield className="w-5 h-5 text-emerald" />
          <span className="text-sm font-medium text-emerald">End-to-End Encrypted</span>
          <span className="text-sm text-muted-foreground">• Your documents are secured with AES-256 encryption</span>
        </div>
      </motion.div>

      {/* Document Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-5 hover:scale-[1.02] transition-transform cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTypeColor(doc.type)} flex items-center justify-center shadow-lg`}>
                <doc.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                {doc.offline ? (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald/10 text-emerald text-xs">
                    <Check className="w-3 h-3" />
                    <span>Offline</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                    <WifiOff className="w-3 h-3" />
                    <span>Online only</span>
                  </div>
                )}
              </div>
            </div>

            <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {doc.name}
            </h3>
            
            {doc.expiry && (
              <p className="text-sm text-muted-foreground">Expires: {doc.expiry}</p>
            )}
            {doc.details && (
              <p className="text-sm text-muted-foreground">{doc.details}</p>
            )}

            {/* Status */}
            <div className="mt-4 flex items-center justify-between">
              {doc.status === "uploaded" ? (
                <span className="flex items-center gap-1 text-sm text-emerald">
                  <Check className="w-4 h-4" />
                  Uploaded
                </span>
              ) : (
                <span className="flex items-center gap-1 text-sm text-gold">
                  <Upload className="w-4 h-4" />
                  Pending
                </span>
              )}

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add Document Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-5 border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[200px] group"
        >
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
            <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">Add Document</p>
          <p className="text-sm text-muted-foreground mt-1">PDF, JPG, PNG</p>
        </motion.div>
      </div>
    </div>
  );
};
