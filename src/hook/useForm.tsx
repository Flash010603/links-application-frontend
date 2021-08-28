import React, { useContext, useEffect, useState } from 'react'
import { toast, TypeOptions } from 'react-toastify';
import { ModalContext } from '../context/ModalContext';
import { fetchingDataObj } from '../helper/fetchinLinks';
import { DataSend, ILinkRestObj, Data } from '../interfaces/index';
import { showAlert } from '../helper/alert';
import { baseUrlApi } from '../helper/urlCongif';

const initialState = {
    name: '',
    url: ''
}

export const useForm = () => {

    const { setToggleModal, setSendDataAll, modalState } = useContext(ModalContext);
    const { data, isUpdated, dataAll } = modalState;

    const [form, setForm] = useState(initialState);
    const { name, url } = form;

    useEffect(() => {

        if (data) {
            setForm({
                name: data.name,
                url: data.link
            })
        } else {
            setForm(initialState)
        }
        return () => {
            setForm(initialState)
        }
    }, [])

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validation()) return;

        const dataSend: DataSend = {
            link: url,
            name,
            start: new Date().getTime()
        }
        

        if (!isUpdated) {

            const dataRes: ILinkRestObj = await fetchingDataObj("", dataSend, "POST");

            if (dataRes?.data) {

                setSendDataAll([dataRes.data, ...dataAll]);
                showAlert(dataRes.msg, "success");
                setTimeout(() => {
                    setToggleModal(false);
                    setForm(initialState)
                }, 1500);
            }
        } else {//Esta actualizando
            if (data) {
                console.log(dataSend)
                const dataRes: ILinkRestObj = await fetchingDataObj(data.id, dataSend, "PUT");

                if (dataRes?.data) {

                    showAlert(dataRes.msg, "success");

                    const res = await fetch(`${baseUrlApi}`);
                    const info = await res.json();

                    if (info?.data) {
                        const links: Data[] = info.data;
                        setSendDataAll(links);
                        // if(data.length !== links.length) setData(links)
                    }

                    setTimeout(() => {
                        setToggleModal(false);
                        setForm(initialState)
                    }, 1500);
                }
            }
        }



    };

    const validation = (): Boolean => {
        let flat = true;

        if (url.trim().length === 0 || name.trim().length === 0) {
            notify(<b>All fields are required</b>, toast.TYPE.ERROR);
            flat = false
        }

        if (name.length >= 80) {
            notify(<b>Don't exceed 80 characters for the name</b>, toast.TYPE.ERROR);
            flat = false
        }
        return flat
    };

    const notify = (msg: JSX.Element, typeToast: TypeOptions) => {
        toast(msg, {
            position: toast.POSITION.TOP_RIGHT,
            type: typeToast
        });
    }


    return {
        form,
        setForm,
        handleSubmit,
        onChange
    }
}
