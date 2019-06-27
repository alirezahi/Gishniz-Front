import React from 'react'
import Comment from './Comment'

function CommentSection(props) {
    return (
        <div className="p-1">
            <h4 className="font-weight-bold">
                نظرات کاربران درمورد دینارو
            </h4>
            <hr />
            <div className="small text-secondary">
                شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود را درباره‌ی این رستوران ثبت کنید
            </div>
            <div className="text-center p-3">
                Stars
            </div>
            <div className="w-75 m-auto">
                {[1,2,3,4].map(item => (
                    <React.Fragment>
                        <hr />
                        <div className="row text-center">
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="progress direction-ltr">
                                            <div className="progress-bar bg-warning" style={{ width: '69%', direction: 'ltr' }} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valueMax="100"></div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <span className="text-warning float-right">
                                            4.8
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                
                                <span className="small">
                                    کیفیت غذا
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                ))

                }
            </div>
            <hr />
            <Comment/>
        </div>
    )
}

export default CommentSection