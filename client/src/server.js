import axios from "axios";

const server = axios.create({
  baseURL: "https://au-ecdsa-node.onrender.com/",
});

export default server;
