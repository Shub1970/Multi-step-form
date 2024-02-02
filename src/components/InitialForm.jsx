import React from "react";

const InitialForm = () => {
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
          <span className="error-message ">follow pattern</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="text-neutral-500 fw-semi-bold"
            pattern="^[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-primary-500 fw-semi-bold">
            Email Address
          </label>
          <span className="error-message ">enter the correct email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="text-neutral-500 fw-semi-bold"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="text-primary-500 fw-semi-bold">
            Phone Number
          </label>
          <span className="error-message ">enter correct phone number</span>
          <input
            type="text"
            name="phone"
            id="phone"
            pattern="^\+?[0-9\s-]{10,15}$"
            placeholder="e.g. +1 234 567 890 "
            className="text-neutral-500 fw-semi-bold"
          />
        </div>
      </div>
    </>
  );
};

export default InitialForm;
