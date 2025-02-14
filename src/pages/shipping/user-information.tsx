import { TextField } from "@/components/@form";
import { useFormContext } from "react-hook-form";

export default function UserInformation() {
  const { control } = useFormContext();
  return (
    <section className="grid gap-y-5 p-5 border rounded-xl">
      <TextField
        control={control}
        label="Full Name"
        name="fullName"
        placeholder="Please enter your first name, last name"
      />
      <TextField
        control={control}
        label="Email Address"
        name="email"
         placeholder="Please enter your email address"
      />
      <TextField
        control={control}
        label="Phone Number"
        name="phoneNumber"
        placeholder="Please enter your phone number"
      />
      <TextField
        control={control}
        label="Company Name"
        name="companyName"
         placeholder="Please enter your company name"
      />
    </section>
  );
}
