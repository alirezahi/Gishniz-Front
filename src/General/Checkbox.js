import React from 'react'

function Checkbox() {
    return (
        <React.Fragment>
            <input id="cbx" type="checkbox" />
            <label class="cbx" for="cbx">
                <div class="flip">
                    <div class="front"></div>
                    <div class="back">
                        <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                        </svg>
                    </div>
                </div>
            </label>
            <label htmlFor="">as</label>
        </React.Fragment>
    )
}


export default Checkbox