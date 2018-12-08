import React from 'react'
import Link from 'next/link'

const Box = ({ title, onClickHandler, param }) => {
    return (
        <a className='box__container-box' onClick={(e) => { onClickHandler(param) }}>
                <h3>{title}</h3>
        </a >
    )
}

export default Box