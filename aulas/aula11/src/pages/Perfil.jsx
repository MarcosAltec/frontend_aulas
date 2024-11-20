import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Menu from "../components/Menu";
import Formulario from "./Formulario";

function Perfil() {
    const [msg, setMsg] = useState("");
    const {id} = useParams();

    const { usuario, atualizar} = useContext(AuthContext)

    const onEnviar = async (data) => {
        const erro  = await atualizar ({id, ...data});
        if (erro) {
            setMsg(erro);
        } else {
            
        }
    }

    return (
        <>
            <Menu />
            <h1>Perfil</h1>
            <Formulario onEnviar={onEnviar} valores={{email: usuario.email, senha: null}}/>
        </>
    )
}

export default Perfil;