"use client";

import { useMemo } from "react";
import { Banknote } from "lucide-react";
import { formatCurrency } from "@/lib/helpers";
import { useFormContext, useWatch } from "react-hook-form";

// Pricing configuration constants
const PRICING_CONFIG = {
	BASE_RATE_WEIGHT: 500, // cost per kg
	BASE_RATE_VOLUME: 0.01, // cost per cubic unit
	INSURANCE_COST: 2000, // flat insurance fee
	FRAGILE_COST: 5000, // fragile fee
	DECIMAL_PLACES: 2,
};

// Helper component for breakdown items
const BreakdownItem = ({ label, value }: any) => (
	<div className="flex justify-between items-center">
		<span className="text-sm text-gray-600">{label}</span>
		<span className="text-sm font-medium">{value}</span>
	</div>
);

export default function PricingCalculator() {
	const { control } = useFormContext();

	// Watch the necessary form fields, including hasInsurance and shippingMethod
	const watchedFields = useWatch({
		control,
		name: [
			"weight",
			"length",
			"width",
			"height",
			"shippingMethod",
			"hasInsurance",
			"isItemFragile",
		],
	});
	const [
		weight,
		length,
		width,
		height,
		shippingMethod,
		hasInsurance,
		isItemFragile,
	] = watchedFields;

	// Calculate pricing values based on the new formula:
	// 1. Weight cost is calculated as (weight * BASE_RATE_WEIGHT) and then multiplied by a shipping multiplier:
	//    - standard: 1
	//    - express: 1.5
	//    - super-express: 2
	// 2. Volume cost is calculated as (length * width * height * BASE_RATE_VOLUME)
	// 3. Insurance cost is added if applicable.
	const {
		adjustedWeightCost,
		volumeCost,
		insuranceCost,
		totalPrice,
		fragileCost,
		shippingMultiplier,
	} = useMemo(() => {
		const numericWeight = Number(weight) || 0;
		const numericLength = Number(length) || 0;
		const numericWidth = Number(width) || 0;
		const numericHeight = Number(height) || 0;

		// Determine shipping multiplier based on shippingMethod
		const shippingMultiplier =
			shippingMethod === "express"
				? 1.5
				: shippingMethod === "super-express"
				? 2
				: 1;

		// Calculate cost based solely on weight and apply the shipping multiplier
		const baseWeightCost = numericWeight * PRICING_CONFIG.BASE_RATE_WEIGHT;
		const adjustedWeightCost = baseWeightCost * shippingMultiplier;

		// Calculate cost based on volume
		const volumeCost =
			numericLength *
			numericWidth *
			numericHeight *
			PRICING_CONFIG.BASE_RATE_VOLUME;

		// Insurance cost if applicable
		const insuranceCost = hasInsurance ? PRICING_CONFIG.INSURANCE_COST : 0;
		const fragileCost = isItemFragile ? PRICING_CONFIG.FRAGILE_COST : 0;

		// Total price is the sum of the adjusted weight cost, volume cost, and insurance cost
		const total =
			adjustedWeightCost + volumeCost + insuranceCost + fragileCost;

		return {
			adjustedWeightCost: Number(
				adjustedWeightCost.toFixed(PRICING_CONFIG.DECIMAL_PLACES)
			),
			volumeCost: Number(
				volumeCost.toFixed(PRICING_CONFIG.DECIMAL_PLACES)
			),
			insuranceCost,
			fragileCost,
			totalPrice: Number(total.toFixed(PRICING_CONFIG.DECIMAL_PLACES)),
			shippingMultiplier,
		};
	}, [
		weight,
		length,
		width,
		height,
		shippingMethod,
		hasInsurance,
		isItemFragile,
	]);

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200">
			<div className="bg-gray-50 px-4 py-3 border-b border-gray-100 rounded-t-xl">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 p-2 rounded-lg">
						<Banknote className="h-5 w-5 text-primary" />
					</div>
					<div>
						<h3 className="md:text-lg font-semibold">
							Price Breakdown
						</h3>
						<p className="text-sm text-gray-500">
							Total shipping cost
						</p>
					</div>
				</div>
			</div>

			<div className="p-5 space-y-4">
				<BreakdownItem
					label={`Weight Cost (${Number(weight) || 0} kg × N${
						PRICING_CONFIG.BASE_RATE_WEIGHT
					})`}
					value={formatCurrency(adjustedWeightCost)}
				/>

				<BreakdownItem
					label={`Volume Cost (${Number(length) || 0} × ${
						Number(width) || 0
					} × ${Number(height) || 0} × ${
						PRICING_CONFIG.BASE_RATE_VOLUME
					})`}
					value={formatCurrency(volumeCost)}
				/>

				{hasInsurance && (
					<BreakdownItem
						label="Insurance Fee"
						value={formatCurrency(insuranceCost)}
					/>
				)}
				{isItemFragile && (
					<BreakdownItem
						label="Fragile Item Fee"
						value={formatCurrency(fragileCost)}
					/>
				)}
				{shippingMultiplier && (
					<BreakdownItem
						label="Shipping Method"
						value={`${shippingMethod} (x ${shippingMultiplier})`}
					/>
				)}

				<div className="pt-4 border-t border-gray-200">
					<div className="flex justify-between items-center">
						<span className="font-semibold">Total Estimate</span>
						<span className="md:text-xl font-bold text-primary">
							{formatCurrency(totalPrice)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
