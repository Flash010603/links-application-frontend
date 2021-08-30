import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../context/ModalContext';
import { useGetData } from './useGetData';
import { LinkContext } from '../context/LinkContext';

export const useInitFetching = () => {
   
    const { modalState } = useContext(ModalContext);
    const { linkState } = useContext(LinkContext);
   
    const { dataAll } = linkState;
    const { isOpen } = modalState;

    const [loading, setLoading] = useState(true);
    const { handleGetData } = useGetData();
    
    const doFetch = async () => {
        setLoading(true)
        await handleGetData();
        setLoading(false)
    }

    useEffect(() => {
        doFetch();
        return () => {
            setLoading(true)
        }
    }, [])
        

    return {
        loading,
        dataAll,
        isOpen
    }
}
