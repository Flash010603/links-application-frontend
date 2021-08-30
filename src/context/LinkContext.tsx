import React, { createContext, useReducer } from 'react'
import { Data } from '../interfaces/index';
import { linkReducer } from './linkReducer';


export interface LinkState{
    isUpdated:boolean;
    data:Data | null,
    dataAll: Data[]
}

const linkInitialState:LinkState = {
    isUpdated:false,
    data:null,
    dataAll: []
}

export interface LinkContextProps{
    linkState: LinkState;
    setSendData: (data:Data|null) => void;
    setSendDataAll: (data:Data[]) => void;
}

export const LinkContext = createContext({ } as LinkContextProps);


export const LinkProvider:React.FC = ({children}) => {

    const [linkState, dispatch] = useReducer(linkReducer, linkInitialState);

    const setSendData = (data:Data|null) => {
        dispatch({
            type:'setdata',
            payload:data
        })     
    };

    const setSendDataAll = (data:Data[]) => {
        dispatch({
            type:'setdataAll',
            payload:data
        })     
    };

    return (
        <LinkContext.Provider value={{
            linkState,
            setSendData,
            setSendDataAll
        }}>
            {children}
        </LinkContext.Provider>
    )
}
