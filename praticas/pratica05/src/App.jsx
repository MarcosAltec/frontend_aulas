import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

function App() {
  const index = 1
  return (
    <>
      {index == 1 && <Home/>}
      {index == 2 && <Perfil/>}
      {index == 3 && <Login/>}
    </>
  )
}

export default App;