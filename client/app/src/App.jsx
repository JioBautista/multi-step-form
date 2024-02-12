import React from "react";
import StepOne from "./steps/StepOne";
import NextStep from "./NextStep";
import Pagination from "./Pagination";

function App() {
  return (
    <div style={{ backgroundColor: "#D6D9E6", position: "relative" }}>
      <Pagination />
      <StepOne />
      <NextStep />
    </div>
  );
}

export default App;
