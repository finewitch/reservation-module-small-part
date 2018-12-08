import React from 'react'
import Btn from './Btn'
import Router from 'next/router'

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(param = null) {
        if (!param) {
            return;
        }
        const href = '/profile?category=membership_change&status=success';
        const as = '/profile/membership_change/success';
        Router.push(href, as, { shallow: true })
    }
    render() {
        return (
            <div className={'modal-dialog ' + this.props.after} role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel">Zmien typ członkostwa</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <h3>Aktualny plan</h3>
                            <span dangerouslySetInnerHTML={{ __html: this.props.before }}></span>
                        </div>
                        <span className="separator">›</span>
                        <div>
                            <h3>Nowy plan</h3>
                            <span dangerouslySetInnerHTML={{ __html: this.props.after }}></span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Btn title={'Zapisz zmiany'} onClickAction={this.handleClick} color={'btn-golden'} />
                        <Btn title={'Anuluj zmiany'} onClickAction={this.handleClick(false)} />
                    </div>
                </div>
            </div>
        )

    }
}

export default Popup