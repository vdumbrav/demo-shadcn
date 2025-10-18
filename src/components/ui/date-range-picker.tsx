import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (dateRange: DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Pick a date range",
  disabled,
  className,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDateSelect = (selectedRange: DateRange | undefined) => {
    onChange?.(selectedRange);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    onChange?.(undefined);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "min-w-[240px] justify-start text-left font-normal",
            !value?.from && "text-muted-foreground",
            value?.from && "pr-8",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, "dd/MM/yyyy")} - {format(value.to, "dd/MM/yyyy")}
              </>
            ) : (
              format(value.from, "dd/MM/yyyy")
            )
          ) : (
            <span>{placeholder}</span>
          )}
          {value?.from && !disabled && (
            <span
              role="button"
              tabIndex={-1}
              className="ml-auto flex h-4 w-4 cursor-pointer items-center justify-center opacity-50 hover:opacity-100"
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={handleDateSelect}
          initialFocus
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
