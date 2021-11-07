import React from 'react'
import { useForm } from 'react-hook-form';
import { Account } from '../../model/account.model';
import { Token } from '../../model/token.model';
import { Axios } from '../../server/axios';
import { ResponseObject } from '../../shared/response.shared';

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
            localStorage.setItem("token", result.token);
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