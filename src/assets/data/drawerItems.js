import home from "../SVGs/home.svg";
import shorts from "../SVGs/shorts.svg";
import subscriptions from "../SVGs/subscriptions.svg";
import selectedSubscriptions from "../SVGs/selected-subscriptions.svg"
import selectedYou from "../SVGs/selected-you.svg";
import history from "../SVGs/history.svg";
import you from "../SVGs/you.svg";
import selectedHome from "../SVGs/selected-home.svg";
import selectedHistory from "../SVGs/selected-history.svg";

 import { useContext } from "react";
 import { GlobalContext } from "../../global store/global-context";

 export const rawerItems = [
    {
      img: home,
      label: "Home",
    },
    {
      img: shorts,
      label: "Shorts",
    },
    {
      img: subscriptions,
      label: "Subscriptions",
    },
    {
      img: selectedYou,
      label: "You",
    },
    {
      img: history,
      label: "History",
    },
    {
      img: selectedHome,
      label: "Home",
    },
    {
      img: shorts,
      label: "Shorts",
    },
    {
      img: subscriptions,
      label: "Subscriptions",
    },
    {
      img: you,
      label: "You",
    },
    {
      img: history,
      label: "History",
    },
  ];

  export const historyNavArray = {
    home:{
      img: home,
      label: "Home",
      alt: home,
    },
    shorts:{
      img: shorts,
      label: "Shorts",
      alt: shorts,
    },
    subscriptions:{
      img: subscriptions,
      label: "Subscriptions",
      alt: subscriptions,
    },
    you:{
      img: you,
      label: "You",
      alt: you,
    },
    selectedHistory:{
      img: selectedHistory,
      label: "History",
      alt: selectedHistory,
    },
    {
      img: selectedShorts,
      label: "Shorts",
      alt: selectedShorts
    },
    {
      img: selectedSubscriptions,
      label: "Subscriptions",
      alt: selectedSubscriptions
    },
    {
      img: selectedYou,
      label: "You",
      alt: selectedYou
    },
    {
      img: history,
      label: "History",
      alt: 
    },
  ];