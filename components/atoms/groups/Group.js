import React from 'react'
import Link from 'next/link'

const Group = ({ url, picture, name, description }) => (
    <Link href={url}>
        <a className="userlist-user" target="_blank">
            <img src={picture} className="img-rounded" />
            <div className="userlist-user-info">
                <span className="userlist-user-info-name">{name}</span>
                <span className="userlist-user-info-position">{description}</span>
            </div>
        </a>
    </Link>
)

export default Group