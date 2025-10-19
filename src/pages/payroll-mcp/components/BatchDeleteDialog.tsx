import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface BatchDeleteDialogProps {
  children?: React.ReactNode;
  count?: number;
  onDelete?: () => void;
}

/**
 * BatchDeleteDialog Component
 * Alert dialog for confirming deletion of multiple payments
 * Shows the count of payments to be deleted
 */
export function BatchDeleteDialog({ children, count = 3, onDelete }: BatchDeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    onDelete?.();
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        {children ?? <Button variant="destructive">Delete Selected</Button>}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Payment</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete {count} Payments?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
