import Box from "@/assets/box.svg";
import {
  CircleUser,
  ShoppingCart,
  MapPin,
  CircleDollarSign,
  SquareChartGantt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    name: "User information",
    description:
      "Submit your information to helpus get in touch with you when your cargo gets delivered.",
    icon: CircleUser,
  },
  {
    name: "Cargo Information",
    description:
      "Give detailed description of your cargo to help us able to calculate the cost of shipping.",
    icon: ShoppingCart,
  },
  {
    name: "Pickup and delivery",
    description:
      "Supply detailed information about the pickup of your cargo on arrival.",
    icon: MapPin,
  },
  {
    name: "Shipping and Pricing",
    description:
      "Give additional information about your cargo and supply other details like issurance and how fragile your goods are. ",
    icon: CircleDollarSign,
  },
  {
    name: "Review",
    description: "Review all the information provided before proceeding. ",
    icon: SquareChartGantt,
  },
];

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white sm:py-12 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        <div className="mx-auto max-w-2xl lg:text-center space-y-5">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to get Your Cargo shipped
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Get your goods or cargo shipped in 5 simple steps from your location
            i.e pickup location to your desired destination.
          </p>
          <Button
            className="text-white bg-indigo-600"
            size="lg"
            onClick={() => navigate("/shipping")}
          >
            Ship Cargo
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={Box} alt="box" className="md:w-1/2" />
          </div>
          <div className="mx-auto">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
