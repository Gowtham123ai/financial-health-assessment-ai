import axios from "axios";

const API = axios.create({
  baseURL: "https://financial-health-assessment-ai.onrender.com", 
  // 🔁 replace with YOUR Render backend URL
});

export const uploadFile = (formData) =>
  API.post("/upload/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
