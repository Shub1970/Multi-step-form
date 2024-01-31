import { useState } from "react";
import asideImage from "../../public/assets/images/bg-sidebar-desktop.svg";
import Finished from "./Finished";
import Plane from "./Plane";
import AddOns from "./AddOns";
import InitialForm from "./InitialForm";
import { asideContent } from "../utils/constants";
const initial_state = {
  step_no: 1,
  Max_step: 4,
  isLastStep: function () {
    return this.step_no === this.Max_step;
  },
};

const all_form = [
  {
    step_no: 1,
    component: <InitialForm />,
  },
  {
    step_no: 2,
    component: <Plane />,
  },
  {
    step_no: 3,
    component: <AddOns />,
  },
  {
    step_no: 4,
    component: <Finished />,
  },
];

const Multiplestepform = () => {
  const [stepNo, setStepNo] = useState(initial_state);

  const stepRender = asideContent.map((item, index) => (
    <li
      key={index}
      data-step_pointer={index}
      onClick={() => {
        setStepNo({ ...stepNo, step_no: index + 1 });
      }}
    >
      <p className="fw-regular text-neutral-350">Step {index}</p>
      <h3 className="step fw-bold text-neutral-300">{item}</h3>
    </li>
  ));

  return (
    <>
      <aside>
        <img src={asideImage} alt="aside image" />
        <ul>{stepRender}</ul>
      </aside>
      <div className="form-container">
        {all_form.map((item) => {
          if (stepNo.step_no === item.step_no) {
            return item.component;
          }
          return null; // Add this to handle the case when step_no doesn't match any form
        })}
      </div>
    </>
  );
};
export default Multiplestepform;
