import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthService from '../../../services/auth'

const auth = new AuthService()

class UserPanel extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    onClickChange = (event) => {
    }

    render() {

        return (
            <div className="userpanel" data-toggle="dropdown">
                <a href="#" className="userpanel-account">
                    <img src={ this.props.user ? this.props.user.avatar : ''} />
                    <span className="userpanel-account-name">{ this.props.user ? this.props.user.first_name : '' }</span>
                </a>
                <a href="#" className="userpanel-dropdownChat">
                    <img src='/static/images/icons/chevron-down.svg' />
                </a>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        user: state.users.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);