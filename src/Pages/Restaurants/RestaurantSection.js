import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function RestaurantSection(props){
    return(
        <div className={`restaurant-section-item rounded border border-white box-shadow-light${props.disabled ? ' closed-restaurant': ''}`}>
            <div className={`${!props.disabled ? 'bg-white ' : ''} rounded-top p-2 container`}>
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
                            داتان
                        </h4>
                        <div className="d-flex">
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={4.5}
                                editing={false}
                                renderStarIcon={(index, value) => {
                                    return (
                                        <FontAwesomeIcon icon={ faStar } />
                                    )
                                }}
                                renderStarIconHalf={() => {
                                    return (
                                        <FontAwesomeIcon icon={ faStarHalf } />
                                    )
                                }}
                            />
                            4.7
                        </div>
                        <div className="small">
                            {['س', 'ذضثق', 'خذه'].reduce((a, b) => `${a} • ${b}`)}
                        </div>
                        <div className="text-secondary small">
                            <address>
                                یه آدرسی که دوست دارم طولانی باشه
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!props.disabled ? 'bg-light ' : ''} rounded-bottom p-2 text-center`}>
                <button className={`start-order-btn${props.disabled ? '-disabled' : ''} px-4 py-1 small`}>
                    شروع سفارش از ۱۰:۰۰
                </button>
            </div>
        </div>
    )
}

export default RestaurantSection