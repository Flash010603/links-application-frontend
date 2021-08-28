import React from 'react'
import sad from '../assets/sad.png'

export const NoData = () => {
    return (
        <div className="nodata_container">
            <span className="title_nodata">No data</span>
            <img className="img_nodata" src={sad} alt={sad} />
        </div>
    )
}
