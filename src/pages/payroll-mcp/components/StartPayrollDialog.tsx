import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { DatePicker } from "@/components/ui/date-picker";
import { DateRangePicker, type DateRange } from "@/components/ui/date-range-picker";

interface StartPayrollDialogProps {
  children?: React.ReactNode;
}

/**
 * StartPayrollDialog Component
 * Complex component with form state management
 * Handles payroll creation with multiple form fields
 */
export function StartPayrollDialog({ children }: StartPayrollDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [payrollType, setPayrollType] = useState("new");
  const [addRecurring, setAddRecurring] = useState(false);
  const [periodRange, setPeriodRange] = useState<DateRange>();
  const [paymentDate, setPaymentDate] = useState<Date>();

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Payroll Type:", payrollType);
    console.log("Add Recurring:", addRecurring);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || <Button>Start Payroll</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Start payroll</DialogTitle>
          <DialogDescription>
            Choose how you want to create your payroll draft.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Radio Group - Payroll Type Selection (Horizontal) */}
          <RadioGroup value={payrollType} onValueChange={setPayrollType} className="grid grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
              <RadioGroupItem value="new" id="new" />
              <div className="space-y-1 leading-none flex-1">
                <Label htmlFor="new" className="font-medium">
                  Start new payroll
                </Label>
                <p className="text-sm text-muted-foreground">
                  Create a blank draft with no employees.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
              <RadioGroupItem value="repeat" id="repeat" />
              <div className="space-y-1 leading-none flex-1">
                <Label htmlFor="repeat" className="font-medium">
                  Repeat last payroll
                </Label>
                <p className="text-sm text-muted-foreground">
                  Copy employees, amounts, and network settings from last cycle.
                </p>
              </div>
            </div>
          </RadioGroup>

          {/* Payroll Name Input */}
          <div className="space-y-2">
            <Label htmlFor="payroll-name">Payroll name</Label>
            <Input
              id="payroll-name"
              placeholder="November '25 (corp)"
              defaultValue="November '25 (corp)"
            />
          </div>

          {/* Period and Payment Date */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="period">Period</Label>
              <DateRangePicker
                value={periodRange}
                onChange={setPeriodRange}
                placeholder="Select period"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payment-date">Payment date</Label>
              <DatePicker
                value={paymentDate}
                onChange={setPaymentDate}
                placeholder="Select payment date"
                className="w-full"
              />
            </div>
          </div>

          <Separator />

          {/* Add Recurring Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="add-recurring"
              checked={addRecurring}
              onCheckedChange={(checked) => setAddRecurring(checked as boolean)}
            />
            <Label htmlFor="add-recurring" className="text-sm font-normal">
              Add Recurring
            </Label>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Start payroll
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
