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
  SelectItem,
} from "@/components/ui/select";
import { LucideProps } from "lucide-react";

type OptionList = {
  label: string;
  value: string;
  icon: LucideProps;
};

interface ITextField extends ComponentProps<"div"> {
  label: string;
  name: string;
  control: Control<any>;
  options: OptionList[];
  placeholder?: string;
}

export default function Select({
  label,
  name,
  control,
  options,
  placeholder,
  ...others
}: ITextField) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-5 text-left">
          <FormLabel className="md:text-lg font-semibold text-gray-900">
            {label}
          </FormLabel>
          <FormSelect onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue {...others} placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((data: any) => {
                return (
                  <SelectItem key={data.value} value={data.value}>
                    <div className="flex items-center gap-3 ">
                      {data.icon || ""}
                      {data.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </FormSelect>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}
