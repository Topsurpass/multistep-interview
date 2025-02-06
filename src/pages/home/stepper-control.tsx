import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type StepperControlType = {
  activeStep: number;
  prevStep: () => void;
  nextStep: () => void;
  isLastStep: boolean;
};

export default function StepperControl({
  activeStep,
  prevStep,
  nextStep,
  isLastStep,
}: StepperControlType) {
  return (
    <section
      className={cn("flex w-full justify-end gap-3  p-4")}
    >
      <Button className={activeStep === 1 ? "hidden" : ""} onClick={prevStep}>
        Go Back
      </Button>
      <Button onClick={nextStep}>
        {isLastStep ? "Confirm" : "Next Step"}
      </Button>
    </section>
  );
}
