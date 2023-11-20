import React from "react";

function Service() {
  return (
    <>
      <ServiceContent>How did you like the service? </ServiceContent>
      <ServiceContent>How did your friend like the service? </ServiceContent>
    </>
  );
}

function ServiceContent({ children }) {
  return (
    <div>
      <span>{children}</span>
      <select>
        <option>Dissatisfied (0%)</option>
        <option>Dissatisfied (10%)</option>
        <option>Dissatisfied (25%)</option>
        <option>Dissatisfied (50%)</option>
        <option>Dissatisfied (75%)</option>
        <option>Dissatisfied (100%)</option>
      </select>
    </div>
  );
}

export default Service;
