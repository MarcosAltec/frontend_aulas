import { useContext, useState } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function FormTarefa() {
    const [ tarefa, setTarefa] = useState("");
    const { incluir } = useContext(TarefaContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarefa) {
            incluir(tarefa);
            setTarefa('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite a tarefa" 
                value={tarefa} 
                onChange={(e) => setTarefa(e.target.value)}>
            </input>
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default FormTarefa;