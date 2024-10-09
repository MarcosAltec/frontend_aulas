import { createContext, useState } from "react";

const TarefaContext = createContext();

function TarefaProvide(props) {
    const [tarefas, setTarefas] = useState([]);

    const incluir = (tarefa) => {
        setTarefas([...tarefas, tarefa]);
    }

    const remover = (tarefa) => {
        setTarefas(tarefas.filter(item => item !== tarefa));
    }

    const contexto = { tarefas, incluir, remover }

    return (
        <TarefaContext.Provider value={contexto}>{props.children}</TarefaContext.Provider>
    )
}

export { TarefaContext, TarefaProvide }