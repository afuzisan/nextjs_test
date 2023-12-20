import React from "react";

const swipeStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
};

const SwipeGuide = () => {
  return (
    <div id="swipeGuide" style={swipeStyle}>
      左右にスワイプ
    </div>
  );
};

export default SwipeGuide;
