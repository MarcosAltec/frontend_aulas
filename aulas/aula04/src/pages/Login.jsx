import Logo         from '../components/Logo'
import Titulo       from '../components/Titulo'
import InputUsuario from '../components/InputUsuario'
import InputSenha   from '../components/InputSenha'
import BotaoSubmit  from '../components/BotaoSubmit'
import Link         from '../components/Link'
import Rodape       from '../components/Rodape'
import "./Login.css"

function Login() {
    const urlLogo = "https://th.bing.com/th/id/OIP.2NaVm9dhAV5TzZRs62AXPQHaHa?rs=1&pid=ImgDetMain";
    const textoLogo = "Logo da Aplicação";
    return (
        <>
            <main className='login-form'>
                <Logo imagem={urlLogo} texto={textoLogo}/>
                <Titulo texto="Aluno Online do IESB"/>
                <InputUsuario/>
                <InputSenha/>
                <BotaoSubmit texto="Entrar"/>
                <Link texto="Esqueceu a senha?"/>
                <Link texto="Criar uma conta"/>
            </main>
            <Rodape/>
        </>
    )
}

export default Login;
