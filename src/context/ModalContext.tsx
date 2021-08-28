import React, { createContext, useReducer } from 'react'
import { modalReducer } from './modalReducer';
import { Data } from '../interfaces/index';


export interface ModalState{
    isOpen: boolean;
    isUpdated:boolean;
    data:Data | null,
    dataAll: Data[]
}

const modalInitialState:ModalState = {
    isOpen: false,
    isUpdated:false,
    data:null,
    dataAll: []
}

export interface ModalContextProps{
    modalState: ModalState;
    setToggleModal: ( isUpdate:boolean ) => void;
    setSendData: (data:Data|null) => void;
    setSendDataAll: (data:Data[]) => void;
}

export const ModalContext = createContext({ } as ModalContextProps);


export const ModalProvider:React.FC = ({children}) => {

    const [modalState, dispatch] = useReducer(modalReducer, modalInitialState);

    const setToggleModal = (isUpdate:boolean) => {
        dispatch({
            type:'setmodal',
            payload:isUpdate
        })     
    };

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
        <ModalContext.Provider value={{
            modalState,
            setToggleModal,
            setSendData,
            setSendDataAll
        }}>
            {children}
        </ModalContext.Provider>
    )
}
