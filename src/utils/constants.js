import arcade_image from "../../public/assets/images/icon-arcade.svg";
import Advanced_image from "../../public/assets/images/icon-advanced.svg";
import pro from "../../public/assets/images/icon-pro.svg";

export const asideContent = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export const plane = {
  month: [
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
  year: [
    {
      plane_name: "Arcade",
      image: arcade_image,
      cost: 9,
      currency: "$",
      offer: "2 months free",
      short_form: "yo",
    },
    {
      plane_name: "Advanced",
      image: Advanced_image,
      cost: 12,
      currency: "$",
      offer: "2 months free",
      short_form: "yo",
    },
    {
      plane_name: "Pro",
      image: pro,
      cost: 15,
      currency: "$",
      offer: "2 months free",
      short_form: "yo",
    },
  ],
};
