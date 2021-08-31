import React from 'react'
import { Data } from '../interfaces/index';
import { NoData } from './NoData';
import { Card } from './Card';

interface Props {
    cards:Data[]
}

export const ListCards = React.memo(({cards}:Props ) => {
    
    return (
        <>
            {
                (!cards) 
                    ? <NoData/>
                    : cards.map(link => (
                        <Card key={link.id} dataLink={link} />
                    ))
            }
            
        </>
    )
})
