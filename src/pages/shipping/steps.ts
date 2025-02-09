import { Package, User2 } from "lucide-react";

const steps = [
	{
		step: 1,
		title: "User Info",
		fields: ["fullName", "email", "phoneNumber", "companyName"],
		Icons: User2,
	},
	{
		step: 2,
		title: "Cargo Info",
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
		title: "Pickup & Delivery",
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
		title: "Shipping & Pricing",
		fields: ["shippingMethod", "hasInsurance", "isItemFragile"],
		Icon: Package,
	},
	{
		step: 5,
		title: "Review",
		fields: [],
	},
];

export default steps;
