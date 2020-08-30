import axios from "axios";
const baseURL = "http://localhost:4000"

const baseConfig = {
    baseURL,
    timeout: 10000
  };
  const CLIENT = axios.create(baseConfig);

export function getPythonRepos() {
    const client = CLIENT;
    const defaults = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return client.request(defaults).then(data => data);
}