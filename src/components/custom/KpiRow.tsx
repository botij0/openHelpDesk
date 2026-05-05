import { Card } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  data: { v: number }[];
  color: string;
  icon: React.ReactNode;
  index: number;
}

export const KpiCard = ({ title, value, trend, trendUp, data, color, icon, index }: KpiCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <Card className="p-5 border-border/60 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
            {icon}
            {title}
          </div>
          <div className="text-2xl font-semibold tabular-nums text-foreground">{value}</div>
          <div className={`text-xs font-medium ${trendUp ? "text-[hsl(var(--status-resolved))]" : "text-destructive"}`}>
            {trendUp ? "↑" : "↓"} {trend}
          </div>
        </div>
        <div className="w-20 h-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={color}
                strokeWidth={1.5}
                fill={`url(#grad-${title})`}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  </motion.div>
);

interface KpiRowProps {
  sparkData: {
    responseTime: { v: number }[];
    resolution: { v: number }[];
    active: { v: number }[];
  };
  activeCount: number;
  resolvedCount: number;
  totalCount: number;
}

export const KpiRow = ({ sparkData, activeCount, resolvedCount, totalCount }: KpiRowProps) => {
  const resolutionRate = totalCount > 0 ? Math.round((resolvedCount / totalCount) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <KpiCard
        title="Avg. Response Time"
        value="1.6h"
        trend="12% from last week"
        trendUp={true}
        data={sparkData.responseTime}
        color="hsl(220, 70%, 50%)"
        icon={<Clock className="h-3.5 w-3.5" />}
        index={0}
      />
      <KpiCard
        title="Resolution Rate"
        value={`${resolutionRate}%`}
        trend="4% from last week"
        trendUp={true}
        data={sparkData.resolution}
        color="hsl(152, 60%, 40%)"
        icon={<CheckCircle2 className="h-3.5 w-3.5" />}
        index={1}
      />
      <KpiCard
        title="Active Tickets"
        value={String(activeCount)}
        trend="2 less than yesterday"
        trendUp={true}
        data={sparkData.active}
        color="hsl(38, 92%, 50%)"
        icon={<AlertCircle className="h-3.5 w-3.5" />}
        index={2}
      />
    </div>
  );
};
