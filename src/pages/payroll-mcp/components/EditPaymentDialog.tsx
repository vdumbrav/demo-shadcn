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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface EditPaymentDialogProps {
  children?: React.ReactNode;
  paymentData?: {
    employee: string;
    payoutMethod: string;
    wallet: string;
    network: string;
    currency: string;
    amount: string;
  };
  onSave?: (data: {
    employee: string;
    payoutMethod: string;
    wallet: string;
    network: string;
    currency: string;
    amount: string;
  }) => void;
}

/**
 * EditPaymentDialog Component
 * Dialog for editing payment information
 * Includes employee, payout method, wallet, network, currency, and amount fields
 */
export function EditPaymentDialog({
  children,
  paymentData,
  onSave,
}: EditPaymentDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState(
    paymentData?.employee || "Elvin Bond"
  );
  const [payoutMethod, setPayoutMethod] = useState(
    paymentData?.payoutMethod || "Crypto"
  );
  const [wallet, setWallet] = useState(
    paymentData?.wallet || "0x4Fe9D98C19F0aA3427cE56Df2b843D6b3b932Dd8"
  );
  const [network, setNetwork] = useState(paymentData?.network || "BSC");
  const [currency, setCurrency] = useState(paymentData?.currency || "USDT");
  const [amount, setAmount] = useState(paymentData?.amount || "1 600.00");

  const handleSave = () => {
    const data = {
      employee,
      payoutMethod,
      wallet,
      network,
      currency,
      amount,
    };
    onSave?.(data);
    setIsOpen(false);
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
            This is a dialog description.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-7">
          {/* Row 1: Employee and Payout Method - 2 selectors, 50% each */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Employee
              </Label>
              <Select value={employee} onValueChange={setEmployee}>
                <SelectTrigger className="w-full h-9 px-3 py-2 border border-input rounded-md bg-background">
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
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Payout Method
              </Label>
              <Select value={payoutMethod} onValueChange={setPayoutMethod}>
                <SelectTrigger className="w-full h-9 px-3 py-2 border border-input rounded-md bg-background">
                  <SelectValue placeholder="Crypto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Crypto">Crypto</SelectItem>
                  <SelectItem value="Bank">Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 2: Wallet / IBAN - 1 input, full width (100%) */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium text-foreground">
              Wallet / IBAN
            </Label>
            <Input
              className="h-9 px-3 py-1 border border-input rounded-md bg-background"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="0x4Fe9D98C19F0aA3427cE56Df2b843D6b3b932Dd8"
            />
          </div>

          {/* Row 3: Network and Currency Token - 2 selectors, 50% each */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Network
              </Label>
              <Select value={network} onValueChange={setNetwork}>
                <SelectTrigger className="w-full h-9 px-3 py-2 border border-input rounded-md bg-background">
                  <SelectValue placeholder="BSC" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BSC">BSC</SelectItem>
                  <SelectItem value="ETH">ETH</SelectItem>
                  <SelectItem value="POLYGON">POLYGON</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Currency Token
              </Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-full h-9 px-3 py-2 border border-input rounded-md bg-background">
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
            </div>
          </div>

          {/* Row 4: Amount - 1 input, 50% of row width */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Amount
              </Label>
              <Input
                className="h-9 px-3 py-1 border border-input rounded-md bg-background"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1 600.00"
              />
            </div>
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
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
