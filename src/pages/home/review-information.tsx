import { useFormContext } from "react-hook-form";
import { User, Package, MapPin, ShieldCheck, Info } from "lucide-react";

export default function ReviewInformation() {
	const { getValues } = useFormContext();
	const values = getValues();

	return (
		<div className="mx-auto space-y-8">
			<SectionContainer
				icon={<User className="w-5 h-5 text-primary" />}
				title="Personal Information"
			>
				<InfoGrid>
					<InfoItem label="Full Name" value={values.fullName} />
					<InfoItem label="Email Address" value={values.email} />
					<InfoItem label="Phone Number" value={values.phoneNumber} />
					<InfoItem label="Company Name" value={values.companyName} />
				</InfoGrid>
			</SectionContainer>

			<SectionContainer
				icon={<Package className="w-5 h-5 text-primary" />}
				title="Cargo Details"
			>
				<InfoGrid>
					<InfoItem label="Cargo Type" value={values.cargoType} />
					<InfoItem
						label="Description"
						value={values.cargoDescription}
					/>
					<InfoItem label="Weight" value={`${values.weight} kg`} />
					<InfoItem
						label="Dimensions"
						value={`${values.length} × ${values.width} × ${values.height} cm`}
					/>
				</InfoGrid>
			</SectionContainer>

			<SectionContainer
				icon={<MapPin className="w-5 h-5 text-primary" />}
				title="Pickup & Delivery"
			>
				<InfoGrid>
					<InfoItem
						label="Pickup Location"
						value={values.pickupLocation}
					/>
					<InfoItem
						label="Delivery Location"
						value={values.deliveryLocation}
					/>
					<InfoItem
						label="Pickup Date"
						value={new Date(values.pickupDate).toLocaleDateString(
							"en-US",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
							}
						)}
					/>
					<InfoItem
						label="Delivery Date"
						value={new Date(values.deliveryDate).toLocaleDateString(
							"en-US",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
							}
						)}
					/>
				</InfoGrid>
			</SectionContainer>

			<SectionContainer
				icon={<ShieldCheck className="w-5 h-5 text-primary" />}
				title="Shipping & Additional Info"
			>
				<InfoGrid>
					<InfoItem
						label="Shipping Method"
						value={values.shippingMethod}
					/>
					<InfoItem
						label="Insurance"
						value={values.hasInsurance ? "Yes" : "No"}
						status={values.hasInsurance ? "success" : "neutral"}
					/>
					<InfoItem
						label="Fragile Item"
						value={values.isItemFragile ? "Yes" : "No"}
						status={values.isItemFragile ? "warning" : "neutral"}
					/>
					<InfoItem
						label="Special Instructions"
						value={values.specialInstruction || "None"}
						fullWidth
						icon={<Info className="w-4 h-4 text-blue-500" />}
					/>
				</InfoGrid>
			</SectionContainer>
		</div>
	);
}

const SectionContainer = ({
	icon,
	title,
	children,
}: {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}) => (
	<div className="bg-white rounded-xl shadow-sm border border-gray-100 ">
		<div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
			<div className="bg-primary/10 p-2 rounded-lg">{icon}</div>
			<h3 className=" font-semibold text-gray-800">{title}</h3>
		</div>
		<div className="p-2 md:p-6">{children}</div>
	</div>
);

const InfoGrid = ({ children }: { children: React.ReactNode }) => (
	<div className="flex flex-col  gap-2 md:grid md:grid-cols-2 md:gap-4">{children}</div>
);

const InfoItem = ({
	label,
	value,
	status = "neutral",
	fullWidth = false,
	icon,
}: {
	label: string;
	value: string;
	status?: "success" | "warning" | "neutral";
	fullWidth?: boolean;
	icon?: React.ReactNode;
}) => {
	const statusColors = {
		success: "text-green-600",
		warning: "text-yellow-600",
		neutral: "text-gray-700",
	};

	return (
		<div className={`${fullWidth ? "col-span-2" : ""} `}>
			<div className="flex flex-col space-y-1.5 p-4 bg-gray-50 rounded-lg border border-gray-100 ">
				<div className="flex items-center justify-between ">
					<span className="text-sm text-gray-500 flex items-center gap-2 ">
						{icon}
						{label}
					</span>
					{status !== "neutral" && (
						<div
							className={`text-sm font-medium  ${statusColors[status]}`}
						>
							<p>{value}</p>
						</div>
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
