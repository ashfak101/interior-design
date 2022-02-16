import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51KTiv4IeNmaeO3UvTK6DRwRL5nSk9yO5tG5ddDu3aBLyQkovoMlyKPA4GRx1nul5SS8f5Bc7VfHQhntpaEnUOtHd00SFHb06oT"
);
function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Payment;
