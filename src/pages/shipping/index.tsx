import { useCallback, useState } from "react";
import { schema, Inputs } from "@/schemas/multiform-schema";
import steps from "./steps";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import UserInformation from "./user-information";
import StepperLabel from "./stepper-label";
import StepperControl from "./stepper-control";
import { zodResolver } from "@hookform/resolvers/zod";
import CargoInformation from "./cargo-information";
import PickupDelivery from "./pickup-delivery";
import ShippingAndPricing from "./shipping-method-pricing";
import ReviewInformation from "./review-information";
import ConfirmAlert from "@/components/confirm-alert";
import OrderConfirmation from "../confirmation";
import Cargo from "@/assets/cargo.svg";


const initialValues = {
	fullName: "",
	email: "",
	phoneNumber: "",
	companyName: "",
	cargoType: "",
	cargoDescription: "",
	weight: 0,
	length: 0,
	height: 0,
	width: 0,
	pickupLocation: "",
	deliveryLocation: "",
	pickupDate: "2025-02-10",
	deliveryDate: "2025-02-10",
	shippingMethod: "standard",
	hasInsurance: false,
	isItemFragile: false,
	specialInstruction: "",
};

export default function ShippingForm() {
	const [activeStep, setActiveStep] = useState(1);
	const isLastStep = activeStep === steps.length;
	const [alert, setAlert] = useState(false);
	const [isConfirmed, setIsConfirmed] = useState(false);

	const methods = useForm<Inputs>({
		resolver: zodResolver(schema),
		mode: "onChange",
		defaultValues: initialValues,
	});

	const nextStep = async () => {
		const { fields } = steps[activeStep - 1];
		const output = await methods.trigger(fields as any[], {
			shouldFocus: true,
		});
		if (!output) return;
		if (isLastStep) {
			setAlert(true);
			return;
		}
		setActiveStep((prevStep) => prevStep + 1);
	};

	const prevStep = useCallback(() => {
		if (activeStep === 1) return;
		setActiveStep(activeStep - 1);
	}, [activeStep]);

	const handleReturnHome = useCallback(() => {
		methods.reset(initialValues);
		setAlert(false);
		setActiveStep(1);
		setIsConfirmed(false);
	}, [methods]);

	const RenderStep = useCallback(() => {
		switch (activeStep) {
			case 1:
				return <UserInformation />;
			case 2:
				return <CargoInformation />;
			case 3:
				return <PickupDelivery />;
			case 4:
				return <ShippingAndPricing />;
			case 5:
				return <ReviewInformation />;
			default:
				return null;
		}
	}, [activeStep]);

	const processForm: SubmitHandler<Inputs> = async (data) => {
		JSON.stringify(data);
		console.log(data);
		setIsConfirmed(true);
	};

	if (isConfirmed) {
		return (
			<OrderConfirmation
				handleHome={handleReturnHome}
				values={methods.getValues()}
			/>
		);
	}

	return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col justify-center items-center">
        <img src={Cargo} alt="cargo" />
      </div>
      <div className="w-full mt-10 md:pr-5 px-3">
        {/* <pre>{JSON.stringify(methods.watch(), null, 2)}</pre> */}
        <div className="bg-white space-y-12 overflow-hidden  rounded-lg border ">
          <StepperLabel steps={steps} activeStep={activeStep} />
          <div className="w-full">
            <div className="flex  flex-col gap-8">
              <div className="md:h-[440px] md:overflow-y-auto">
                <FormProvider {...methods}>
                  <RenderStep />
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
        <StepperControl
          activeStep={activeStep}
          prevStep={prevStep}
          nextStep={nextStep}
          isLastStep={isLastStep}
        />
      </div>
      <ConfirmAlert
        open={alert}
        handleClose={() => setAlert(false)}
        handleSubmit={methods.handleSubmit(processForm)}
      />
    </div>
  );
}
