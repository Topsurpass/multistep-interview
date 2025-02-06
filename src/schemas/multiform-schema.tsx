import { z } from "zod";

export const schema = z.object({
	fullName: z.string().min(1, { message: "Full name is required" }),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid email address" }),
	phoneNumber: z.string().min(1, { message: "Phone number is required" }),
	companyName: z.string().min(1, { message: "Company name is required" }),

	cargoType: z.string().min(1, { message: "Cargo type is required" }),
	cargoDescription: z
		.string()
		.min(1, { message: "Cargo description is required" }),

	weight: z.coerce.number().min(1, { message: "Weight must be at least 1" }),
	length: z.coerce.number().min(1, { message: "Length must be at least 1" }),
	height: z.coerce.number().min(1, { message: "Height must be at least 1" }),
	width: z.coerce.number().min(1, { message: "Width must be at least 1" }),

	pickupLocation: z
		.string()
		.min(1, { message: "Pickup location is required" }),
	deliveryLocation: z
		.string()
		.min(1, { message: "Delivery location is required" }),
	pickupDate: z.string().min(1, { message: "Pickup date is required" }),
	deliveryDate: z.string().min(1, { message: "Delivery date is required" }),

	shippingMethod: z
		.string()
		.min(1, { message: "Shipping method is required" }),
	hasInsurance: z.preprocess(
		(val) => (typeof val === "string" ? val === "true" : val),
		z.boolean({ required_error: "Has insurance is required" })
	),
	isItemFragile: z.preprocess(
		(val) => (typeof val === "string" ? val === "true" : val),
		z.boolean({ required_error: "Item fragility is required" })
	),
	specialInstruction: z.string().optional(),
});

export type Inputs = z.infer<typeof schema>;
