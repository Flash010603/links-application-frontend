import React from 'react'
import { Data } from '../interfaces/index';
import { useOptionsCard } from '../hook/useOptionsCard';

interface PropsCard{
  dataLink: Data
}

export const Card = ({dataLink}: PropsCard) => {

  const { handleGoToSite, handleUpdateLink, handleDeleteLink, date } =useOptionsCard(dataLink);
  const {link,name, id} = dataLink

  return (
    <div className="card" onClick={handleGoToSite}>
      <a href={link} target="_blank" className="url">Go to site <i className="far fa-hand-pointer"></i></a>

      <h2 className="card_title">{name} </h2>
      
      <p className="date_created">Modification date: <br /><b>{ date }</b></p>

      <div className="container_btn_card">
        <button className="edit" id={`${id}_edit`} onClick={handleUpdateLink}>
          <i className="far fa-edit edit_icon"></i>
        </button>
        <button className="delete" id={`${id}_delete`} onClick={handleDeleteLink}>
          <i className="far fa-trash-alt delete_icon"></i>
        </button>
      </div>
    </div>
  )
}
