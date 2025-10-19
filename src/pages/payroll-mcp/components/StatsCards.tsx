import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { statsData } from '../data/mockData';

/**
 * StatsCards Component
 * Displays a responsive grid of statistics cards with metrics
 * Responsive: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop)
 */
export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-6">
            <div className="space-y-1.5">
              <div className="flex items-start justify-between">
                <p className="text-muted-foreground text-sm">{stat.title}</p>
                <Badge variant="outline" className="flex items-center gap-1">
                  {stat.badge.icon === 'up' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.badge.text}
                </Badge>
              </div>
              <p className="text-card-foreground text-3xl font-semibold">{stat.value}</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <p className="text-card-foreground text-sm">{stat.trend}</p>
                <TrendingUp className="text-card-foreground h-4 w-4" />
              </div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
