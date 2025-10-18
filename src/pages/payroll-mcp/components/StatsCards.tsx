import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { statsData } from "../data/mockData";

/**
 * StatsCards Component
 * Displays a responsive grid of statistics cards with metrics
 * Responsive: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop)
 */
export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-6">
            <div className="space-y-1.5">
              <div className="flex items-start justify-between">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <Badge variant="outline" className="flex items-center gap-1">
                  {stat.badge.icon === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.badge.text}
                </Badge>
              </div>
              <p className="text-3xl font-semibold text-card-foreground">
                {stat.value}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <p className="text-sm text-card-foreground">{stat.trend}</p>
                <TrendingUp className="w-4 h-4 text-card-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
