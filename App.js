import React, { createContext, useContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Multiplestepform from "./src/components/Multiplestepform";
import "./style.css";

const formDataContext = createContext(null);
const formDataEditDispatchContext = createContext(null);

const initialFormData = {
  Name: "",
  Email: "",
  Phone: "",
  Plane: {
    type: "monthly",
    name: "Arcade",
    cost: "9",
    offer: "",
    currency: "$",
  },
  Add_service: [],
};

export const App = () => {
  const [formData, dispatch] = useReducer(formReducer, initialFormData);
  return (
    <>
      <formDataContext.Provider value={formData}>
        <formDataEditDispatchContext.Provider value={dispatch}>
          <Multiplestepform />
          <div className="attribution">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Your Name Here</a>.
          </div>
        </formDataEditDispatchContext.Provider>
      </formDataContext.Provider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export function useFormData() {
  return useContext(formDataContext);
}

export function useFormDispatch() {
  return useContext(formDataEditDispatchContext);
}

function formReducer(formData, action) {
  switch (action.type) {
    case "change": {
      return {
        ...formData,
        ...action.changeProperty,
      };
    }
    case "add": {
      return {
        ...formData,
        Add_service: [...formData.Add_service, action.service],
      };
    }
    case "delete": {
      const newService = formData.Add_service.filter(
        (serv) => serv.name !== action.service.name
      );
      return {
        ...formData,
        Add_service: newService,
      };
    }
    case "clear_service": {
      return {
        ...formData,
        Add_service: [],
      };
    }
    default:
      return formData;
  }
}
