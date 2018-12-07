import React from 'react'
import Link from 'next/link'

const Event = ({ url, img, name, description, date }) => (
    <Link href={url}>
        <div className="ibox">
            <div className="ibox-content">
                <div className="text-left article-titddle">
                    <span className="rabat">{date}</span>
                    <h1 className="pt-lg">{name}</h1>
                </div>
                <img src={img} className="img-responsive" />
                <p>{description}</p>
                <a href={url} target="_blank" className="btn basic-btn blue">Przejdź do wydarzenia na Facebooku</a>
            </div>
        </div>
    </Link>
)

export default Event