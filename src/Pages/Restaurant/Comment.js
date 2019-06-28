import React from 'react'

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return `${months <= 0 ? 0 : months} ماه قبل`;
}

function Comment(props) {
    return (
        <div className="">
            <div>
                <span className="font-weight-bold">{props.comment.author}</span>
                <span className="float-left">star</span>
            </div>
            <div className="small text-secondary font-weight-bold">
                {props.comment.text}
            </div>
            <div>
                <span className="small text-secondary">{monthDiff(new Date(props.comment.created_at), new Date())}</span>
                <span className="float-left small text-secondary">گزارش</span>
            </div>
        </div>
    )
}

export default Comment