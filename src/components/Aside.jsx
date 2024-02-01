import React from "react";
import asideImage_des from "../../public/assets/images/bg-sidebar-desktop.svg";
import asideImage_mob from "../../public/assets/images/bg-sidebar-mobile.svg";

const Aside = ({ activeStep, targetStep, length, all_step_n }) => {
  let arr = [];
  for (let index = 1; index <= length; index++) {
    arr.push(
      <li
        key={index}
        className={activeStep === index ? "nav-bar active" : "nav-bar"}
        onClick={() => {
          targetStep(index);
        }}
      >
        <p className="fw-regular text-primary-200">Step {index}</p>
        <h3 className="step fw-bold text-neutral-300">{all_step_n[index]}</h3>
      </li>
    );
  }
  return (
    <aside className="stack">
      <picture>
        <source media="(min-width:40em )" srcset={asideImage_des} />
        <img src={asideImage_mob} alt="aside image" />
      </picture>
      <ul role="list">{arr}</ul>
    </aside>
  );
};

export default Aside;
