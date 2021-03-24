import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IVggKIZeBxF4eRBuqPYraSarhQeTxFBwNAv5Dyx08g6c7BoLauh10ygmiguQHiCoqeN8G1Wtom9MDTdzUALBOCM00KO6nob8u";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log(`Payment error: ${JSON.parse(error)}`);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
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
