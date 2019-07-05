import React from 'react'
import { faMapMarker, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function RestaurantInfo(props) {
    return (
        <div className="p-1">
            <h4 className="font-weight-bold">
                اطلاعات رستوران
            </h4>
            <hr/>
            <h4>
                <strong>
                {props.item ? props.item.name : ''}
                </strong>
            </h4>
            <div className="py-3">
                <FontAwesomeIcon icon={faMapMarker}/> 
                <address className="small d-inline px-1">
                    {props.item.address ? props.item.address.address_line : ''}
                </address>
            </div>
            <div className="font-weight-bold py-3">
                <FontAwesomeIcon icon={faClock}/> 
                <span className="px-1">
                    ساعت سفارش گیری
                </span>
            </div>
            <div className="row small">
                <div className="col-md-6">
                    <span>
                            همه روزه
                    </span>
                        <span className="float-left">
                        از {props.item && props.item.opening_time ? props.item.opening_time.split(':').filter((item, index) => index != 2).join(':') : ''} ظهر تا {props.item && props.item.closing_time ? props.item.closing_time.split(':').filter((item, index) => index != 2).join(':') : ''} شب
                    </span>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default RestaurantInfo