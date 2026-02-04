import React, { useState } from "react";
import Upload from "./Upload";
import Dashboard from "./Dashboard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Financial Health Assessment Tool</h1>

      <Upload setResult={setResult} />

      {result && <Dashboard data={result} />}
    </div>
  );
}

export default App;
