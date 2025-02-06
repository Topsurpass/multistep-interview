import {
  AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

interface IProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

export default function ConfirmAlert({
  open,
  handleClose,
  handleSubmit,
}: IProps) {
  return (
		<AlertDialog open={open} onOpenChange={handleClose}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Would you like to proceed with this shipping ?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<div className="flex w-full flex-col gap-3 md:flex-row justify-between">
						<Button variant="destructive" onClick={handleClose}>
							Cancel
						</Button>
						<Button variant="default" onClick={handleSubmit}>
							Confirm
						</Button>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
  );
}
