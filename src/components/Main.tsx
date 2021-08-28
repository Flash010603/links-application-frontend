import React, { useContext, useEffect, useState } from 'react'
import { Card } from './Card'
import { Form } from './Form';
import { ModalContext } from '../context/ModalContext';
import {  Data } from '../interfaces/index';
import { Loading } from './Loading';
import { NoData } from './NoData';
import { baseUrlApi } from '../helper/urlCongif';

export const Main = () => {
    const { modalState, setSendDataAll } = useContext(ModalContext);
    const [loading, setLoading] = useState(true)
    const { isOpen, dataAll } = modalState;

    const doFetch = async () => {
        setLoading(true)
        console.log('haciendo fetch')
        const res = await fetch(`${baseUrlApi}`);
        const info = await res.json();

        if (info?.data) {
            const links: Data[] = info.data;
            if (dataAll.length !== links.length) setSendDataAll(links);
        }
        setLoading(false)
    };
    useEffect(() => {
        doFetch();
    }, [])

    return (
        <>
            <section className={`container_cards ${(loading || dataAll.length === 0) ? 'container_cards_whitLoading' : 'container_cards_whitoutLoading'}`}>
                {
                    (loading)
                        ? <Loading />
                        : (dataAll.length !== 0)
                            ? dataAll.map(link => (
                                <Card key={link.id} dataLink={link} />
                            ))
                            : <NoData />
                }
            </section>

            {(isOpen) && <Form />}

        </>
    )
}
