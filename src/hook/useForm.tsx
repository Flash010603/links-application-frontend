import React, { useContext, useEffect, useState } from 'react'
import { fetchingDataObj } from '../helper/fetchinLinks';
import { DataSend, ILinkRestObj} from '../interfaces/index';
import { showAlert } from '../helper/alert';
import { validation } from '../helper/validation';
import { LinkContext } from '../context/LinkContext';

const initialState = {
    name: '',
    url: ''
}

export const useForm = () => {

    const { setSendDataAll, setSendData,linkState } = useContext(LinkContext);
    const { data, isUpdated, dataAll } = linkState;

    const [form, setForm] = useState(initialState);
    const { name, url } = form;

    useEffect(() => {
        if(!data) return setForm(initialState);
    
        setForm({
            name: data.name,
            url: data.link
        })

        return () => {setForm(initialState);}

    }, [])

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!validation(url,name)) return;

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
                reset();
                setSendData(null);
            }

        } else {

            if (!data) return;

            const dataRes: ILinkRestObj = await fetchingDataObj(data.id, dataSend, "PUT");

            if (dataRes?.data) {
                showAlert(dataRes.msg, "success");
                const newData = dataAll.filter( element => element.id !== data.id);
                setSendDataAll([dataRes.data, ...newData]);
                reset()
            }
        }
    };

    const reset = () => {
        setTimeout(() => {
            setForm(initialState)
        }, 1500);
    };

    return {
        form,
        setForm,
        handleSubmit,
        onChange
    }
}
