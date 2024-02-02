import React, { useState } from "react";
import { plane } from "../utils/constants";

const Plane = () => {
  const [plantype, setPlantype] = useState("month");
  const [checkedname, setCheckedname] = useState(plane.month[1].plane_name);

  function toggle_to(plane_type) {
    if (plane_type) {
      setPlantype(plane_type);
    } else {
      setPlantype((prev) => (prev === "month" ? "year" : "month"));
    }
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
          {plane[`${plantype}`].map((plane, index) => {
            return (
              <div className="form-check" key={index}>
                <input
                  id={plane.plane_name}
                  type="radio"
                  className="form-check-input sr-only"
                  name={plane.plane_name}
                  value={plane.cost + plane.currency}
                  checked={plane.plane_name === checkedname}
                  onChange={() => {
                    setCheckedname(plane.plane_name);
                  }}
                />
                <label htmlFor={plane.plane_name} className="form-check-label">
                  <img src={plane.image} alt={plane.plane_name} />
                  <div className="info">
                    <p className="fs-400 fw-bold text-accent-400">
                      {plane.plane_name}
                    </p>
                    <p className="text-primary-200 fs-300">{`${plane.currency}${plane.cost}/${plane.short_form}`}</p>
                    <p className="text text-primary-400 fs-300">
                      {plane.offer}
                    </p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        <div className="toggle-container padding-block-400">
          <p onClick={() => toggle_to("month")}>Monthly</p>
          <div
            className={
              plantype === "month" ? "toggle-button" : "toggle-button active"
            }
            onClick={() => toggle_to()}
          ></div>
          <p onClick={() => toggle_to("year")}>Yearly</p>
        </div>
      </div>
    </>
  );
};

export default Plane;
