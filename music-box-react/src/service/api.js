import axios from "axios";

const api = axios.create({
  baseURL: "https://6250e7e5e3e5d24b34282a74.mockapi.io/sweet-stock/v1/teste",
});

export default api;
