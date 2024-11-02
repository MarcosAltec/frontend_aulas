import InputNome from "../componentes/InputNome";
import InputTelefone from "../componentes/InputTelefone";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.valores });

  return (
    <form onSubmit={handleSubmit(props.trataEnviar)}>
        <InputNome />
        <InputTelefone />
        <button type="subit">Salvar</button>
    </form>
  )
}


export default Formulario;