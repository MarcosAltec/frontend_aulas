import { Navigate } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormLogin() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const navigate = Navigate();
    const onSubmit = (data) => {
        console.log(data);
        navigate("/home")
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputEmail />
            <InputSenha />
            <Botao />
        </form>
    )
}

export default FormLogin;