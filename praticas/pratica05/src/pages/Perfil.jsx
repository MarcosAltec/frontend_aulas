import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function Perfil() {
    return(
        <>
            <Cabecalho/>
            <Conteudo>
                <Menu/>
                <Secao>
                    <InputEmail/>
                    <InputSenha/>
                    <Botao texto="Salvar"/>
                </Secao>
            </Conteudo>
        </>
    )
}

export default Perfil;