import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext';

import plus from '../../assets/plus.png';

export const BtnAddEntry = () => {

    const { setToggleModal } = useContext(ModalContext);

    return (
    <div className="entry">
        <img src={plus} alt="plus" onClick={ ()=> setToggleModal(false)} />
        <div className="popup">
            Agrega una entrada
        </div>
    </div>
    )
}
