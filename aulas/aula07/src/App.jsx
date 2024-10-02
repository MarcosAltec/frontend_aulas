import { useForm } from "react-hook-form"
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function App() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    return (
        <>
        <Perfil/>
        </>
    )
}

export default App;