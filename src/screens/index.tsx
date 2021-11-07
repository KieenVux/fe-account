import React from 'react'
import { Login } from '../components/login/login';
import { HomeScreen } from './home';


export const Screens: React.FC = () => {
    return (
        <div>
            <Login />
            <HomeScreen />
        </div>
    );
}