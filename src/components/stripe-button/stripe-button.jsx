import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IVggKIZeBxF4eRBuqPYraSarhQeTxFBwNAv5Dyx08g6c7BoLauh10ygmiguQHiCoqeN8G1Wtom9MDTdzUALBOCM00KO6nob8u";

  const onToken = () => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ld."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
