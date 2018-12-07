import React from 'react'
import { connect } from 'react-redux'

import Link from 'next/link'

class CoinStatus extends React.Component {
    render() {
        return (
            <div className="coinstatus">
            <span className="coinstatus-amount">&nbsp; {this.props.coins} NC</span>
            <span className="coinstatus-buy"><Link href={'/charge'}><a>Kup więcej</a></Link></span>
            </div>                
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        coins: state.users.user.coins
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinStatus);