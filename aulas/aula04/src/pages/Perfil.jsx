import Conteudo from "../components/conteudo";
import Cabecalho from "../components/Cabecalho";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import InputUsuario from "../components/InputUsuario";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function Perfil() {
    return (
        <>
            <Cabecalho/>
            <Conteudo>
                <Menu/>
                <Secao texto="Perfil do Usuario">
                    <InputUsuario/>
                    <InputSenha />  
                    <BotaoSubmit texto="Salvar"/>
                </Secao>
            </Conteudo>
        </>
    )
}

export default Perfil;