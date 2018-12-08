import React from 'react'
import Link from 'next/link'

const ReservationBriefItem = ({icon, name, date, link}) => {
    return (
        <div className="reservationBrief-item">
            <img src={icon} className="reservationBrief-item-icon"/>
            <div className="reservationBrief-item-info">
            {/* get only first first name part */}
                <p>{name.split(',')[0]}</p>
                <p className="gray-title">{date}</p>
            </div>
            <div className="reservationBrief-item-moreinfo">
                <Link href="#">
                    <a><img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-256.png" /></a>
                </Link>
            </div>
        </div>
    )
}

export default ReservationBriefItem