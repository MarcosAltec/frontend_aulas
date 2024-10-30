import axios from "axios";

const url = import.meta.env.VITE + API_URL;

function buscarTodos() {
  return axios
    .get(url)
    .then((response) => {})
    .catch((error) => {});
}
