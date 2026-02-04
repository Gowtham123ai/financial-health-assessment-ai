import React, { useState } from "react";
import { uploadFile } from "./api";

function Upload() {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("Services");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

 const submit = async () => {
  if (!file) {
    alert("Please select a file");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("language", language);
  formData.append("industry", industry);

  setLoading(true);
  setResult(null); // 👈 clear old results

  try {
    const res = await uploadFile(formData);
    setResult(res.data);
  } catch (err) {
    alert("Failed to analyze. Backend may be sleeping.");
    console.error(err);
  }

  setLoading(false);
};

  return (
    <div className="card">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <select onChange={(e) => setLanguage(e.target.value)}>
        <option>English</option>
        <option>Hindi</option>
      </select>

      <select onChange={(e) => setIndustry(e.target.value)}>
        <option>Services</option>
        <option>Manufacturing</option>
        <option>Retail</option>
        <option>Agriculture</option>
        <option>E-commerce</option>
      </select>

      <button onClick={submit}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && (
        <div className="output">
          <h3>Metrics</h3>
          <pre>{JSON.stringify(result.metrics, null, 2)}</pre>

          <h3>AI Insights</h3>
          <pre>{result.ai_insights}</pre>
        </div>
      )}
    </div>
  );
}

export default Upload;
