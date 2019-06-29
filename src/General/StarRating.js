import React from 'react'

let get_int_star = (value) => {
    return parseInt(value)
}

let get_remainder_star = (value) => {
    return value - parseInt(value) >= 0.5 ? ' half' : ''
}

let get_star_value = (value) => {
    return `value-${get_int_star(value)}${get_remainder_star(value)}`
}

function StarRating(props) {
    return (
        <div class={`rating star-icon direction-ltr color-ok ${props.size || 'small'} ${get_star_value(props.value)}`}>
            <div class="star-container direction-ltr">
                {
                    [0, 1, 2, 3, 4].map(item => (
                        <div class="star">
                            <i class="star-empty"></i>
                            <i class="star-half"></i>
                            <i class="star-filled"></i>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default StarRating