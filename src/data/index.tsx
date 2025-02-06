
import {
	Box,
	Thermometer,
	AlertTriangle,
	Rocket,
	Gauge,
	SquareArrowUp,
} from "lucide-react";

export const CargoOptions = [
	{
		value: "general",
		label: "General Cargo",
		icon: <Box className="h-4 w-4 text-gray-600" />,
	},
	{
		value: "perishable",
		label: "Perishable Goods",
		icon: <Thermometer className="h-4 w-4 text-blue-600" />,
	},
	{
		value: "hazardous",
		label: "Hazardous Materials",
		icon: <AlertTriangle className="h-4 w-4 text-red-600" />,
	},
];
export const ShippingOptions = [
	{
		value: "standard",
		label: "Standard (5-7 days)",
		icon: <SquareArrowUp className="h-4 w-4 text-blue-600" />,
	},
	{
		value: "express",
		label: "Express (2-3 days) +50%",
		icon: <Gauge className="h-4 w-4 text-blue-600" />,
	},
	{
		value: "super-express",
		label: "Super Express (24hrs) +100%",
		icon: <Rocket className="h-4 w-4 text-red-600" />,
	},
];
