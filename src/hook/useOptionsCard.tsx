import { useContext, useEffect, useState } from "react";
import Swal, { SweetAlertOptions } from "sweetalert2";
import { showAlert } from "../helper/alert";
import { fetchingDataObj } from '../helper/fetchinLinks';
import { ModalContext } from '../context/ModalContext';
import { Data } from '../interfaces/index';

const config: SweetAlertOptions<any, any> = {
    title: 'Estas seguro',
    text: "Si eliminas este registro, no lo vas a recuperar jamas",
    icon: 'warning',
    iconColor: '#069e1a',
    showCancelButton: true,
    confirmButtonColor: '#069e1a',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'
}

export const useOptionsCard = ((dataLink: Data) => {
    const [date, setDate] = useState("");
    const { link, start, id } = dataLink;
    const { setToggleModal, setSendData,setSendDataAll, modalState } = useContext(ModalContext);
    const {dataAll}=modalState;

    useEffect(() => {
        console.log('fecha')
        let fecha = new Date(start)
        const fechaFull = `${fecha.getDate()} / ${fecha.getMonth() + 1} / ${fecha.getFullYear()} - ( ${fecha.getHours()}: ${fecha.getMinutes()} )`;
        setDate(fechaFull)
        return ()=>{
            setDate("")
        }
    }, [start]);

    const handleUpdateLink = () => {
        
        setSendData(dataLink);
        setToggleModal(true);
    };

    const handleDeleteLink = async () => {

        const res = await Swal.fire(config);

        if (!res.isConfirmed) return;
        
        const result = await fetchingDataObj(id, null, "DELETE");
        if (result) {

            let newData = dataAll.filter(element => element.id !== id);
            setSendDataAll(newData);
            showAlert(result.msg, 'success');
        }
    };


    const handleGoToSite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const tar = e.target as HTMLDivElement;
        const isCardonClick = (["edit", "delete", "far fa-edit edit_icon", "far fa-trash-alt delete_icon"].includes(tar.classList.toString()));
        if (!isCardonClick) window.open(link, '_blank')?.focus();
    }

    return {
        handleGoToSite,
        handleUpdateLink,
        handleDeleteLink,
        date
    }
})
