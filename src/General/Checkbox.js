import React from 'react'
import CheckboxItem from 'rc-checkbox'
import 'rc-checkbox/assets/index.css'


function Checkbox(props) {
    return (
        <React.Fragment>
            <CheckboxItem checked={props.checked} onChange={(e) => props.onChange(props.id,e.target.checked)}/>
            <span className="font-weight-bold">
                {` ${props.name}`} <span className="small"> {`(${props.count || 0})`}</span>
            </span>
        </React.Fragment>
    )
}


export default Checkbox