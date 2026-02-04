import React, { useState } from "react";
import Upload from "./Upload";
import Dashboard from "./Dashboard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <h1>Financial Health Assessment Tool</h1>
      <p style={{ color: "#555" }}>
        AI-powered insights for smarter SME financial decisions
      </p>

      {/* Security & Compliance Banner */}
      <div
        style={{
          background: "#eef6ff",
          padding: "12px",
          borderRadius: "6px",
          marginBottom: "20px",
          borderLeft: "5px solid #1e90ff",
        }}
      >
        🔐 <strong>Security & Compliance:</strong>
        <ul style={{ margin: "8px 0 0 20px" }}>
          <li>All data encrypted <b>in transit (HTTPS/TLS)</b></li>
          <li>Financial data encrypted <b>at rest (AES/Fernet)</b></li>
          <li>Secrets managed via environment variables</li>
        </ul>
      </div>

      {/* Integrations Banner */}
      <div
        style={{
          background: "#f6fff0",
          padding: "12px",
          borderRadius: "6px",
          marginBottom: "20px",
          borderLeft: "5px solid #28a745",
        }}
      >
        🔗 <strong>Integrated Systems:</strong>
        <ul style={{ margin: "8px 0 0 20px" }}>
          <li>🏦 Banking API – cash inflows & outflows</li>
          <li>💳 Payment Gateway API – collections & success rate</li>
        </ul>
      </div>

      {/* Upload Section */}
      <Upload setResult={setResult} />

      {/* Results */}
      {result && <Dashboard data={result} />}

      {/* Footer */}
      <footer style={{ marginTop: "40px", color: "#777", fontSize: "14px" }}>
        © 2026 Financial Health AI · Secure · Compliant · Intelligent
      </footer>
    </div>
  );
}

export default App;
