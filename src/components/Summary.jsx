import React from "react";
import { useFormData, useFormDispatch } from "../../App";

const Summary = () => {
  const formData = useFormData();
  function total_cost() {
    let total = 0;
    formData.Add_service.forEach((serv) => {
      total += parseInt(serv.cost);
    });
    total += parseInt(formData.Plane.cost);
    return total;
  }
  return (
    <>
      <header>
        <h2 className="text-accent-400 fw-bold fs-750">Select your plan</h2>
        <p className="text-neutral-350 fw-regular">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <div className="summary">
        <div className="plane spread-layer bg-neutral-300">
          <div>
            <p
              className="fs-500 fw-bold text-accent-400"
              style={{ textTransform: "uppercase" }}
            >
              {formData.Plane.name}({formData.Plane.type})
            </p>
            <p className="fs-400 text-neutral-400 fw-semi-bold">change</p>
          </div>
          <p className="fs-400 text-primary-450 cost">{`${
            formData.Plane.currency
          }${formData.Plane.cost}/${
            formData.Plane.type === "monthly" ? "mo" : "yo"
          }`}</p>
        </div>
        <div className="service-list" style={{ marginTop: "0px" }}>
          <ul role="list" className="bg-neutral-300">
            {formData.Add_service.map((serv) => {
              return (
                <li className="spread-layer">
                  <p className="fs-400 text-neutral-400 fw-semi-bold">
                    {serv.name}
                  </p>
                  <p className="fs-400 text-neutral-450 fw-regular">
                    {`${formData.Plane.currency}${serv.cost}/${
                      formData.Plane.type === "monthly" ? "mo" : "yo"
                    }`}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="spread-layer padding-block-700">
          <p className="fs-400 text-neutral-400 fw-semi-bold">
            {`Total (per ${
              formData.Plane.type === "monthly" ? "month" : "year"
            } )`}
          </p>
          <p className="fs-600 text-primary-450 fw-bold">
            {`${formData.Plane.currency}${total_cost()}/${
              formData.Plane.type === "monthly" ? "mo" : "yo"
            }`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
