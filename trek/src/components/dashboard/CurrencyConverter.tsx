import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, TrendingUp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const currencies = [
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭" },
];

// Mock exchange rates (base: INR)
const exchangeRates: Record<string, number> = {
  INR: 1,
  JPY: 1.81,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095,
  THB: 0.44,
};

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("JPY");

  const convert = (value: number, from: string, to: string) => {
    const inBase = value / exchangeRates[from];
    return inBase * exchangeRates[to];
  };

  const convertedAmount = convert(parseFloat(amount) || 0, fromCurrency, toCurrency);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const fromCurrencyData = currencies.find(c => c.code === fromCurrency)!;
  const toCurrencyData = currencies.find(c => c.code === toCurrency)!;

  return (
    <div className="space-y-6">
      {/* Main Converter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
            <ArrowRightLeft className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Currency Converter</h2>
            <p className="text-sm text-muted-foreground">Real-time exchange rates</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
          {/* From Currency */}
          <div className="space-y-3">
            <label className="text-sm text-muted-foreground">From</label>
            <div className="p-4 rounded-xl bg-background border border-border">
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full bg-transparent text-lg font-semibold mb-3 outline-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} - {c.name}
                  </option>
                ))}
              </select>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-3xl font-display font-bold border-0 p-0 h-auto focus-visible:ring-0"
                placeholder="0"
              />
            </div>
          </div>

          {/* Swap Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={swapCurrencies}
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors self-end mb-6"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </motion.button>

          {/* To Currency */}
          <div className="space-y-3">
            <label className="text-sm text-muted-foreground">To</label>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-transparent text-lg font-semibold mb-3 outline-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} - {c.name}
                  </option>
                ))}
              </select>
              <p className="text-3xl font-display font-bold text-primary">
                {toCurrencyData.symbol}{convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-muted/50">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald" />
            <span className="text-sm">
              1 {fromCurrencyData.code} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrencyData.code}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>
      </motion.div>

      {/* Quick Convert Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <h3 className="font-display font-semibold mb-4">Quick Reference for Japan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { inr: 100, label: "Snack" },
            { inr: 500, label: "Meal" },
            { inr: 1000, label: "Transport" },
            { inr: 5000, label: "Activity" },
          ].map((item) => {
            const jpy = convert(item.inr, "INR", "JPY");
            return (
              <div key={item.inr} className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-display font-bold text-lg">₹{item.inr}</p>
                <p className="text-primary font-medium">¥{Math.round(jpy)}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Popular Currencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <h3 className="font-display font-semibold mb-4">Today's Rates (Base: INR)</h3>
        <div className="space-y-3">
          {currencies.filter(c => c.code !== "INR").map((currency) => {
            const rate = exchangeRates[currency.code];
            return (
              <div
                key={currency.code}
                className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currency.flag}</span>
                  <div>
                    <p className="font-medium">{currency.code}</p>
                    <p className="text-sm text-muted-foreground">{currency.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-semibold">{currency.symbol}{rate.toFixed(4)}</p>
                  <p className="text-sm text-emerald">+0.12%</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
