import React from 'react'
import Btn from '../atoms/Btn'

const Membership = ({ gap }) => (

    <div className={"membership flying-component " + (gap ? 'top-gap' : '')}>
        <div className="membership-type">
            <p className="gray-title">Członkostwo:</p>
            <span>Basic member</span>
        </div>
        <hr />
        <div className="membership-left">
            <p className="gray-title">Pozostałe wejścia do TN:</p>
            <span>2</span>
        </div>
        <Btn title={'Dokup wejścia'} href="/charge" icon={'+'} />
    </div>

)

export default Membership