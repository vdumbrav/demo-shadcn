import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type FilterOptions, getDefaultFilters, getFilterOptions } from "../data/filterUtils";
import { tableData } from "../data/mockData";
import { Filter, X } from "lucide-react";

interface AdvancedFilterDialogProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export function AdvancedFilterDialog({ filters, onFiltersChange }: AdvancedFilterDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const filterOptions = getFilterOptions(tableData);

  const handleApply = () => {
    onFiltersChange(localFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    const defaultFilters = getDefaultFilters();
    setLocalFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 sm:gap-2">
          <Filter className="w-4 h-4" />
          <span className="hidden sm:inline">Advanced Filters</span>
          <span className="sm:hidden">Filter</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Advanced Filters</DialogTitle>
          <DialogDescription>
            Filter the table by multiple criteria
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Search Filter */}
          <div className="space-y-2">
            <Label htmlFor="search">Search by Header</Label>
            <Input
              id="search"
              placeholder="Search section name..."
              value={localFilters.searchTerm}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, searchTerm: e.target.value })
              }
            />
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={localFilters.statusFilter}
              onValueChange={(value: string) =>
                setLocalFilters({
                  ...localFilters,
                  statusFilter: value as FilterOptions["statusFilter"],
                })
              }
            >
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="done">Done</SelectItem>
                <SelectItem value="in-process">In Process</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Type Filter */}
          <div className="space-y-3">
            <Label>Section Type</Label>
            <div className="space-y-2">
              {filterOptions.types.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={localFilters.typeFilter.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setLocalFilters({
                          ...localFilters,
                          typeFilter: [...localFilters.typeFilter, type],
                        });
                      } else {
                        setLocalFilters({
                          ...localFilters,
                          typeFilter: localFilters.typeFilter.filter((t) => t !== type),
                        });
                      }
                    }}
                  />
                  <Label htmlFor={`type-${type}`} className="font-normal">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Reviewer Filter */}
          <div className="space-y-2">
            <Label htmlFor="reviewer">Reviewer Status</Label>
            <Select
              value={localFilters.reviewerFilter}
              onValueChange={(value: string) =>
                setLocalFilters({
                  ...localFilters,
                  reviewerFilter: value as FilterOptions["reviewerFilter"],
                })
              }
            >
              <SelectTrigger id="reviewer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Assignments</SelectItem>
                <SelectItem value="assigned">With Reviewer</SelectItem>
                <SelectItem value="unassigned">Without Reviewer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Target Range Filter */}
          <div className="space-y-3">
            <Label>Target Range: {localFilters.targetRange.min} - {localFilters.targetRange.max}</Label>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="min-target" className="text-xs">Min</Label>
                <Input
                  id="min-target"
                  type="number"
                  min={0}
                  max={100}
                  value={localFilters.targetRange.min}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      targetRange: {
                        ...localFilters.targetRange,
                        min: Math.max(0, Math.min(parseInt(e.target.value) || 0, 100)),
                      },
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="max-target" className="text-xs">Max</Label>
                <Input
                  id="max-target"
                  type="number"
                  min={0}
                  max={100}
                  value={localFilters.targetRange.max}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      targetRange: {
                        ...localFilters.targetRange,
                        max: Math.max(0, Math.min(parseInt(e.target.value) || 100, 100)),
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Reset Filters
          </Button>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleApply}>
              Apply Filters
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
