import React, { useContext, useEffect, useState } from 'react'
import Swal, { SweetAlertOptions } from 'sweetalert2'
import { ModalContext } from '../context/ModalContext';
import { Data } from '../interfaces/index';
import { fetchingDataObj } from '../helper/fetchinLinks';
import { showAlert } from '../helper/alert';
import { baseUrlApi } from '../helper/urlCongif';

interface PropsCard{
  dataLink: Data
}

export const Card = ({dataLink}: PropsCard) => {

  const [date, setDate] = useState("")

  const { link,name,start,id }=dataLink;

  const { setToggleModal,setSendDataAll,setSendData, modalState } = useContext(ModalContext);
  const {dataAll }= modalState;


  const handleUpdateLink = () => {

    setSendData(dataLink);
    const isUpdated = true;
    setToggleModal(isUpdated);

  };

  const handleDeleteLink = async() => {
    const config:SweetAlertOptions<any,any> = {
      title: 'Estas seguro',
      text: "Si eliminas este registro, no lo vas a recuperar jamas",
      icon: 'warning',
      iconColor:'#069e1a',
      showCancelButton: true,
      confirmButtonColor: '#069e1a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }
    const res = await Swal.fire(config);
    if(res.isConfirmed){

      const result = await fetchingDataObj(id,null,"DELETE");
      if(result){
        console.log('haciendo fetch')
        const res = await fetch(`${baseUrlApi}`);
        const info = await res.json();

        if(info?.data){
            const links: Data[] = info.data;
            if(dataAll.length !== links.length) setSendDataAll(links);
            // if(data.length !== links.length) setData(links)
        }
        showAlert(result.msg,'success');
      }
    }
    
  };

  useEffect(() => {
    console.log('object')
    let fecha = new Date(start)
    const fechaFull = `
    ${fecha.getDate()} / ${fecha.getMonth()+1} / ${fecha.getFullYear()} 
    - 
    ( ${fecha.getHours()}: ${fecha.getMinutes()} )`;

    setDate(fechaFull)
  }, [start])

  const handleGoToSite = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    
    const tar = e.target as HTMLDivElement;    

    if(!(tar.classList.contains("edit") || tar.classList.contains("delete"))){
      window.open(link, '_blank')?.focus();
    }
  }

  return (
    <div className="card" onClick={handleGoToSite}>
      <a href={link} target="_blank" className="url">Go to site <i className="far fa-hand-pointer"></i></a>

      <h2 className="card_title">{name} </h2>
      
      <p className="date_created">Modification date: <br /><b>{ date }</b></p>

      <div className="container_btn_card">
        <button className="edit" onClick={handleUpdateLink}>
          <i className="far fa-edit"></i>
        </button>
        <button className="delete" onClick={handleDeleteLink}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}
