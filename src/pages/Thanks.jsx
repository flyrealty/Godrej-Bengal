import React from "react";
import { ImCancelCircle } from "react-icons/im";

const Thanks = ({ setShowPopup }) => {
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9998,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const popupStyle = {
    position: "relative",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    textAlign: "center",
    zIndex: 9999,
    width: "38%",
  };

  return (
    <div style={backdropStyle}>
      <div style={popupStyle}>
        <p>
          Your message has been recorded. Our Property Expert will get back to
          you soon!
        </p>
        <button
          onClick={() => {
            setShowPopup(false);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginTop: "15px",
            color: "#0c1d3c",
          }}
        >
          <ImCancelCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default Thanks;
