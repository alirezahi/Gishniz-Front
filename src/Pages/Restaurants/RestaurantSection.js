import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RestaurantSection(props){
    return(
        <div className="rounded border border-white box-shadow-light">
            <div className="bg-white rounded-top p-2 container">
                <div className="row">
                    <div className="col-3">ads</div>
                    <div className="col-9">
                        <h4>
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
                                    );
                                }}
                                renderStarIconHalf={() => {
                                    return (
                                        <FontAwesomeIcon icon={ faStarHalf } />
                                    );
                                }}
                            />
                            4.7
                        </div>
                        <div className="small">
                            {['س', 'ذضثق', 'خذه'].reduce((a, b) => `${a} • ${b}`)}
                        </div>
                        <div className="text-secondary small">
                                یه آدرسی
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light rounded-bottom p-2 text-center">
                <button class="start-order-btn px-3 small">
                    شروع سفارش
                </button>
            </div>
        </div>
    )
}

export default RestaurantSection;