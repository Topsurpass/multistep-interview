import { ComponentProps } from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control } from "react-hook-form";

interface ITextField extends ComponentProps<typeof Checkbox> {
	label: string;
	name: string;
	description?: string;
	hasDescription?: boolean;
	control: Control<any>;
}

export default function CheckBox({
	label,
	name,
	control,
	description,
	hasDescription = false,
	...others
}: ITextField) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
					<FormControl>
						<Checkbox
							checked={field.value}
							onCheckedChange={field.onChange}
							{...others}
						/>
					</FormControl>
					<div className="space-y-1 leading-none">
						<FormLabel>{label}</FormLabel>
						{hasDescription && (
							<FormDescription>{description}</FormDescription>
						)}
					</div>
				</FormItem>
			)}
		/>
	);
}
