import React, { createContext, useReducer } from 'react'
import { modalReducer } from './modalReducer';


export interface ModalState{
    isOpen: boolean;
}

const modalInitialState:ModalState = {
    isOpen: false,
}

export interface ModalContextProps{
    modalState: ModalState;
    setToggleModal: ( isUpdate:boolean ) => void;
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

    return (
        <ModalContext.Provider value={{
            modalState,
            setToggleModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}
