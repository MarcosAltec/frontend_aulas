function InputSenha(props) {
    const regras = {
        required: 'Senha é obrigatório',
        minLenght: {value: 6, message: 'Senha deve ter pelo menos 6 caracteres'}
    };

    return (
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" {...props.register("senha", regras)} />
            {props.error && <p>{props.error}</p>}
        </>
    )
}

export default InputSenha;