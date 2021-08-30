
import {  DataSend, ILinkRestObj } from '../interfaces/index';
import { baseUrlApi } from './urlCongif';


export const fetchingDataObj = async (path: string, data: DataSend | null, method: "POST" | "PUT" | "DELETE") => {

    const url = `${baseUrlApi}/${path}`

    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: (data) && JSON.stringify(data)
    }

    const res = await fetch(url, options);
    const info: ILinkRestObj = await res.json();
    return info;
};
