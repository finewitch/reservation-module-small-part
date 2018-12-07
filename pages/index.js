import React from 'react'

import { withReduxSaga } from '../store'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userModule from '../modules/user'
import * as notificationModule from '../modules/notification'
import * as reservationModule from '../modules/reservation'
import * as newsModule from '../modules/news'

import Layout from '../components/Layout'
import CategoriesContainer from '../components/organisms/CategoriesContainer';
import Membership from '../components/molecules/Membership';
import ReservationBrief from '../components/molecules/ReservationBrief';
import NewReservationPart from '../components/molecules/NewReservationPart';

import withAuth from '../services/withAuth';

class Main extends React.Component {

    static async getInitialProps({ store, isServer, pathname, query }) {
    }

    componentDidMount() {
        this.props.userModule.getUser()
        this.props.userModule.getUsers()
        this.props.notificationModule.getNotifications()
        this.props.reservationModule.getReservations()        
        this.props.newsModule.getNews()
    }

    render() {
        return (
            <Layout>
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-md-12">
                        <CategoriesContainer />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <Membership />
                        <NewReservationPart />                        
                        <ReservationBrief />
                    </div>

                </div>
            </Layout >
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {    
    return {
        userModule: bindActionCreators(userModule, dispatch),
        notificationModule: bindActionCreators(notificationModule, dispatch),
        reservationModule: bindActionCreators(reservationModule, dispatch),        
        newsModule: bindActionCreators(newsModule, dispatch),
    };
}

export default withReduxSaga(connect(mapStateToProps, mapDispatchToProps)(withAuth(Main)));
