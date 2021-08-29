import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../context/ModalContext';
import { useGetData } from './useGetData';

export const useInitFetching = () => {
    const {handleGetData}=useGetData();
    const { modalState } = useContext(ModalContext);
    const { isOpen, dataAll } = modalState;
    const [loading, setLoading] = useState(true);


    const doFetch = async () => {
        setLoading(true)
        await handleGetData();
        setLoading(false)
    };

    useEffect(() => {
        doFetch();

        return ()=>{
            setLoading(true)  
        }
    }, [])

    return {
        loading,
        dataAll,
        isOpen
    }
}
