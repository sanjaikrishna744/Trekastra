import { motion } from "framer-motion";
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  Home,
  Utensils,
  Train,
  Camera,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface BudgetTrackerProps {
  budget: string;
}

const expenses = [
  { category: "Stay", amount: 18000, icon: Home, color: "#0EA5E9" },
  { category: "Food", amount: 12500, icon: Utensils, color: "#F97316" },
  { category: "Transport", amount: 8200, icon: Train, color: "#22C55E" },
  { category: "Activities", amount: 15800, icon: Camera, color: "#8B5CF6" },
];

const dailySpending = [
  { day: "Day 1", amount: 8500 },
  { day: "Day 2", amount: 7200 },
  { day: "Day 3", amount: 9800 },
  { day: "Day 4", amount: 6500 },
  { day: "Day 5", amount: 3000 },
];

export const BudgetTracker = ({ budget }: BudgetTrackerProps) => {
  const totalBudget = parseInt(budget);
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = totalBudget - totalSpent;
  const percentSpent = (totalSpent / totalBudget) * 100;
  const isOverBudget = remaining < 0;

  const pieData = expenses.map(exp => ({
    name: exp.category,
    value: exp.amount,
    color: exp.color,
  }));

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Budget</p>
              <p className="font-display text-2xl font-bold">₹{totalBudget.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-coral" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="font-display text-2xl font-bold">₹{totalSpent.toLocaleString()}</p>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(percentSpent, 100)}%` }}
              className={`h-full ${percentSpent > 90 ? 'bg-destructive' : 'bg-gradient-hero'}`}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">{percentSpent.toFixed(1)}% of budget</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`glass-card p-6 ${isOverBudget ? 'border-destructive/50' : ''}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl ${isOverBudget ? 'bg-destructive/10' : 'bg-emerald/10'} flex items-center justify-center`}>
              {isOverBudget ? (
                <TrendingDown className="w-6 h-6 text-destructive" />
              ) : (
                <TrendingDown className="w-6 h-6 text-emerald" />
              )}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className={`font-display text-2xl font-bold ${isOverBudget ? 'text-destructive' : 'text-emerald'}`}>
                ₹{Math.abs(remaining).toLocaleString()}
              </p>
            </div>
          </div>
          {remaining < totalBudget * 0.1 && remaining > 0 && (
            <div className="flex items-center gap-2 p-2 rounded-lg bg-gold/10 text-gold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Budget running low!</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Expense by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg font-semibold mb-4">Spending by Category</h3>
          <div className="flex items-center gap-6">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              {expenses.map((exp) => (
                <div key={exp.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: exp.color }}
                    />
                    <span className="text-sm">{exp.category}</span>
                  </div>
                  <span className="font-medium">₹{exp.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Daily Spending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg font-semibold mb-4">Daily Spending</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailySpending}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="glass-card p-2 text-sm">
                          <p className="font-medium">₹{payload[0].value?.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="url(#barGradient)" 
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(185, 70%, 35%)" />
                    <stop offset="100%" stopColor="hsl(160, 60%, 45%)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-semibold">Recent Expenses</h3>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Expense
          </Button>
        </div>
        <div className="space-y-3">
          {[
            { item: "Hotel Shinjuku - 3 nights", category: "Stay", amount: 18000, time: "Apr 1" },
            { item: "Ichiran Ramen", category: "Food", amount: 1200, time: "Apr 1" },
            { item: "JR Pass - 5 days", category: "Transport", amount: 5500, time: "Apr 1" },
            { item: "teamLab Borderless Ticket", category: "Activities", amount: 3200, time: "Apr 4" },
            { item: "Dinner at Izakaya", category: "Food", amount: 2800, time: "Apr 1" },
          ].map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  transaction.category === 'Stay' ? 'bg-sky/10 text-sky' :
                  transaction.category === 'Food' ? 'bg-coral/10 text-coral' :
                  transaction.category === 'Transport' ? 'bg-emerald/10 text-emerald' :
                  'bg-primary/10 text-primary'
                }`}>
                  {transaction.category === 'Stay' && <Home className="w-5 h-5" />}
                  {transaction.category === 'Food' && <Utensils className="w-5 h-5" />}
                  {transaction.category === 'Transport' && <Train className="w-5 h-5" />}
                  {transaction.category === 'Activities' && <Camera className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-medium">{transaction.item}</p>
                  <p className="text-sm text-muted-foreground">{transaction.time}</p>
                </div>
              </div>
              <span className="font-semibold">₹{transaction.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
