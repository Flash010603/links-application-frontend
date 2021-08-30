import React, { useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
import { Form } from './Form';
import { Loading } from './ui/Loading';
import { NoData } from './NoData';
import { useInitFetching } from '../hook/useInitFetching';

export const Main = () => {

    const { isOpen, dataAll, loading } = useInitFetching();

    const renderData = () => {
        if (loading) return <Loading />;

        if (dataAll.length === 0) return <NoData />;

        return (
            dataAll.map(link => (
                <Card key={link.id} dataLink={link} />
            ))
        )
    }

    return (
        <>
            <section
                className={`${(!isOpen) ? 'container_cards' : 'modal_open'} 
                    ${(loading || dataAll.length === 0)
                        ? 'container_cards_whitLoading'
                        : 'container_cards_whitoutLoading'}`}
            >
                {
                    renderData()
                }
            </section>

            {(isOpen) && <Form />}

        </>
    )
}
