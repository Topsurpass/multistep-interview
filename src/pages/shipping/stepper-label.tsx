import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface IStepperLabel {
  steps: {
    step: number;
    title: string;
    fields: string[];
  }[];
  activeStep: number;
}

export default function StepperLabel({ steps, activeStep }: IStepperLabel) {
  const progressValue = ((activeStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="border-b border-gray-100 bg-white px-6 py-5">
      <div className="mb-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Cargo Shipment Booking
        </h1>
        <p className="text-sm md:text-lg text-gray-600 leading-8">
          {`Complete your shipment in ${steps.length} steps`}
        </p>
      </div>

      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progressValue}%` }}
          />
        </div>

        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = step.step < activeStep;
            const isActive = step.step === activeStep;

            return (
              <div key={index} className="flex flex-col items-center">
                {/* Step indicator */}
                <div
                  className={cn(
                    "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white",
                    isCompleted
                      ? "border-green-500 text-green-500"
                      : isActive
                      ? "border-primary"
                      : "border-gray-300"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isActive ? "text-primary" : "text-gray-400"
                      )}
                    >
                      {step.step}
                    </span>
                  )}
                </div>

                {/* Step label */}
                <div className="mt-3 text-center hidden md:grid">
                  <p
                    className={cn(
                      "text-sm md:text-lg font-medium",
                      isCompleted
                        ? "text-green-600"
                        : isActive
                        ? "text-primary"
                        : "text-gray-300"
                    )}
                  >
                    {step.title}
                  </p>
                  <span className="text-xs text-gray-400">
                    Step {step.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Progress */}
      <div className="mt-6 md:hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary">
            Step {activeStep} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {steps[activeStep - 1]?.title}
          </span>
        </div>
        <Progress
          value={progressValue}
          className="mt-2 h-2 bg-gray-100"
          //   indicatorClassName="bg-primary"
        />
      </div>
    </div>
  );
}
