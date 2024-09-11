import { useState } from "react"
import InputEmail from "../components/InputEmail"
import InputSenha from "../components/InputSenha"
import Botao from "../components/Botao"

function FormLogin (props){
    const [email, setEmail] = useState("marcos@iesb.br"); 
    const [senha, setSenha] = useState();

    const efetuaLogin = (e) => {
        e.preventDefault();
        props.navegaPara("/home")
    }

    return (
        <form onSubmit={efetuaLogin}>
            <InputEmail texto="E-mail" valor={email} mudaValor={setEmail}/>
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha}/>
            <Botao texto="Entrar"/>
        </form>
    )
}

export default FormLogin;