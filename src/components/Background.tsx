import React from 'react'

const cubos = [0,0,0,0,0,0,0,0,0];

export const Background = () => {
    return (
        <div className="area">
            <ul className="circles">
                {
                    cubos.map((cubo,index)=>(
                        <li key={index+cubo}></li>
                    ))
                }
            </ul>
        </div>
    )
}
