import ListTarefa from "./pages/ListTarefa";
import { TarefaProvide } from "./contexts/TarefaContext";
import FormTarefa from "./pages/Formtarefa";

function App() {
  return (
    <TarefaProvide>
      <h1>Lista de tarefas</h1>
      <FormTarefa/>
      <ListTarefa/>
    </TarefaProvide>
  )
}

export default App;