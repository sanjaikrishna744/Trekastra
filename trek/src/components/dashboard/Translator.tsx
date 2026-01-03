import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  ArrowRightLeft, 
  Volume2, 
  Copy, 
  Check,
  MessageSquare,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
];

const commonPhrases = [
  { en: "Hello", ja: "こんにちは (Konnichiwa)", category: "Greetings" },
  { en: "Thank you", ja: "ありがとうございます (Arigatou gozaimasu)", category: "Greetings" },
  { en: "Excuse me", ja: "すみません (Sumimasen)", category: "Polite" },
  { en: "Where is the bathroom?", ja: "トイレはどこですか？ (Toire wa doko desu ka?)", category: "Essential" },
  { en: "How much is this?", ja: "これはいくらですか？ (Kore wa ikura desu ka?)", category: "Shopping" },
  { en: "I don't understand", ja: "わかりません (Wakarimasen)", category: "Essential" },
  { en: "Please help me", ja: "助けてください (Tasukete kudasai)", category: "Emergency" },
  { en: "The bill, please", ja: "お会計お願いします (Okaikei onegaishimasu)", category: "Restaurant" },
];

export const Translator = () => {
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("ja");
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  // Mock translation (in real app, this would call an API)
  const getTranslation = () => {
    if (!inputText) return "";
    // Simple mock - in reality this would use an AI translation API
    const phrase = commonPhrases.find(
      p => p.en.toLowerCase() === inputText.toLowerCase()
    );
    if (phrase) return phrase.ja;
    return "翻訳されたテキスト (Translated text would appear here)";
  };

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const copyTranslation = () => {
    navigator.clipboard.writeText(getTranslation());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fromLanguage = languages.find(l => l.code === fromLang)!;
  const toLanguage = languages.find(l => l.code === toLang)!;

  return (
    <div className="space-y-6">
      {/* Main Translator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">AI Translator</h2>
            <p className="text-sm text-muted-foreground">Real-time language translation</p>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-4 mb-4">
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-background border border-border text-sm font-medium cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={swapLanguages}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </motion.button>

          <select
            value={toLang}
            onChange={(e) => setToLang(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-background border border-border text-sm font-medium cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input/Output */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">
              {fromLanguage.flag} {fromLanguage.name}
            </label>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste text to translate..."
              className="min-h-[150px] resize-none rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">
              {toLanguage.flag} {toLanguage.name}
            </label>
            <div className="relative">
              <div className="min-h-[150px] p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-lg font-medium">
                  {getTranslation() || "Translation will appear here..."}
                </p>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={copyTranslation}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Common Phrases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h3 className="font-display font-semibold">Essential Japanese Phrases</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {commonPhrases.map((phrase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors cursor-pointer group"
              onClick={() => setInputText(phrase.en)}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {phrase.category}
                </span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Volume2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
              </div>
              <p className="font-medium mb-1">{phrase.en}</p>
              <p className="text-sm text-primary">{phrase.ja}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Saved Phrases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-gold" />
            <h3 className="font-display font-semibold">Saved Phrases</h3>
          </div>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </div>

        <div className="text-center py-8 text-muted-foreground">
          <Star className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p>No saved phrases yet</p>
          <p className="text-sm">Star phrases to save them for quick access</p>
        </div>
      </motion.div>
    </div>
  );
};
