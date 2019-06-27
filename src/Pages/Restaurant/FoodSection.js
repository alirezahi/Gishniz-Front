import React from 'react'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function FoodSection(props) {
    return (
        <div className={`restaurant-section-item rounded border border-white box-shadow-light${props.disabled ? ' closed-restaurant' : ''}`}>
           <div className="p-3">
                <span className="font-weight-bold">
                    پیتزا رومینو
                </span>
                <span className="float-left font-weight-bold">
                    ۳۹و۰۰۰ تومان
                </span>
                <div className="text-secondary small font-weight-bold py-2">
                    سس مارینا
                </div>
                <div>
                    <button className={`start-order-btn${props.disabled ? '-disabled' : ''} px-3 py-1 small`}>
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