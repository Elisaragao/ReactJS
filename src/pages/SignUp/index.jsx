import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/auth'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp, loadingAuth } = useContext(AuthContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (name !== '' && email !== '' && password !== '') {
      await signUp(name, email, password)
    }
  }


  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt="logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Criar conta</h1>
          <input type="text"
            placeholder='Seu nome'
            value={name}
            onChange={(evento) => setName(evento.target.value)}
          />

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

          <button type='submit'>
            {loadingAuth ? 'Carregando...' : 'Cadastrar'}
          </button>
        
        </form>

        <Link to='/'> Já possui uma conta? Faça login </Link>

      </div>

    </div>
  );

}