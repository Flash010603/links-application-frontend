import React from 'react'
import { Card } from './Card'
import { Form } from './Form';
import { Loading } from './ui/Loading';
import { NoData } from './NoData';
import { useInitFetching } from '../hook/useInitFetching';
import { ListCards } from './ListCards';

export const Main = () => {

    const { isOpen, dataAll, loading } = useInitFetching();


    return (
        <>
            <section
                className={`${(!isOpen) ? 'container_cards' : 'modal_open'} 
                    ${(loading || dataAll.length === 0)
                        ? 'container_cards_whitLoading'
                        : 'container_cards_whitoutLoading'}`}
            >
                {
                    (loading) 
                        ? <Loading />
                        : <ListCards cards={dataAll} />
                }
            </section>

            {(isOpen) && <Form />}

        </>
    )
}
