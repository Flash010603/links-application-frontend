import { useCallback, useContext } from 'react';
import { baseUrlApi } from '../helper/urlCongif';
import { Data } from '../interfaces/index';
import { LinkContext } from '../context/LinkContext';


export const useGetData = () => {

    const { setSendDataAll, linkState } = useContext(LinkContext);
    const { dataAll } = linkState;

    const handleGetData = useCallback(
        async () => {
            const res = await fetch(`${baseUrlApi}`);
            const info = await res.json();
    
            if (info?.data) {
                const links: Data[] = info.data;
                if (dataAll.length !== links.length) setSendDataAll(links);
            }
        },
        [],
    )

    return {
        handleGetData
    }
}
