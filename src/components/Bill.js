import React, { useState } from "react";

function Bill({ onAddBill }) {
  const [bill, setBill] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newBill = bill;
    onAddBill(newBill);
  }
  return (
    <form onSubmit={handleSubmit}>
      <span>How much was the bill?</span>
      <input
        type="text"
        inputMode="numeric"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </form>
  );
}

export default Bill;
