function InputNome({register, error}) {
    const regras = {
        required: "NOme é obrigatório"
    }
    return (
        <>
        <label htmlFor="nome">Nome</label>
        <input type="text" {...register("nome", regras)}/>
        {error && <p>{error.message}</p>}
        </>
    )
}

export default InputNome;