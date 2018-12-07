import React from 'react'

const Switcher = ({ checked }) => {
    return (
        <label className="switch">
            <input type="checkbox" defaultChecked={checked} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switcher