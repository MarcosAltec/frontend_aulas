import Conteudo from "../components/Conteudo";
import Rodape from "../components/Rodape";
import FormLogin from "./FormLogin";

function Login() {
    return (
        <>
        <Conteudo />
        <Rodape />
        <img src="https://www.svgrepo.com/show/411955/learn.svg" alt="Logo da Aplicação" />
        <h1>Aluno Online</h1>
        <FormLogin />
        </>
    );
}

export default Login;