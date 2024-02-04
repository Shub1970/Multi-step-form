import React from "react";
import check_image from "../../public/assets/images/icon-thank-you.svg";
const Thankyou = () => {
  return (
    <div className="thankyou">
      <img src={check_image} alt="check" className="padding-400" />
      <h2 className="text-accent-400 fw-bold fs-750 padding-700">Thank you!</h2>
      <p
        className="text-neutral-350 fw-regular"
        style={{ textAlign: "center" }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thankyou;
