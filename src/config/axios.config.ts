import axios from "axios";

import "dotenv/config";

const api = axios.create({
  baseURL: process.env.RICK_MORTY_API,
});

export default api;
