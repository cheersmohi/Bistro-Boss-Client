import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  //TODO: Need to add Publishable key//

  return (
    <div>
      <SectionTitle heading='Payment' subHeading='Please Pay to Eat' />
      <div>
        <Elements stripe={stripePromise}>
          {" "}
          <CheckOutForm />{" "}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
