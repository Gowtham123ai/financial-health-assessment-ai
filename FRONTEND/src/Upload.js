import React, { useState } from "react";
import { uploadFile } from "./api";

function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("Services");

  const submit = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const res = await uploadFile(file, language, industry);
    setResult(res.data);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="file"
        accept=".csv,.xlsx,.pdf"
        onChange={e => setFile(e.target.files[0])}
      />

      <br /><br />

      <label>Language: </label>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>

      <br /><br />

      <label>Industry: </label>
      <select value={industry} onChange={e => setIndustry(e.target.value)}>
        <option>Manufacturing</option>
        <option>Retail</option>
        <option>Services</option>
        <option>Logistics</option>
        <option>E-commerce</option>
        <option>Agriculture</option>
      </select>

      <br /><br />

      <button onClick={submit}>Analyze</button>
    </div>
  );
}

export default Upload;
