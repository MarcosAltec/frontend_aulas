function InputEmail(props){
    return(
        <>
            <label htmlFor="email">{props.texto}</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            value={props.valor} 
            onChange={(e)=>{
                console.log(e.target.value)
                props.mudaValor(e.target.value)}}/>
        </>
    )
}

export default InputEmail;