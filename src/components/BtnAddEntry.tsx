import React, { useContext } from 'react'
import plus from '../assets/plus.png';
import { ModalContext } from '../context/ModalContext';

export const BtnAddEntry = () => {

    const { modalState,setToggleModal } = useContext(ModalContext);

    return (
    <div className="entry">
        <img src={plus} alt="plus" onClick={ ()=> setToggleModal(false)} />
        <div className="popup">
            Agrega una entrada
        </div>
    </div>
    )
}
