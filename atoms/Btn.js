import React from 'react'
import Link from 'next/link'

const Btn = ({ title, icon, color = null, state = null, onClickAction = null, href, togle = null, target = null, blank = false }) => {
    if (typeof href === 'undefined') {
        return <a data-dismiss="modal" className={"basic-btn " + (color === null ? '' : color) + " " + (state === null ? '' : state)} onClick={onClickAction} data-toggle={togle} data-target={target}> {title} {icon} </a>
    } else {
        return (
            <Link href={href}>
                <a data-dismiss="modal" className={"basic-btn " + (color === null ? '' : color) + " " + (state === null ? '' : state)} onClick={onClickAction} data-toggle={togle} data-target={target} target={blank?'_blank':null}> {title} {icon} </a>
            </Link>
        )
    }
}

export default Btn