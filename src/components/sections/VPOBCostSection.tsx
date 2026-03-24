import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Ban,
  Receipt,
  ShieldOff,
  IndianRupee,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Scenario = {
  icon: typeof TrendingDown;
  title: string;
  tag: string;
  tagColor: string;
  tint: string;
  iconBg: string;
  explanation: string;
  rows: { label: string; value: string }[];
  totalLabel: string;
  totalValue: string;
  highlight: string;
  large?: boolean;
};

const scenarios: Scenario[] = [
  {
    icon: TrendingDown,
    title: "TCS Credit Loss",
    tag: "FINANCIAL",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    tint: "from-amber-50/60 to-orange-50/30",
    iconBg: "bg-amber-100",
    explanation:
      "Without state-level GST registration, TCS deducted by marketplaces cannot be claimed back. It's gone — permanently.",
    rows: [
      { label: "Monthly TCS Lost", value: "₹5,000" },
      { label: "Annual Loss", value: "₹60,000" },
    ],
    totalLabel: "Annual Loss",
    totalValue: "₹60,000",
    highlight: "This money is permanently lost without state GST registration.",
  },
  {
    icon: AlertTriangle,
    title: "GST Penalty & Compliance Risk",
    tag: "CRITICAL",
    tagColor: "bg-red-100 text-red-700 border-red-200",
    tint: "from-red-50/50 to-rose-50/30",
    iconBg: "bg-red-100",
    explanation:
      "Operating without proper registration triggers tax liability, penalties, interest, and late fees — all compounding fast.",
    rows: [
      { label: "Tax Liability", value: "₹3,60,000" },
      { label: "Penalty + Interest + Fees", value: "₹94,200" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹4,54,200",
    highlight: "A simple compliance gap leads to massive penalties.",
  },
  {
    icon: ShieldOff,
    title: "Listing Suspension",
    tag: "CRITICAL",
    tagColor: "bg-red-100 text-red-700 border-red-200",
    tint: "from-red-50/40 to-orange-50/20",
    iconBg: "bg-red-100",
    explanation:
      "Non-compliant listings get suspended. Even after reinstatement, your rankings and organic traffic take months to recover.",
    rows: [
      { label: "Revenue Lost", value: "₹8,00,000" },
      { label: "Ranking Loss", value: "₹1,00,000" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹9,00,000",
    highlight: "Recovery takes months even after reinstatement.",
    large: true,
  },
  {
    icon: Ban,
    title: "Inventory Freeze Loss",
    tag: "OPERATIONAL",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    tint: "from-orange-50/50 to-amber-50/30",
    iconBg: "bg-orange-100",
    explanation:
      "When your inventory is flagged or legally blocked, you can't sell — and every day costs you revenue.",
    rows: [
      { label: "Inventory Stuck", value: "₹8,00,000" },
      { label: "Sales Lost", value: "₹3,00,000/mo" },
    ],
    totalLabel: "Total Loss",
    totalValue: "₹9,57,000",
    highlight: "You can't sell if your inventory is legally blocked.",
  },
  {
    icon: Receipt,
    title: "ITC (Input Tax Credit) Loss",
    tag: "FINANCIAL",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    tint: "from-yellow-50/50 to-amber-50/30",
    iconBg: "bg-amber-100",
    explanation:
      "Without VPOB, you miss claiming ITC on purchases — paying tax you didn't have to.",
    rows: [
      { label: "ITC Available", value: "₹1,80,000" },
      { label: "ITC Claimable", value: "₹60,000" },
    ],
    totalLabel: "Loss",
    totalValue: "₹1,20,000",
    highlight: "You pay tax you could have avoided.",
  },
  {
    icon: IndianRupee,
    title: "TDS Loss",
    tag: "FINANCIAL",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    tint: "from-amber-50/40 to-yellow-50/20",
    iconBg: "bg-amber-100",
    explanation:
      "TDS deducted by platforms without proper registration becomes unrecoverable — compounding year over year.",
    rows: [
      { label: "TDS Lost", value: "₹40,000/yr" },
      { label: "3-Year Loss", value: "₹1,20,000" },
    ],
    totalLabel: "3-Year Loss",
    totalValue: "₹1,20,000",
    highlight: "This is your money — permanently gone.",
  },
];

const CostCard = ({
  s,
  index,
  large,
}: {
  s: Scenario;
  index: number;
  large?: boolean;
}) => {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className={`group h-full flex flex-col justify-between rounded-2xl border border-border/40 shadow-sm hover:shadow-lg hover:border-border/70 transition-all duration-300 overflow-hidden bg-gradient-to-br ${s.tint} ${large ? "row-span-2" : ""}`}
    >
      <div className="px-6 pt-6 pb-0">
        {/* Top row: icon + tag */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center shadow-sm`}
          >
            <Icon className="w-6 h-6 text-foreground/70" strokeWidth={1.8} />
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${s.tagColor}`}
          >
            {s.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 leading-snug">
          {s.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {s.explanation}
        </p>

        {/* Data rows */}
        <div className="space-y-0 mb-5">
          {s.rows.map((r, ri) => (
            <div
              key={r.label}
              className={`flex items-center justify-between py-2.5 ${ri < s.rows.length - 1 ? "border-b border-border/30" : ""}`}
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold">
                {r.label}
              </span>
              <span className="font-semibold text-foreground tabular-nums text-sm">
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Total + quote */}
      <div className="px-6 pb-6">
        <div className="border-t-2 border-destructive/20 pt-4 mb-4">
          <div className="flex items-end justify-between">
            <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold">
              {s.totalLabel}
            </span>
            <span className="text-3xl font-extrabold text-destructive tabular-nums tracking-tight">
              {s.totalValue}
            </span>
          </div>
        </div>

        {/* Glassmorphism quote */}
        <div
          className="rounded-lg px-3.5 py-2.5 border border-border/30"
          style={{
            background: "hsla(0, 0%, 100%, 0.65)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p className="text-xs text-muted-foreground italic leading-snug">
            "{s.highlight}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const VPOBCostSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            The Hidden Cost of{" "}
            <span className="relative inline-block">
              <span className="text-destructive font-black">NOT</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-destructive/30 rounded-full" />
            </span>{" "}
            Having a VPOB
          </h2>
          <p className="mt-5 text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Most sellers try to save ₹1,500/month — and end up losing{" "}
            <span className="font-bold text-foreground">lakhs</span>.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {scenarios.map((s, i) => (
            <CostCard key={s.title + i} s={s} index={i} large={s.large} />
          ))}
        </div>
      </div>
    </section>
  );
};
