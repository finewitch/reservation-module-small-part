import React from 'react'
import Link from 'next/link'

const BoxButton = ({ icon, title, addInfo, onClickHandler, id, status, path }) => {
    return (
        <a className={`box__btn ${status}`} id={id} onClick={(e) => { onClickHandler(id, path) }}>
            < div className='box__btn-content'>
                {icon === 'circle' ? <span className='btn-icon'></span> : <img src={icon + '/' + id + '.png'} />}
                <h3>{title}</h3>
                <p>{addInfo}</p>
            </div>
        </a >
    )
}

export default BoxButton