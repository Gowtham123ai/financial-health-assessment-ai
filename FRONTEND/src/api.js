import axios from "axios";

const API_BASE =
  process.env.REACT_APP_API_URL ||
  "http://127.0.0.1:8000"; // fallback for local dev

export const uploadFile = (file, language, industry) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(
    `${API_BASE}/upload/?language=${language}&industry=${industry}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};
