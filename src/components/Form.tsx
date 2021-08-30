import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';
import { useForm } from '../hook/useForm';
import { LinkContext } from '../context/LinkContext';

export const Form: React.FC = () => {

  const { handleSubmit, onChange, form } = useForm();
  const { setToggleModal } = useContext(ModalContext);
  const { setSendData, linkState }=useContext(LinkContext);
  const { isUpdated }=linkState
  const { name, url } = form;


  return (
    <>
      <div className="overlay">
        <i className="fas fa-times close" onClick={() => { setToggleModal(false); setSendData(null) }}></i>
      </div>

      <h2 className="title_form">
        {
          (!isUpdated)
            ? 'Agrega otro link!'
            : 'Edita los datos de tu link!'
        }
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="input_container">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>

        <div className="input_container">
          <label htmlFor="">URL:</label>
          <input
            type="url"
            name="url"
            value={url}
            onChange={onChange}
          />
        </div>

        <button className="btn_save">
          <span>Add Url</span>
          <i className="far fa-address-book"></i>
        </button>

      </form>
    </>
  )
}
