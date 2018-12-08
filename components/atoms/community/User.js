import React from 'react'
import Link from 'next/link'

const User = ({ avatar, id, name, position }) => (
    <Link href={'/user/'+id}>
        <a className="userlist-user">
                <img src={avatar} />
                <div className="userlist-user-info">            
                    <span className="userlist-user-info-name">{name}</span>
                    <span className="userlist-user-info-position">{position}</span>
                </div>
        </a>
    </Link>
)

export default User