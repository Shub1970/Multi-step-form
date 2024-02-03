import React from "react";
import Service from "./Service";
import { services } from "../utils/constants";
import { useFormData, useFormDispatch } from "../../App";
const AddOns = () => {
  const formData = useFormData();
  return (
    <>
      <header>
        <h2 className="text-accent-400 fw-bold fs-750">Pick add-ons</h2>
        <p className="text-neutral-350 fw-regular">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <div>
        {services[`${formData.Plane.type}`].map((service, index) => {
          return <Service {...service} key={index} />;
        })}
      </div>
    </>
  );
};

export default AddOns;
