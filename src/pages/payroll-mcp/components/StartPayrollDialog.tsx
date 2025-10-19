import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { DatePicker } from '@/components/ui/date-picker';
import { DateRangePicker, type DateRange } from '@/components/ui/date-range-picker';
import { startPayrollSchema, type StartPayrollFormData } from '../data/validationSchemas';

interface StartPayrollDialogProps {
  children?: React.ReactNode;
  onSubmit?: (data: StartPayrollFormData) => void;
}

/**
 * StartPayrollDialog Component
 * Complex component with form state management
 * Handles payroll creation with multiple form fields
 * Includes React Hook Form + Zod validation
 */
export function StartPayrollDialog({ children, onSubmit }: StartPayrollDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [periodRange, setPeriodRange] = useState<DateRange>();
  const [paymentDate, setPaymentDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StartPayrollFormData>({
    resolver: zodResolver(startPayrollSchema),
    defaultValues: {
      payrollType: 'new',
      addRecurring: false,
      payrollName: "November '25 (corp)",
    },
  });

  const payrollType = watch('payrollType');

  const onSubmitForm = async (data: StartPayrollFormData) => {
    try {
      // Validate dates are set
      if (!periodRange?.from || !periodRange?.to || !paymentDate) {
        alert('Please select both period dates and payment date');
        return;
      }

      // Add date range and payment date to data
      const fullData: StartPayrollFormData = {
        ...data,
        periodStart: periodRange.from,
        periodEnd: periodRange.to,
        paymentDate,
      };

      onSubmit?.(fullData);
      setIsOpen(false);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children ?? <Button>Start Payroll</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Start payroll</DialogTitle>
          <DialogDescription>Choose how you want to create your payroll draft.</DialogDescription>
        </DialogHeader>

        <form onSubmit={(e) => void handleSubmit(onSubmitForm)(e)} className="space-y-6 py-4">
          {/* Radio Group - Payroll Type Selection (Horizontal) */}
          <div>
            <RadioGroup value={payrollType} className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-y-0 space-x-3 rounded-md border p-4">
                <RadioGroupItem value="new" id="new" {...register('payrollType')} />
                <div className="flex-1 space-y-1 leading-none">
                  <Label htmlFor="new" className="font-medium">
                    Start new payroll
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Create a blank draft with no employees.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-0 space-x-3 rounded-md border p-4">
                <RadioGroupItem value="repeat" id="repeat" {...register('payrollType')} />
                <div className="flex-1 space-y-1 leading-none">
                  <Label htmlFor="repeat" className="font-medium">
                    Repeat last payroll
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Copy employees, amounts, and network settings from last cycle.
                  </p>
                </div>
              </div>
            </RadioGroup>
            {errors.payrollType && (
              <p className="mt-2 text-sm text-red-500">{errors.payrollType.message}</p>
            )}
          </div>

          {/* Payroll Name Input */}
          <div className="space-y-2">
            <Label htmlFor="payroll-name">Payroll name</Label>
            <Input
              id="payroll-name"
              placeholder="November '25 (corp)"
              {...register('payrollName')}
              className={errors.payrollName ? 'border-red-500' : ''}
            />
            {errors.payrollName && (
              <p className="text-sm text-red-500">{errors.payrollName.message}</p>
            )}
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
              {!periodRange && <p className="text-sm text-red-500">Please select a period</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="payment-date">Payment date</Label>
              <DatePicker
                value={paymentDate}
                onChange={setPaymentDate}
                placeholder="Select payment date"
                className="w-full"
              />
              {!paymentDate && <p className="text-sm text-red-500">Please select a payment date</p>}
            </div>
          </div>

          <Separator />

          {/* Add Recurring Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox id="add-recurring" {...register('addRecurring')} />
            <Label htmlFor="add-recurring" className="text-sm font-normal">
              Add Recurring
            </Label>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Starting...' : 'Start payroll'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
