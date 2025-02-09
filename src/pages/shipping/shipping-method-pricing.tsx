import { ShippingOptions } from "@/data";
import { useFormContext } from "react-hook-form";
import { TextArea, Select, Checkbox } from "@/components/@form";
import PricingCalculator from "./pricing-calculator";

export default function ShippingAndPricing() {
	const { control } = useFormContext();

	return (
		<section className="flex w-full gap-5 flex-col md:flex-row px-5">
			<div className="w-full space-y-5">
				<Select
					control={control}
					label="Shipping Method"
					name="shippingMethod"
					placeholder="Select your preffered shipping method"
					options={ShippingOptions}
				/>
				<div className="flex items-center flex-col gap-5">
					<div className="w-full text-left">
						<Checkbox
							control={control}
							label="Include cargo insurance (+N2000)"
							className=""
							name="hasInsurance"
							hasDescription
							description="Insurance cover for your cargo"
						/>
					</div>

					<div className="w-full text-left">
						<Checkbox
							control={control}
							label="Check if item is fragile"
							name="isItemFragile"
							hasDescription
							description="Kindly confirm if cargo contains fragile goods"
						/>
					</div>
				</div>
				<TextArea
					control={control}
					label="Special Instruction"
					name="specialInstruction"
				/>
			</div>
			<div className="w-full">
				<PricingCalculator />
			</div>
		</section>
	);
}
