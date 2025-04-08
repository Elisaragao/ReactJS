import { BrowserRouter, Routes } from 'react-router-dom';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth';
import './estilo.css'

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

