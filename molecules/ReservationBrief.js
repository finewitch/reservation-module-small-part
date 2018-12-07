import React from 'react'
import Btn from '../atoms/Btn'
import Link from 'next/link'
import ReservationBriefItem from '../atoms/reservation/ReservationBriefItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ReservationBrief extends React.Component {
    render() {
        this.briefConfig = {
            briefsToShow: 3
        }
        const reservations = this.props.reservations;
        return (
            <div className="membership flying-component">
                <div className="membership-type">
                    <p className="gray-title">Twoje rezerwacje:</p>
                </div>
                {reservations.slice(0, this.briefConfig.briefsToShow).map((brief) => {
                    return (
                        <ReservationBriefItem key={brief.id} icon={brief.img} name={brief.title} date={brief.dates} link={brief.id} />
                    );
                })}

                {/* <Btn title={"Nowa rezerwacja"} href="/reservations" icon={"+"} /> */}
            </div>
        )
    }

}
function mapStateToProps(state, ownProps) {
    return {
        reservations: state.reservations.list
    };
}

export default connect(mapStateToProps)(ReservationBrief);