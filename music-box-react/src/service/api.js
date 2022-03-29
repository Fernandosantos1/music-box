import axios from "axios";

const api = axios.create({
  baseURL: "https://62423a7ad126926d0c4f2ee8.mockapi.io/music/music",
});

export default api;
