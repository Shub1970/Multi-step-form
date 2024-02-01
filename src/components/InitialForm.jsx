import React from "react";

const InitialForm = () => {
  return (
    <>
      <header className="flow">
        <h2 className="text-accent-400 fw-bold">Personal info</h2>
        <p className="text-neutral-350 fw-regular">
          Please provide your name, email, address, and phone number.
        </p>
      </header>
      <div class="flow padding-block-700">
        <div class="form-group">
          <label for="name" class="text-primary-500 fw-semi-bold">
            Name
          </label>
          <span class="error-message mg-l-auto">follow pattern</span>
          <input
            type="text"
            name="name"
            id="name"
            minlength="5"
            placeholder="e.g. Stephen King "
            class="text-neutral-500 fw-semi-bold"
            pattern="^[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$
                    "
          />
        </div>
        <div class="form-group">
          <label for="email" class="text-primary-500 fw-semi-bold">
            Email Address
          </label>
          <span class="error-message mg-l-auto">enter the correct email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            class="text-neutral-500 fw-semi-bold"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
                    "
          />
        </div>
        <div class="form-group">
          <label for="phone" class="text-primary-500 fw-semi-bold">
            Phone Number
          </label>
          <span class="error-message mg-l-auto">
            enter correct phone number
          </span>
          <input
            type="text"
            name="phone"
            id="phone"
            pattern="^\+?[0-9\s-]{10,15}$"
            minlength="9"
            placeholder="e.g. +1 234 567 890 "
            class="text-neutral-500 fw-semi-bold"
          />
        </div>
      </div>
    </>
  );
};

export default InitialForm;
