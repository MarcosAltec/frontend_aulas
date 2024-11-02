import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem";
import Cabecalho from "../componentes/Cabecalho";
import Conteudo from "../componentes/Conteudo";

function Listar() {
  const [contatos, setContatos] = useState("");
  const navigate = useNavigate();
  const trataAtualizar = (id) => {
    navigate(`/editar/${id}`);
  };
  const tratarRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      carregar();
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };
  const carregar = async () => {
    const resposta = await buscarTodos();
    if (resposta.sucesso) {
      setContatos(resposta.dados);
    } else {
      setErro(resposta.mensagem);
    }
  };
  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h2>Listar Contatos</h2>
        <Listagem
          itens={contatos}
          trataAtualizar={trataAtualizar}
          tratarRemover={tratarRemover}
        />
        {erro && <p>{erro}</p>}
      </Conteudo>
    </>
  );
}

export default Listar;
