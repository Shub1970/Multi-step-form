import arcade_image from "../../public/assets/images/icon-arcade.svg";
import Advanced_image from "../../public/assets/images/icon-advanced.svg";
import pro from "../../public/assets/images/icon-pro.svg";

export const asideContent = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export const plane = {
  monthly: [
    {
      plane_name: "Arcade",
      image: arcade_image,
      cost: 9,
      currency: "$",
      offer: "",
      short_form: "mo",
    },
    {
      plane_name: "Advanced",
      image: Advanced_image,
      cost: 12,
      currency: "$",
      offer: "",
      short_form: "mo",
    },
    {
      plane_name: "Pro",
      image: pro,
      cost: 15,
      currency: "$",
      offer: "",
      short_form: "mo",
    },
  ],
  yearly: [
    {
      plane_name: "Arcade",
      image: arcade_image,
      cost: 90,
      currency: "$",
      offer: "2 months free",
      short_form: "yo",
    },
    {
      plane_name: "Advanced",
      image: Advanced_image,
      cost: 120,
      currency: "$",
      offer: "2 months free",
      short_form: "yo",
    },
    {
      plane_name: "Pro",
      image: pro,
      cost: 150,
      currency: "$",
      offer: "2 months free",
      short_form: "yo",
    },
  ],
};

export const services = {
  monthly: [
    {
      service_name: "Online service",
      service_description: "Access to multiplayer games",
      service_cost: 1,
      currency: "$",
      short_form: "mo",
    },
    {
      service_name: "Larger storage",
      service_description: "Extra 1TB of cloud save",
      service_cost: 2,
      currency: "$",
      short_form: "mo",
    },
    {
      service_name: "Customizable Profile",
      service_description: "Custom theme on your profile",
      service_cost: 2,
      currency: "$",
      short_form: "mo",
    },
  ],
  yearly: [
    {
      service_name: "Online service",
      service_description: "Access to multiplayer games",
      service_cost: 10,
      currency: "$",
      short_form: "yo",
    },
    {
      service_name: "Larger storage",
      service_description: "Extra 1TB of cloud save",
      service_cost: 20,
      currency: "$",
      short_form: "yo",
    },
    {
      service_name: "Customizable Profile",
      service_description: "Custom theme on your profile",
      service_cost: 20,
      currency: "$",
      short_form: "yo",
    },
  ],
};
