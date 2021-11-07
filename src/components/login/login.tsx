import React from 'react'
import { useForm } from 'react-hook-form';
import { Token } from '../../model/token.model';
import { Axios } from '../../server/axios';

interface loginProps {

}

export const Login: React.FC<loginProps> = ({ }) => {
    type Login = {
        email: string;
        password: string;
    }
    const { register, watch } = useForm<Login>();

    const navigateToHome = async () => {
        const myAxios = new Axios('account');
        const result = await myAxios.post(watch(), 'login') as Token;
        if (result) {
            document.cookie = result.token;
        }
    }
    return (
        <div>
            <label> Email </label> <br />
            <input {...register("email")} type="text" placeholder="Email" name="email" value="good66612@gmail.com" /> <br />
            <label> Password </label> <br />
            <input {...register('password')} type="password" placeholder="Password" name="password" value="username666" /> <br />
            <button onClick={navigateToHome} >Login</button>
        </div>
    );
}