import React, { useContext } from 'react'

import plus from '../../assets/plus.png';

export const BtnAddEntry = () => {

    return (
    <div className="entry">
        <label htmlFor="modal">
            <img src={plus} alt="plus" />
        </label>
        <div className="popup">
            Agrega una entrada
        </div>
    </div>
    )
}
