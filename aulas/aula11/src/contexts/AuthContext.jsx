import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
    const [usuario, setUsuario] = useState({email: "", perfil: "", logado: false});
}

const login = (dados) => {
    if (dados.email === "marcos@iesb.edu" && dados.senha === "123") {
        setUsuario({email: dados.email, perfil: "aluno", logado: true})
    } else {
        
    }

    const logout = () => [
        setUsuario({email: "", perfil: "", logado: false})
    ]

    const contexto = {
        usuario, 
        login,
        logout
    }

    return <AuthContext.Provider value={contexto}>{props.children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider}