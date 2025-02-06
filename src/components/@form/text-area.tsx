import { ComponentProps } from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface ITextField extends ComponentProps<"textarea"> {
	label: string;
	name: string;
	control: Control<any>;
}

export default function TextArea({
	label,
	name,
	control,
	...others
}: ITextField) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="text-left text-wrap">
          <FormLabel>{ label}</FormLabel>
					<FormControl>
						<Textarea
							{...field} {...others}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
