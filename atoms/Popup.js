import React from 'react'
import Btn from './Btn'
import Router from 'next/router'

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(param = null) {
        // if (!param) {
        //     return;
        // }
        // const href = '/profile?category=membership_change&status=success';
        // const as = '/profile/membership_change/success';
        // Router.push(href, as, { shallow: true })
    }
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={'modal-dialog ' + this.props.after} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">{this.props.title}</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.content}
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.backHomeBtn ? <Btn title={'Wróc do pulpitu'} href={'/'} /> : ''}


                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Popup