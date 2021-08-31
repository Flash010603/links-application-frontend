import { useContext, useEffect, useState } from 'react'

import { useGetData } from './useGetData';
import { LinkContext } from '../context/LinkContext';

export const useInitFetching = () => {
   
    const { linkState } = useContext(LinkContext);
   
    const { dataAll } = linkState;
    

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
        dataAll
    }
}
