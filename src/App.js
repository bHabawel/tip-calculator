import Bill from "./components/Bill";
import Service from "./components/Service";
import Output from "./components/Output";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [newBill, setNewBill] = useState(0);

  function handleAddBill(bill) {
    setNewBill(bill);
  }

  return (
    <div className="App">
      <Bill onAddBill={handleAddBill} />
      <Service />
      <Output onOutput={newBill} />
      <Reset />
    </div>
  );
}

export default App;
