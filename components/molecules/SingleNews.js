import React from 'react'
import Btn from '../atoms/Btn'
const SingleNews = ({ type, title, img, date, brief, url }) => (
    <div className="newslist flying-component">
        <div className="newslist-type">{type} - {date}</div>
        <div className="newslist-title post-header">{title}</div>
        <img src={img} className="img-responsive" />
        <div className="newslist-brief">{brief}</div>
        <Btn title={'Czytaj całość...'} href={url} blank={true}/>
    </div>
)

export default SingleNews