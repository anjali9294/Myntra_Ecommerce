import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./CheckOutSteps";
import MetaData from "../layout/Metadata";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";

import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  console.log(orderInfo);
  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  //   const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   payBtn.current.disabled = true;
  //   try {
  //     const config = {
  //       withCredentials: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "http://localhost:4000/api/payment/process",
  //       paymentData,

  //       config
  //     );

  //     //   console.log(data.client_secret);

  //     const client_secret = data.client_secret;

  //     if (!stripe || !elements) return console.log("strip if");

  //     const result = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardNumberElement),
  //         billing_details: {
  //           name: user.name,
  //           email: user.email,
  //           address: {
  //             line1: shippingInfo.address,
  //             city: shippingInfo.city,
  //             state: shippingInfo.state,
  //             postal_code: shippingInfo.pinCode,
  //             country: shippingInfo.country,
  //           },
  //         },
  //       },
  //     });
  //     if (result.error) {
  //       payBtn.current.disabled = false;
  //       console.log("if");
  //       alert.error(result.error.message);
  //     } else {
  //       if (result.paymentIntent.status === "succeeded") {
  //         history.puch("/success");
  //       } else {
  //         alert.error("There's some issue while processing payment");
  //       }
  //     }
  //   } catch (error) {
  //     payBtn.current.disabled = false;
  //     console.log("catch");
  //     alert.error(error.response.data.message);
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:4000/api/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          // order.paymentInfo = {
          //   id: result.paymentIntent.id,
          //   status: result.paymentIntent.status,
          // };

          // dispatch(createOrder(order));

          history.push("/success");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };
  return (
    <>
      <MetaData title="Payment" />
      <CheckoutSteps activeSteps={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
