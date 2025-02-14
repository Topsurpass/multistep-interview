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
    <div className="bg-white min-h-screen">
      <div className="px-3 mx-auto max-w-7xl lg:px-8">
        <section className="pt-12 pb-16 sm:py-24">
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Streamlined Cargo Shipping in 5 Simple Steps
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-8">
                Experience seamless logistics from pickup to delivery with our
                intuitive shipping platform.
              </p>
              <Button
                className="mt-8 text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                onClick={() => navigate("/shipping")}
              >
                Start Shipping Now
              </Button>
            </div>
          </div>
        </section>
        <section className="rounded-xl">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="bg-white p-5 md:p-8 rounded-2xl shadow-sm transition-all hover:shadow-lg border"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                      <feature.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-500">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
