import { z } from 'zod';

/**
 * Validation schema for StartPayrollDialog
 */
export const startPayrollSchema = z.object({
  payrollName: z
    .string()
    .min(3, 'Payroll name must be at least 3 characters')
    .max(50, 'Payroll name must be less than 50 characters'),
  payrollType: z.enum(['new', 'repeat']),
  periodStart: z.date().optional(),
  periodEnd: z.date().optional(),
  paymentDate: z.date().optional(),
  addRecurring: z.boolean(),
});

export type StartPayrollFormData = z.infer<typeof startPayrollSchema>;

/**
 * Validation schema for EditPaymentDialog
 */
export const editPaymentSchema = z.object({
  employee: z.string().min(2, 'Employee name is required'),
  payoutMethod: z.enum(['Crypto', 'Bank']),
  wallet: z
    .string()
    .min(10, 'Wallet/IBAN must be at least 10 characters')
    .regex(
      /^0x[a-fA-F0-9]{40}$|^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/,
      'Enter a valid wallet address or IBAN'
    ),
  network: z.enum(['BSC', 'ETH', 'POLYGON']),
  currency: z.enum(['USDT', 'USDC', 'DAI']),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid amount')
    .refine((val) => parseFloat(val) > 0, 'Amount must be greater than 0'),
});

export type EditPaymentFormData = z.infer<typeof editPaymentSchema>;
