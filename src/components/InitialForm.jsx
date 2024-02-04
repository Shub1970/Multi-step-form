import React, { useEffect, useState, useRef } from "react";
import { useFormData, useFormDispatch } from "../../App";

const InitialForm = () => {
  const formData = useFormData();
  const dispatch = useFormDispatch();
  const visibleerror = useRef(false);

  return (
    <>
      <header>
        <h2 className="text-accent-400 fw-bold fs-750">Personal info</h2>
        <p className="text-neutral-350 fw-regular">
          Please provide your name, email, address, and phone number.
        </p>
      </header>
      <div>
        <div className="form-group">
          <label htmlFor="name" className="text-primary-500 fw-semi-bold">
            Name
          </label>
          <span
            className={
              formData.errors.Name ? "error-message" : "error-message active"
            }
          >
            follow pattern
          </span>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.Name}
            placeholder="e.g. Stephen King"
            className="text-neutral-500 fw-semi-bold"
            onChange={(e) => {
              visibleerror.current = true;
              dispatch({
                type: "change",
                changeProperty: { Name: e.target.value },
              });
              dispatch({ type: "validate" });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-primary-500 fw-semi-bold">
            Email Address
          </label>
          <span
            className={
              formData.errors.Email ? "error-message" : "error-message active"
            }
          >
            enter the correct email
          </span>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.Email}
            placeholder="e.g. stephenking@lorem.com"
            className="text-neutral-500 fw-semi-bold"
            onChange={(e) => {
              visibleerror.current = true;
              dispatch({
                type: "change",
                changeProperty: { Email: e.target.value },
              });
              dispatch({ type: "validate" });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="text-primary-500 fw-semi-bold">
            Phone Number
          </label>
          <span
            className={
              formData.errors.Phone ? "error-message" : "error-message active"
            }
          >
            enter correct phone number
          </span>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.Phone}
            placeholder="e.g. +1 234 567 890 "
            onChange={(e) => {
              visibleerror.current = true;
              dispatch({
                type: "change",
                changeProperty: { Phone: e.target.value },
              });
              dispatch({ type: "validate" });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InitialForm;
