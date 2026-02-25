import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from './ui/dialog';

export const ModalDialog = ({
  trigger,
  title,
  description,
  buttonVariant,
  formId,
  isSubmitting,
  submitHandler,
  open,
  setOpen,
  ...props
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent className="max-w-125 max-h-[85vh] min-w-75 sm:min-h-38">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {props.children}
            <DialogFooter className="mt-4">
              <div className="flex justify-between w-full gap-4">
                <DialogClose>
                  <Button variant={buttonVariant}>Cancel</Button>
                </DialogClose>
                <Button
                  variant={buttonVariant}
                  type="submit"
                  form={formId}
                  onClick={submitHandler}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting' : 'Submit'}
                  {isSubmitting && <Loader2 data-icon="inline-start" className="animate-spin" />}
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
};
