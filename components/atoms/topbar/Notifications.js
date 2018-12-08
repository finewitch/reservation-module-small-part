import React from 'react'
import Link from 'next/link'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Notifications extends React.Component {
    render() {
        return (
            <span>
                <a href="#" data-toggle="dropdown" className="notifications count-info">
                    <img src='/static/images/icons/notifications.svg' />
                    <span className="label label-danger">{this.props.notifications.list.length }</span>
                </a>

                <ul className="dropdown-menu dropdown-messages">
                    { this.props.notifications.list.map(function(data, index) {
                        return (                    
                            <li key={data.id}>
                                <div className="dropdown-messages-box">
                                    <a href="/community" className="pull-left">
                                        <img alt="image" className="img-circle" src="/static/images/logo_bg.png" />
                                    </a>
                                    <div className="media-body">
                                        <small className="pull-right">{data.created}</small>
                                        <strong>Nest team</strong><br />
                                        {data.text}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </span>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        'notifications':state.notifications
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)