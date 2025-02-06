import { cn } from "@/lib/utils";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface IStepperLabel {
	steps: {
		step: number;
		title: string;
		fields: string[];
		Icon?: any;
	}[];
	activeStep: number;
}

export default function StepperLabel({ steps, activeStep }: IStepperLabel) {
	const stepTitle = steps[activeStep - 1]?.title;
	//const Icon = steps[activeStep - 1]?.Icon;

	return (
		<div className="">
			<div className="p-5">
				<div className="flex items-center justify-between mb-6 text-left">
					<div>
						<h1 className="text-xl md:text-2xl font-bold text-gray-900">
							Cargo Shipment Booking
						</h1>
						<p className="text-sm md:text-md text-gray-500 mt-2">
							{`Secure your cargo shipment in ${steps.length}  simple steps`}
						</p>
					</div>
					<div className="hidden md:block text-right">
						<span className="text-sm font-medium text-gray-500">
							{`Step ${activeStep} of ${steps.length}`}
						</span>
						<Progress
							value={(6 / 3) * 100}
							className="h-2 mt-2 w-40 bg-gray-100"
						/>
					</div>
				</div>

				<div className="hidden md:flex justify-between text-left">
					{steps.map((d) => {
						return (
							<ProgressStep
								key={d.step}
								step={d.step}
								activeStep={activeStep}
								title={d.title}
							/>
						);
					})}
				</div>
				<h3 className="flex items-center gap-2 md:text-lg font-semibold mt-5">
					{stepTitle}
				</h3>
			</div>
		</div>
	);
}

interface IProgressStep {
	step: number;
	activeStep: number;
	title: string;
}

function ProgressStep({ step, activeStep, title }: IProgressStep) {
	return (
		<div
			className={cn("flex items-center flex-1", {
				"ml-4": step > 1,
			})}
		>
			{step > 1 && (
				<ChevronRight className="h-6 w-6 text-gray-300 mx-2" />
			)}
			<div
				className={cn("flex-1 flex items-center p-3 rounded-lg", {
					"bg-primary/10 border-2 border-primary":
						activeStep === step,
					"bg-gray-50 border-2 border-gray-200": activeStep !== step,
					"bg-green-50 border-green-200": activeStep > step,
				})}
			>
				<div className="flex-shrink-0">
					<div
						className={cn(
							"h-8 w-8 rounded-full flex items-center justify-center",
							activeStep > step && "bg-green-500 text-white",
							{
								"bg-primary text-white": step === activeStep,
								"bg-white text-gray-400": step !== activeStep,
							}
						)}
					>
						{activeStep > step ? (
							<CheckCircle2 className="h-5 w-5" />
						) : (
							step
						)}
					</div>
				</div>
				<div className="ml-3">
					<span
						className={cn(
							"text-sm font-medium",
							step === activeStep
								? "text-primary"
								: "text-gray-500",
							activeStep > step && "text-green-600"
						)}
					>
						Step {step}
					</span>
					<p className="text-xs text-gray-500">{title}</p>
				</div>
			</div>
		</div>
	);
}
