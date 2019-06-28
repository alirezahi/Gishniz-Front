import React from 'react'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let commaSeparate = (price) => {
    return price
}

let getPrice = (price) => {
    if(!price)  return '-'
    return `${commaSeparate(price)} تومان`
}

function FoodSection(props) {
    return (
        <div className={`restaurant-section-item rounded border border-white box-shadow-light bg-white`}>
           <div className="p-3">
                <span className="font-weight-bold">
                    پیتزا رومینو
                </span>
                <span className="float-left font-weight-bold">
                    {getPrice(2000)}
                </span>
                <div className="text-secondary small font-weight-bold py-2">
                    سس مارینا
                </div>
                <div>
                    <button className={`start-order-btn px-3 py-1 small`}>
                        <span className="float-right">
                            <FontAwesomeIcon icon={faPlus} /> 
                        </span> افزون به سبد خرید
                    </button>
                </div>
           </div>
        </div>
    )
}

export default FoodSection