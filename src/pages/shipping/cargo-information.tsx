import { TextField, TextArea, Select } from "@/components/@form";
import { CargoOptions } from "@/data";
import { useFormContext } from "react-hook-form";

export default function CargoInformation() {
  const { control } = useFormContext();

  return (
    <section className="grid gap-y-5 p-5 border rounded-lg">
      <TextArea
        control={control}
        label="Cargo Descriptions"
        name="cargoDescription"
        placeholder="Describe your cargo"
      />

      <Select
        control={control}
        label="Cargo Type"
        name="cargoType"
        placeholder="Select Cargo Type"
        options={CargoOptions}
      />

      <TextField
        control={control}
        label="Total Weight"
        type="number"
        name="weight"
      />
      <div className="grid md:grid-cols-3 gap-4">
        <TextField
          control={control}
          label="Length"
          type="number"
          name="length"
        />
        <TextField
          control={control}
          label="Height"
          type="number"
          name="height"
        />
        <TextField control={control} label="Width" type="number" name="width" />
      </div>
    </section>
  );
}
