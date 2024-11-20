import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function buscarTodos() {
  return axios
    .get(url)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro" };
    });
}

function buscarUm() {
  return axios
    .get(`url/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function adicionar() {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function atualizar() {
  return axios
    .put(`url/${contato.id}`, {
      nome: contato.nome,
      telefone: contato.telefone,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function remover() {
  return axios
    .delete(`url/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

export { remover, atualizar, adicionar, buscarUm, buscarTodos };
