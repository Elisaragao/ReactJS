import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import './signin.css'
import logo from '../../assets/logo.png'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    function handleSignIn(evento) {
        evento.preventDefault()

        if( email !== '' && password !== '') {
            signIn(email, password)
        }

    }

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="logo" />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input type="text"
                        placeholder='email@email.com'
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                    />

                    <input type="password"
                        placeholder='************'
                        value={password}
                        onChange={(evento) => setPassword(evento.target.value)}
                    />

                    <input type="submit" value='Acessar' />

                </form>

                <Link to='/register'> Crie uma conta </Link>
              
            </div>

        </div>
    );
}