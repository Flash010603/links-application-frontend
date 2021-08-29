import { useContext } from 'react';
import { baseUrlApi } from '../helper/urlCongif';
import { Data } from '../interfaces/index';
import { ModalContext } from '../context/ModalContext';


export const useGetData = () => {

    const { setSendDataAll, modalState } = useContext(ModalContext);
    const {dataAll }= modalState;

    const handleGetData = async() => {
        const res = await fetch(`${baseUrlApi}`);
        const info = await res.json();
        console.log('haciendo fetch GET')

        if(info?.data){
            const links: Data[] = info.data;
            if(dataAll.length !== links.length) setSendDataAll(links);
        }
    };

    return {
        handleGetData
    }
}
