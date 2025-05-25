import React from 'react'

export const HeadingBar = (props) => {
    return (
        <div className={`mt-2 h-0.5 bg-sky-700 ${props.classes !== undefined ? props.classes : ""}`}></div>
    )
}
