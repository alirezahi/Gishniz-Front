import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import StarRating from '../../General/StarRating'

function RestaurantSection(props){
    return(
        <div className={`restaurant-section-item rounded border border-white box-shadow-light${props.item.is_disabled ? ' closed-restaurant': ''}`}>
            <div className={`${!props.item.is_disabled ? 'bg-white ' : ''} rounded-top p-2 container`}>
                <div className="row">
                    <div className="col-3">
                        <img
                            className="max-height-70 rounded border-light"
                            src="https://dist.reyhoon-static.com/uploads/images/restaurants/logos/sam-wich_2173_1520945285.jpeg@!branch_logo_web_default"
                            alt="new"
                        />
                    </div>
                    <div className="col-9">
                        <h4 className="font-weight-bold">
                            {props.item.name || ''}
                        </h4>
                        <div className="d-flex">
                            <StarRating value={props.item.average_rate}/>
                            <span className="small">
                                {props.item.average_rate}
                            </span>
                        </div>
                        <div className="small">
                            {(props.item.categories || []).map(item => item.name).join(' • ')}
                        </div>
                        <div className="text-secondary small">
                            <address>
                                {props.item && props.item.address ? props.item.address.address_line : ''}
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!props.item.is_disabled ? 'bg-light ' : ''} rounded-bottom p-2 text-center`}>
                <button className={`start-order-btn${props.disabled ? '-disabled' : ''} px-4 py-1 small`}>
                    <Link to={`/restaurants/${props.item.restaurant_id}`}>شروع سفارش {props.item.is_disabled ? 'از ۱۰:۰۰' : ''}</Link>
                </button>
            </div>
        </div>
    )
}

export default RestaurantSection