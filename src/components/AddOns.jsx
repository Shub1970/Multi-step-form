import React from "react";

const services = {
  month: [
    {
      service_name: "Online service",
      service_description: "Access to multiplayer games",
      cost: 1,
      currency: "$",
      short_form: "mo",
    },
    {
      service_name: "Larger storage",
      service_description: "Extra 1TB of cloud save",
      cost: 2,
      currency: "$",
      short_form: "mo",
    },
    {
      service_name: "Customizable Profile",
      service_description: "Custom theme on your profile",
      cost: 2,
      currency: "$",
      short_form: "mo",
    },
  ],
  year: [
    {
      service_name: "Online service",
      service_description: "Access to multiplayer games",
      cost: 1,
      currency: "$",
      short_form: "yo",
    },
    {
      service_name: "Larger storage",
      service_description: "Extra 1TB of cloud save",
      cost: 2,
      currency: "$",
      short_form: "yo",
    },
    {
      service_name: "Customizable Profile",
      service_description: "Custom theme on your profile",
      cost: 2,
      currency: "$",
      short_form: "yo",
    },
  ],
};

const AddOns = () => {
  return (
    <>
      <header>
        <h2 className="text-accent-400 fw-bold fs-750">Pick add-ons</h2>
        <p className="text-neutral-350 fw-regular">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <div>
        {services["month"].map((service, index) => {
          return (
            <div className="form-check" key={index}>
              <input
                id={service.service_name}
                type="checkbox"
                className="form-check-input sr-only"
                name={service.service_name}
                value={service.cost + service.currency}
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
                  <p className="text text-primary-400 fs-300">{plane.offer}</p>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddOns;
