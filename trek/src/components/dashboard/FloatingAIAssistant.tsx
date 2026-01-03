import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles,
  Mic,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestions = [
  "Change my trip to 4 days",
  "Reduce budget by 15%",
  "Translate 'where is the station'",
  "Is Tokyo safe at night?",
];

const sampleResponses: Record<string, string> = {
  "Change my trip to 4 days": "I've adjusted your itinerary from 5 days to 4 days. Day 3 (Nikko day trip) has been merged with Day 4 activities. Your estimated total cost is now ₹65,000. Would you like me to optimize the schedule further?",
  "Reduce budget by 15%": "Done! I've reduced your budget from ₹75,000 to ₹63,750. Here are my suggestions: Switch to hostels (save ₹8,000), eat at convenience stores for breakfast (save ₹3,000), skip teamLab museum (save ₹3,200). This keeps all major experiences intact!",
  "Translate 'where is the station'": "駅はどこですか？(Eki wa doko desu ka?) - This is a polite way to ask for directions to the station. Most Japanese will point you in the right direction even if they don't speak English!",
  "Is Tokyo safe at night?": "Tokyo is one of the safest major cities in the world, even at night! Areas like Shibuya, Shinjuku, and Roppongi are well-lit and patrolled. Just use common sense: stay in populated areas and keep your belongings secure. Emergency: 110 (police).",
};

export const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: "Hi! I'm your AI travel assistant. Ask me anything about your trip — change plans, translate phrases, or get local tips! 🌍" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const response = sampleResponses[userMessage] || 
        "I understand you're asking about \"" + userMessage + "\". In a full implementation, I would use AI to provide a helpful response. For now, try one of the suggested questions!";
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);
  };

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
    handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-hero shadow-xl shadow-primary/30 flex items-center justify-center text-white z-50 ${isOpen ? 'hidden' : ''}`}
      >
        <MessageSquare className="w-6 h-6" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/30 -z-10"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] glass-card flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-gradient-hero text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">AI Assistant</h3>
                  <p className="text-xs text-white/70">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-hero text-white rounded-br-md'
                        : 'bg-muted rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestion(suggestion)}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-full"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                >
                  <Mic className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleSend}
                  variant="hero"
                  size="icon"
                  className="shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
