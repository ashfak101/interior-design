import { Box } from "@mui/material";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "18px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (payload.error) {
      console.log("[error]", payload.error);
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
    } else {
      console.log("[PaymentMethod]", payload.paymentMethod);
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);
    }
  };
  return (
    <Box sx={{ background: "#FAFAFA", p: 10 }}>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="cardNumber"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#201E1E",
          }}
        >
          Card Number
        </label>
        <CardNumberElement
          style={{ border: "1px solid #333" }}
          id="cardNumber"
          options={ELEMENT_OPTIONS}
        />
        <label htmlFor="expiry">Expiration</label>
        <CardExpiryElement
          style={{ width: "100%" }}
          id="expiry"
          options={ELEMENT_OPTIONS}
        />
        <label htmlFor="cvc">CVC</label>
        <CardCvcElement id="cvc" options={ELEMENT_OPTIONS} />

        {/* {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
      {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>} */}
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </Box>
  );
}

export default CheckoutForm;
