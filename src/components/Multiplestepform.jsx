import { useState } from "react";
import Summary from "./Summary";
import Plane from "./Plane";
import AddOns from "./AddOns";
import InitialForm from "./InitialForm";
import Aside from "./Aside";

const all_form = [
  {
    step_no: 1,
    step_name: "YOUR INFO",
    component: <InitialForm />,
  },
  {
    step_no: 2,
    step_name: "SELECT PLAN",
    component: <Plane />,
  },
  {
    step_no: 3,
    step_name: "ADD-ONS",
    component: <AddOns />,
  },
  {
    step_no: 4,
    step_name: "SUMMARY",
    component: <Summary />,
  },
];

const all_step_name = [];
all_form.map((item) => {
  all_step_name[item.step_no] = item.step_name;
});

const initial_state = {
  step_no: 1,
  Max_step: all_form.length,
  isFirstStep: function () {
    return this.step_no === 1;
  },
  isLastStep: function () {
    return this.step_no === this.Max_step;
  },
};

const Multiplestepform = () => {
  const [stepNo, setStepNo] = useState(initial_state);

  const nextStep = () => {
    setStepNo((prev) => ({
      ...prev,
      step_no: Math.min(prev.step_no + 1, initial_state.Max_step),
    }));
  };

  const prevStep = () => {
    setStepNo((prev) => ({ ...prev, step_no: Math.max(prev.step_no - 1, 0) }));
  };

  const targetStepChange = (targetStep) => {
    setStepNo((prev) => ({ ...prev, step_no: targetStep }));
  };

  return (
    <>
      <h1 className="sr-only">Multiple form</h1>
      <div className="form-wrapper">
        <Aside
          length={all_form.length}
          activeStep={stepNo.step_no}
          targetStep={targetStepChange}
          all_step_n={all_step_name}
        />
        <main>
          <div className="form-container">
            {all_form.map((item) => {
              if (stepNo.step_no === item.step_no) {
                return <div key={item.step_no}>{item.component}</div>;
              }
            })}
          </div>
          <div className="button-container">
            {!stepNo.isFirstStep() ? (
              <button className="button prev-button" onClick={prevStep}>
                Go Back
              </button>
            ) : null}
            <button className="button nex-button" onClick={nextStep}>
              {stepNo.step_no === 4 ? "Submit" : "Next Step"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default Multiplestepform;
