import { useState, createContext, useEffect } from "react";
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    async function signIn(email, password) {
        setLoadingAuth(true)
        await signInWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid 
            
            const docRef = doc(db, "users", uid)
            const docSnap = await getDoc(docRef)

            let data = {
                uid: uid,
                nome: docSnap.data().nome,
                email: value.user.email,
                avatarUrl: docSnap.data().avatarUrl
            }

            setUser(data)
            setLoadingAuth(false)
            toast.success("Bem-vindo(a) de volta!")
            navigate("/dashboard")
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
            toast.error("Ops! Algo deu errado!")
        })
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
                        toast.success("Seja bem-vindo(a) ao sistema!")
                        navigate("/dashboard")
                    })
            })
            .catch((error) => {
                console.log(error)
                setLoadingAuth(false)
                //toast.error("Ops! Algo deu errado!")
            })
    }

        async function logout() {
            await signOut()
            setUser(null)
        }

    return (
        <AuthContext.Provider value={{
            signed: !!user, //transforma 'user' em booleano
            user,
            signIn,
            signUp,
            logout,
            loadingAuth,
            loading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}