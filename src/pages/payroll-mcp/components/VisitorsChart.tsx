import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Calendar, Clock, TrendingUp, BarChart3, CalendarDays } from "lucide-react";
import { chartDataByPeriod, chartConfig } from "../data/mockData";

type PeriodType = "today" | "last-7-days" | "last-30-days" | "last-3-months" | "last-year";

const periodLabels: Record<PeriodType, string> = {
  "today": "Hourly activity for today",
  "last-7-days": "Daily visitors for the past week",
  "last-30-days": "Weekly traffic over the past month",
  "last-3-months": "Monthly statistics for the quarter",
  "last-year": "Yearly visitor trends and analytics",
};

/**
 * VisitorsChart Component
 * Displays area chart with visitor statistics
 * Medium complexity - includes chart rendering and toggle controls
 */
export function VisitorsChart() {
  const [activePeriod, setActivePeriod] = useState<PeriodType>("today");

  const currentData = chartDataByPeriod[activePeriod];
  const currentLabel = periodLabels[activePeriod];

  return (
    <Card>
      <CardHeader className="pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 sm:gap-0">
          <div className="space-y-1.5">
            <h3 className="text-base text-card-foreground">Total Visitors</h3>
            <p className="text-sm text-muted-foreground">
              {currentLabel}
            </p>
          </div>
          <ToggleGroup
            type="single"
            value={activePeriod}
            onValueChange={(value) => {
              if (value) setActivePeriod(value as PeriodType);
            }}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <ToggleGroupItem value="today" className="min-w-[40px] sm:min-w-[80px] text-xs sm:text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Today</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="last-7-days" className="min-w-[40px] sm:min-w-[90px] text-xs sm:text-sm flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span className="hidden sm:inline">7 days</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="last-30-days" className="min-w-[40px] sm:min-w-[90px] text-xs sm:text-sm flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Month</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="last-3-months" className="min-w-[40px] sm:min-w-[100px] text-xs sm:text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Quarter</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="last-year" className="min-w-[40px] sm:min-w-[80px] text-xs sm:text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Year</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-48 sm:h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currentData}>
              <defs>
                <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#fillValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
