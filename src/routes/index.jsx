import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIN'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard';

import Private from './Private';

export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} />
        </Routes>
    );
}