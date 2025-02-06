import { ComponentProps } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface ITextField extends ComponentProps<"input"> {
  label: string;
  name: string;
  control: Control<any>;
}

export default function TextField({
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
        <FormItem className="text-left">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...others} />
          </FormControl>
          
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
