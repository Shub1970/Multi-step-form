import React, { useState } from "react";
import { useFormData, useFormDispatch } from "../../App";

const Service = ({
  service_name,
  service_description,
  service_cost,
  currency,
  short_form,
}) => {
  const formData = useFormData();
  const dispatch = useFormDispatch();

  function find_service(name) {
    let arra = formData.Add_service.filter((service) => service.name === name);
    return arra.length;
  }

  function add_del_operation(name, cost) {
    if (!find_service(name)) {
      dispatch({
        type: "add",
        service: { name, cost },
      });
    } else {
      dispatch({
        type: "delete",
        service: { name, cost },
      });
    }
  }

  return (
    <div className="form-check check-input">
      <input
        type="checkbox"
        name={service_name}
        id={service_name}
        checked={find_service(service_name)}
        onChange={() => {
          add_del_operation(service_name, service_cost);
        }}
      />
      <label htmlFor={service_name}>
        <div className="detail">
          <p className="fs-500 fw-bold text-accent-400">{service_name}</p>
          <p className="fs-400 text-neutral-400 fw-semi-bold">
            {service_description}
          </p>
        </div>
        <p className="fs-400 text-primary-450 cost">{`${currency}${service_cost}/${short_form}`}</p>
      </label>
    </div>
  );
};

export default Service;
