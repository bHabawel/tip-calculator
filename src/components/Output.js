import React from "react";

function Output({ onOutput }) {
  return (
    <div>
      <h1 style={onOutput > 0 ? {} : { visibility: "hidden" }}>
        You pay ${onOutput} (${onOutput} + $12 tip)
      </h1>
    </div>
  );
}

export default Output;
