import { BrowserRouter, Routes } from 'react-router-dom';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth';
import './estilo.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

