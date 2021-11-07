import React, { useState } from 'react'
import { Account } from '../../model/account.model';
import { Axios } from '../../server/axios';
import { InnerResponse } from '../../shared/response.shared';

interface bodyProps {

}

export const Body: React.FC<bodyProps> = () => {
    const [listAcc, setListAcc] = useState<Account[]>();

    const getAllAcc = async () => {
        const token = "Bearer " + localStorage.getItem("token");
        console.log(token);
        const myAxios = new Axios<InnerResponse<Account[]>>("account", true, token || "");
        const result = await myAxios.get("index");
        const data = result.data;
        setListAcc(data);
        console.log(data);

    }

    return (
        <div>
            <button onClick={getAllAcc} >Get all Account</button>
            {listAcc?.map((acc, index) => (
                <div key={index}>
                    <b>{acc.name}</b>
                </div>
            ))}
        </div>
    );
}