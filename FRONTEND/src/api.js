import axios from "axios";
const API_BASE = "https://financial-health-backend.onrender.com";

export const uploadFile = (file, language, industry) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(
    `${API_BASE}/upload/?language=${language}&industry=${industry}`,
    formData
  );
};
