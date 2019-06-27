import React from 'react'
import { faMapMarker, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CommentSection(props) {
    return (
        <div className="p-1">
            <h4 className="font-weight-bold">
                اطلاعات رستوران
            </h4>
            <hr />
            <h4>
                <strong>
                    دینارو
                </strong>
            </h4>
            <div className="py-3">
                <FontAwesomeIcon icon={faMapMarker} />
                <address className="small d-inline px-1">
                    گاندی جنوبی، شیسبش شیس بشس یبخهصثش ثب
                </address>
            </div>
            <div className="font-weight-bold py-3">
                <FontAwesomeIcon icon={faClock} />
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
                        از کوفت تا زهرمار
                    </span>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default CommentSection