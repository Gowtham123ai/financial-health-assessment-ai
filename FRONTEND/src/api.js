import axios from "axios";

export const uploadFile = (file, language, industry) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(
    `http://127.0.0.1:8000/upload/?language=${language}&industry=${industry}`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" }
    }
  );
};
