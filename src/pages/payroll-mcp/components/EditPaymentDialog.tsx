import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { editPaymentSchema, type EditPaymentFormData } from "../data/validationSchemas";

interface EditPaymentDialogProps {
  children?: React.ReactNode;
  paymentData?: EditPaymentFormData;
  onSave?: (data: EditPaymentFormData) => void;
}

/**
 * EditPaymentDialog Component
 * Dialog for editing payment information
 * Includes employee, payout method, wallet, network, currency, and amount fields
 * Integrated with React Hook Form + Zod validation
 */
export function EditPaymentDialog({
  children,
  paymentData,
  onSave,
}: EditPaymentDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EditPaymentFormData>({
    resolver: zodResolver(editPaymentSchema),
    defaultValues: {
      employee: paymentData?.employee || "Elvin Bond",
      payoutMethod: paymentData?.payoutMethod || "Crypto",
      wallet: paymentData?.wallet || "0x4Fe9D98C19F0aA3427cE56Df2b843D6b3b932Dd8",
      network: paymentData?.network || "BSC",
      currency: paymentData?.currency || "USDT",
      amount: paymentData?.amount || "1600.00",
    },
  });

  const handleSave = async (data: EditPaymentFormData) => {
    try {
      onSave?.(data);
      setIsOpen(false);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Edit Payment</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-lg p-6 bg-background border border-border rounded-lg">
        <DialogHeader className="flex flex-col gap-1.5 text-left">
          <DialogTitle className="text-lg font-semibold text-foreground">
            Edit Payment
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Update payment information with validation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleSave)} className="flex flex-col gap-7">
          {/* Row 1: Employee and Payout Method - 2 selectors, 50% each */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Employee
              </Label>
              <Select defaultValue={paymentData?.employee || "Elvin Bond"} {...register("employee")}>
                <SelectTrigger className={`w-full h-9 px-3 py-2 border rounded-md bg-background ${errors.employee ? "border-red-500" : "border-input"}`}>
                  <SelectValue placeholder="Select employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Elvin Bond">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="bg-muted text-xs text-foreground">
                          EB
                        </AvatarFallback>
                      </Avatar>
                      Elvin Bond
                    </div>
                  </SelectItem>
                  <SelectItem value="Sarah Connor">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="bg-muted text-xs text-foreground">
                          SC
                        </AvatarFallback>
                      </Avatar>
                      Sarah Connor
                    </div>
                  </SelectItem>
                  <SelectItem value="John Smith">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="bg-muted text-xs text-foreground">
                          JS
                        </AvatarFallback>
                      </Avatar>
                      John Smith
                    </div>
                  </SelectItem>
                  <SelectItem value="Maria Garcia">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="bg-muted text-xs text-foreground">
                          MG
                        </AvatarFallback>
                      </Avatar>
                      Maria Garcia
                    </div>
                  </SelectItem>
                  <SelectItem value="Eddie Lake">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="bg-muted text-xs text-foreground">
                          EL
                        </AvatarFallback>
                      </Avatar>
                      Eddie Lake
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.employee && <p className="text-sm text-red-500">{errors.employee.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Payout Method
              </Label>
              <Select defaultValue={paymentData?.payoutMethod || "Crypto"} {...register("payoutMethod")}>
                <SelectTrigger className={`w-full h-9 px-3 py-2 border rounded-md bg-background ${errors.payoutMethod ? "border-red-500" : "border-input"}`}>
                  <SelectValue placeholder="Crypto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Crypto">Crypto</SelectItem>
                  <SelectItem value="Bank">Bank</SelectItem>
                </SelectContent>
              </Select>
              {errors.payoutMethod && <p className="text-sm text-red-500">{errors.payoutMethod.message}</p>}
            </div>
          </div>

          {/* Row 2: Wallet / IBAN - 1 input, full width (100%) */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium text-foreground">
              Wallet / IBAN
            </Label>
            <Input
              className={`h-9 px-3 py-1 border rounded-md bg-background ${errors.wallet ? "border-red-500" : "border-input"}`}
              placeholder="0x4Fe9D98C19F0aA3427cE56Df2b843D6b3b932Dd8"
              {...register("wallet")}
            />
            {errors.wallet && <p className="text-sm text-red-500">{errors.wallet.message}</p>}
          </div>

          {/* Row 3: Network and Currency Token - 2 selectors, 50% each */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Network
              </Label>
              <Select defaultValue={paymentData?.network || "BSC"} {...register("network")}>
                <SelectTrigger className={`w-full h-9 px-3 py-2 border rounded-md bg-background ${errors.network ? "border-red-500" : "border-input"}`}>
                  <SelectValue placeholder="BSC" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BSC">BSC</SelectItem>
                  <SelectItem value="ETH">ETH</SelectItem>
                  <SelectItem value="POLYGON">POLYGON</SelectItem>
                </SelectContent>
              </Select>
              {errors.network && <p className="text-sm text-red-500">{errors.network.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Currency Token
              </Label>
              <Select defaultValue={paymentData?.currency || "USDT"} {...register("currency")}>
                <SelectTrigger className={`w-full h-9 px-3 py-2 border rounded-md bg-background ${errors.currency ? "border-red-500" : "border-input"}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle cx="8" cy="8" r="8" fill="#26A17B" />
                      </svg>
                    </div>
                    <SelectValue placeholder="USDT" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="DAI">DAI</SelectItem>
                </SelectContent>
              </Select>
              {errors.currency && <p className="text-sm text-red-500">{errors.currency.message}</p>}
            </div>
          </div>

          {/* Row 4: Amount - 1 input, 50% of row width */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Amount
              </Label>
              <Input
                className={`h-9 px-3 py-1 border rounded-md bg-background ${errors.amount ? "border-red-500" : "border-input"}`}
                placeholder="1600.00"
                {...register("amount")}
              />
              {errors.amount && <p className="text-sm text-red-500">{errors.amount.message}</p>}
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
