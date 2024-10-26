import axios from "axios";
import { get } from "react-hook-form";
const url = import.meta.env.VITE_URL_API;

//import.meta.env.VITE_URL_API

function carregarContatos() {
    return axios
        .get(url)
        .then((response) => {return {sucesso: true, dados: response.data}})
        .catch((error) => {return {sucesso: false, mensagem: error.message}});
}

function criarContato(contato) {
    return axios
        .post(url, contato)
        .then((response) => {return {sucesso: true, dado: response.data}})
        .catch((error) => {return {sucesso: false, mensagem: error.message}});
}

function atualizarContato(contato) {}

function removerContato(id) {
    return (
        axios
        .delete(`${url}/${id}`)
        .then((response) => {return {sucesso: true, dados: response.data}})
        .catch((error) => {return {sucesso: false, mensagem: error.message}})
    )
}

function obterContato(id) {
    return (
        axios
        .get(`${url}/${id}`)
        .then((response) => {return {sucesso: true, dados: response.data}})
        .catch((error) => { return {sucesso: false, mensagem: error.message}})
    )
}

export {
    carregarContatos,
    criarContato,
    atualizarContato,
    removerContato,
    obterContato
};
