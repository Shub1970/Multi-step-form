import React, { createContext, useContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Multiplestepform from "./src/components/Multiplestepform";
import "./style.css";

const formDataContext = createContext(null);
const formDataEditDispatchContext = createContext(null);

const validateName = (name) => {
  return name.length > 0;
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone) => {
  return /^\d{10}$/.test(phone);
};

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
  errors: {},
  show_error: false,
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
            . Coded by <a href="https://skumarportfolio.netlify.app">shubham</a>
            .
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
    case "validate": {
      const errors = {
        Name: validateName(formData.Name),
        Email: validateEmail(formData.Email),
        Phone: validatePhone(formData.Phone),
      };
      return { ...formData, errors };
    }
    case "clear_service": {
      return {
        ...formData,
        Add_service: [],
      };
    }
    case "show_error": {
      return {
        ...formData,
        show_error: true,
      };
    }
    default:
      return formData;
  }
}
