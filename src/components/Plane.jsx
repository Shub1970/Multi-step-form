import React, { useEffect, useState } from "react";
import { plane } from "../utils/constants";
import { useFormData, useFormDispatch } from "../../App";

const Plane = () => {
  const formData = useFormData();
  const dispatch = useFormDispatch();
  function toggle_to(plane_type) {
    let toggle_state;
    let default_value = {
      type: "monthly",
      name: "Arcade",
      cost: "9",
      offer: "",
      currency: "$",
    };
    if (plane_type) {
      toggle_state = plane_type;
    } else {
      toggle_state = formData.Plane.type === "monthly" ? "yearly" : "monthly";
    }

    if (toggle_state === "yearly") {
      default_value = {
        type: "yearly",
        name: "Arcade",
        cost: "90",
        offer: "2 months free",
        currency: "$",
      };
    }
    dispatch({
      type: "change",
      changeProperty: { Plane: { ...formData.Plane, ...default_value } },
    });
    dispatch({
      type: "clear_service",
    });
  }

  function changePlane(name_, cost_, offer_, currency_) {
    dispatch({
      type: "change",
      changeProperty: {
        Plane: {
          ...formData.Plane,
          name: name_,
          cost: cost_,
          offer: offer_,
          currency: currency_,
        },
      },
    });
  }

  return (
    <>
      <header>
        <h2 className="text-accent-400 fw-bold fs-750">Select your plan</h2>
        <p className="text-neutral-350 fw-regular">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <div>
        <div className="plane-container">
          {plane[`${formData.Plane.type}`].map((plane, index) => {
            return (
              <div className="form-check" key={index}>
                <input
                  id={plane.plane_name}
                  type="radio"
                  className="form-check-input sr-only"
                  name={plane.plane_name}
                  checked={formData.Plane.name === plane.plane_name}
                  onChange={() => {
                    changePlane(
                      plane.plane_name,
                      plane.cost,
                      plane.offer,
                      plane.currency
                    );
                  }}
                />
                <label htmlFor={plane.plane_name} className="form-check-label">
                  <img src={plane.image} alt={plane.plane_name} />
                  <div className="info">
                    <p className="fs-500 fw-bold text-accent-400">
                      {plane.plane_name}
                    </p>
                    <p className="text-primary-200 fs-300">{`${plane.currency}${plane.cost}/${plane.short_form}`}</p>
                    <p className=" text-primary-400 fs-300">{plane.offer}</p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        <div className="toggle-container padding-block-400">
          <p onClick={() => toggle_to("monthly")}>Monthly</p>
          <div
            className={
              formData.Plane.type === "monthly"
                ? "toggle-button"
                : "toggle-button active"
            }
            onClick={() => toggle_to()}
          ></div>
          <p onClick={() => toggle_to("yearly")}>Yearly</p>
        </div>
      </div>
    </>
  );
};

export default Plane;
