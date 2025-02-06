import { Button } from "@/components/ui/button";


import {
	CheckCircle,
	Truck,
	MapPin,
	Calendar,
	Package,
	Shield,
	AlertCircle,
} from "lucide-react";

export default function OrderConfirmation({ handleHome, values }: any) {

	return (
		<div className="min-h-screen bg-gray-50 py-5 md:py-8 sm:px-6 lg:px-8">
			<div className="md:max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
				<header className="bg-primary/10 md:p-5 text-center bvalues-b bvalues-gray-100">
					<CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
					<h1 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
						Order Confirmed!
					</h1>
					<p className="text-gray-600">
						Thank you for choosing us. Your order has been
						successfully placed.
					</p>
				</header>

				<main className="p-4 md:p-8 space-y-10">
					<SectionContainer
						icon={<Truck className="w-6 h-6 text-primary" />}
						title="Shipping Details"
					>
						<InfoGrid>
							<InfoItem
								icon={
									<MapPin className="w-5 h-5 text-gray-500" />
								}
								label="Pickup Location"
								value={values.pickupLocation}
							/>
							<InfoItem
								icon={
									<MapPin className="w-5 h-5 text-gray-500" />
								}
								label="Delivery Location"
								value={values.deliveryLocation}
							/>
							<InfoItem
								icon={
									<Calendar className="w-5 h-5 text-gray-500" />
								}
								label="Pickup Date"
								value={new Date(
									values.pickupDate
								).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							/>
							<InfoItem
								icon={
									<Calendar className="w-5 h-5 text-gray-500" />
								}
								label="Delivery Date"
								value={new Date(
									values.deliveryDate
								).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							/>
							<InfoItem
								icon={
									<Package className="w-5 h-5 text-gray-500" />
								}
								label="Shipping Method"
								value={values.shippingMethod}
							/>
						</InfoGrid>
					</SectionContainer>

					<SectionContainer
						icon={<Package className="w-6 h-6 text-primary" />}
						title="Cargo Details"
					>
						<InfoGrid>
							<InfoItem
								icon={
									<Package className="w-5 h-5 text-gray-500" />
								}
								label="Cargo Type"
								value={values.cargoType}
							/>
							<InfoItem
								icon={
									<Package className="w-5 h-5 text-gray-500" />
								}
								label="Weight"
								value={values.weight}
							/>
							<InfoItem
								icon={
									<Package className="w-5 h-5 text-gray-500" />
								}
								label="Dimensions"
								value={`${values.length} x ${values.height} x ${values.width} (l x b x h)`}
							/>
							<InfoItem
								icon={
									<AlertCircle className="w-5 h-5 text-yellow-500" />
								}
								label="Fragile Item"
								value={values.isItemFragile ? "Yes" : "No"}
								status="warning"
							/>
							<InfoItem
								icon={
									<Shield className="w-5 h-5 text-green-500" />
								}
								label="Insurance"
								value={values.hasInsurance ? "Yes" : "No"}
								status="success"
							/>
							<InfoItem
								label="Special Instructions"
								value={values.specialInstruction}
								icon={
									<AlertCircle className="w-5 h-5 text-blue-500" />
								}
								fullWidth
							/>
						</InfoGrid>
					</SectionContainer>
					<footer className="bg-gray-50 p-8 border-t border-gray-100 text-center space-x-5 flex flex-col">
						<p className="text-gray-600">
							Need help?{" "}
							<a
								href="#"
								className="text-primary hover:underline"
							>
								Contact our support team
							</a>
						</p>
						<Button
							onClick={() => window.print()}
							className="mt-4 px-4 md:px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
						>
							Print Receipt
						</Button>
						<Button
							onClick={handleHome}
							className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
						>
							Return Home
						</Button>
					</footer>
				</main>

				{/* Footer */}
			</div>
		</div>
	);
}

interface SectionContainerProps {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}
const SectionContainer: React.FC<SectionContainerProps> = ({
	icon,
	title,
	children,
}) => (
	<section>
		<div className="flex items-center gap-3 mb-6">
			<div className="bg-primary/10 p-2 rounded-lg">{icon}</div>
			<h2 className="t font-semibold text-gray-800">{title}</h2>
		</div>
		{children}
	</section>
);

const InfoGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
);

interface InfoItemProps {
	label: string;
	value: string;
	icon?: React.ReactNode;
	status?: "success" | "warning" | "neutral";
	fullWidth?: boolean;
}
const InfoItem: React.FC<InfoItemProps> = ({
	label,
	value,
	icon,
	status = "neutral",
	fullWidth = false,
}) => {
	const statusColors = {
		success: "text-green-600",
		warning: "text-yellow-600",
		neutral: "text-gray-700",
	};

	return (
		<div className={`${fullWidth ? "md:col-span-2" : ""}`}>
			<div className="flex flex-col space-y-1.5 p-4 bg-gray-50 rounded-lg border border-gray-100">
				<div className="flex items-center justify-between">
					<span className="text-sm text-gray-500 flex items-center gap-2">
						{icon}
						{label}
					</span>
					{status !== "neutral" && (
						<span
							className={`text-sm font-medium ${statusColors[status]}`}
						>
							{value}
						</span>
					)}
				</div>
				{status === "neutral" && (
					<span className="text-sm font-medium text-gray-800">
						{value}
					</span>
				)}
			</div>
		</div>
	);
};
