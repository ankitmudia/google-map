import React from "react";
import MarkerPinIcon from "../../MarkerPin.svg";

const MarkerPin = () => (
  <img
    style={{
      position: "absolute",
      top: "100%",
      left: "50%",
      height: "24px",
      width: "24px",
      transform: "translate(-50%, -100%)",
    }}
    src={MarkerPinIcon}
    alt="Marker Pin"
  />
);

export default MarkerPin;
