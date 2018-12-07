import React from 'react'

const UserBox = ({ avatar, name, status }) => (
    <div className="user">
        <img src={avatar} />
        <div className="user-name">{name}</div>
        {status < 300 ? <div className="user-status active"></div> : <div className="user-status unactive"></div>}
    </div>
)

export default UserBox