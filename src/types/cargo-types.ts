export interface CargoOption {
	value: string;
	label: string;
	icon?: React.ReactNode;
}

export interface CargoSpecFormProps {
	onNext: (data: Partial<FormData>) => void;
	onPrev: () => void;
	initialValues?: Partial<FormData>;
	cargoOptions?: CargoOption[];
}
