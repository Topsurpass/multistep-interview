import { TextField } from "@/components/@form";
import { useFormContext } from "react-hook-form";

export default function PickupDelivery() {
	const { control } = useFormContext();

	return (
		<section className="grid gap-y-5 p-5 border rounded-lg">
			<TextField
				control={control}
				label="Pickup Location"
				name="pickupLocation"
				placeholder="Enter address where we can pick your cargo"
			/>

			<TextField
				control={control}
				label="Delivery Location"
				name="deliveryLocation"
				placeholder="Enter address where to deliver your cargo"
			/>
		</section>
	);
}
