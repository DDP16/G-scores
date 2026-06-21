import axios from "axios";
import { BE_ENPOINT, PUBLIC_ENPOINT } from "../../settings/localVar";

const productURL = PUBLIC_ENPOINT;
const developmentURL = BE_ENPOINT;

const baseURL = import.meta.env.MODE === "production" ? productURL : developmentURL;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "ngrok-skip-browser-warning": "69420"
  },
});

export default instance;
