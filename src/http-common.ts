import axios from "axios";

export default axios.create({
  baseURL: "https://naves.azurewebsites.net",
  headers: {
    "Content-type": "application/json"
  }
});