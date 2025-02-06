import { Package, User2 } from "lucide-react";

const steps = [
	{
		step: 1,
		title: "User Information",
		fields: ["fullName", "email", "phoneNumber", "companyName"],
		Icons: User2,
	},
	{
		step: 2,
		title: "Cargo Information",
		fields: [
			"cargoType",
			"cargoDescription",
			"weight",
			"length",
			"height",
			"width",
		],
		Icon: Package,
	},
	{
		step: 3,
		title: "Pickup & Delivery Details",
		fields: [
			"pickupLocation",
			"deliveryLocation",
			"pickupDate",
			"deliveryDate",
		],
		Icon: Package,
	},
	{
		step: 4,
		title: "Shipping Method & Pricing",
		fields: ["shippingMethod", "hasInsurance", "isItemFragile"],
		Icon: Package,
	},
	{
		step: 5,
		title: "Review Information",
		fields: [],
	},
];

export default steps;
