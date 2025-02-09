import ShippingForm from "@/pages/shipping";
import Homepage from "@/pages/homepage";
import ErrorPage from "@/pages/error";

const routeConfig = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/shipping",
    element: <ShippingForm />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routeConfig;
