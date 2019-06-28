import React from 'react'
import Comment from './Comment'

const RATING_ITEMS = [
    {
        name: 'کیفیت غذا',
        name_en: 'quality',
    },
    {
        name: 'کیفیت بسته‌بندی',
        name_en: 'packaging',
    },
    {
        name: 'سرعت ارسال پیک',
        name_en: 'delivery_time',
    },
]

let calculate_percentage = (number) => {
    return parseInt(number / 5 * 100)
}

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
                {RATING_ITEMS.map(item => (
                    <React.Fragment>
                        <hr />
                        <div className="row text-center">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="progress direction-ltr">
                                            <div className="progress-bar bg-warning" style={{ width: `${calculate_percentage(props.comments.length > 0 ?props.comments[0][item.name_en]:0)}%`, direction: 'ltr' }} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valueMax="100"></div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <span className="text-warning float-right">
                                            4.8
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-left">
                                <span className="small text-secondary font-weight-bold">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                ))

                }
            </div>
            <hr />
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
        </div>
    )
}

export default CommentSection