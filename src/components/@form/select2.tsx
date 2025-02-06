import { ComponentProps } from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import {
	Select as FormSelect,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select";

interface ITextField extends ComponentProps<"div"> {
	label: string;
	name: string;
	control: Control<any>;
	selectOptions: React.ReactNode | (() => React.ReactNode);
	placeholder?: string;
}

export default function Select({
	label,
	name,
	control,
	selectOptions,
	placeholder,
	...others
}: ITextField) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="space-y-5 text-left">
					<FormLabel className="text-sm font-medium">
						{label}
					</FormLabel>
					<FormSelect
						onValueChange={field.onChange}
						defaultValue={field.value}
					>
						<FormControl>
							<SelectTrigger className="h-12">
								<SelectValue {...others} placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{typeof selectOptions === "function"
								? selectOptions()
								: selectOptions}
						</SelectContent>
					</FormSelect>
					<FormMessage className="text-xs" />
				</FormItem>
			)}
		/>
	);
}
