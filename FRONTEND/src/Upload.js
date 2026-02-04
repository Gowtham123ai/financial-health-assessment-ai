import axios from "axios";
import { useState } from "react";

function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("Services");

  const submit = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/upload/?language=${language}&industry=${industry}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

    setResult(response.data);
  };

  return (
    <div>
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
      </select>

      <button onClick={submit}>Analyze</button>
    </div>
  );
}

export default Upload;
