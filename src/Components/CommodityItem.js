import React from 'react';

function CommodityItem (probs) {

    return(
        <div className = ''>
            <img src = {probs.url} alt = {probs.name} />
            <p className=''>{probs.name}</p>
            <p className=''>{probs.location}</p>
            <p className=''>{probs.price}</p>
            
        </div>
    )
}

export default CommodityItem;