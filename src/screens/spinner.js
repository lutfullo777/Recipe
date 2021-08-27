import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        display: "flex",
        top: 0,
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Spinner
        animation="border"
        variant="primary"
        style={{
          color: "red",
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

export default Loading;
