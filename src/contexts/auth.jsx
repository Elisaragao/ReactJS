import { useState, createContext, useEffect } from "react";
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const navigate = useNavigate()

    function signIn(email, password) {
        console.log('Email: ' + email + ' / ' + 'Senha: ' + password)
        alert('Logado com sucesso!')
    }

    //Cadastrar um novo user
    async function signUp(name, email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                await setDoc(doc(db, 'users', uid), {
                    nome: name,
                    avatarUrl: null
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: name,
                            email: value.user.email,
                            avatarUrl: null,
                        }

                        setUser(data)
                        setLoadingAuth(false)
                        navigate("/dashboard")
                    })
            })
            .catch((error) => {
                console.log(error)
                setLoadingAuth(false)
            })
    }


    return (
        <AuthContext.Provider value={{
            signed: !!user, //transforma 'user' em booleano
            user,
            signIn,
            signUp,
            loadingAuth,
        }}>
            {children}
        </AuthContext.Provider>
    )
}