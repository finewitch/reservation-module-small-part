import React from 'react'

import SearchTopBar from '../atoms/topbar/SearchTopBar'
import CoinStatus from '../atoms/topbar/CoinStatus'
import UserPanel from '../atoms/topbar/UserPanel'
import Notifications from '../atoms/topbar/Notifications'
import Messages from '../atoms/topbar/Messages'
import HomeMobile from '../atoms/topbar/HomeMobile'
import HamburgerMenu from '../atoms/topbar/HamburgerMenu'
import NotificationsMobile from '../atoms/topbar/NotificationsMobile'
import UserPanelMobile from '../atoms/topbar/UserPanelMobile'


class TopBar extends React.Component {
    render() {
        return (
            <div className='topbar'>

                <div className="border-bottom">
                    <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
                        {/* <SearchTopBar /> */}
                        <ul className="nav navbar-top-links navbar-right">
                            <li className="hide-below-medium">
                                <CoinStatus />
                            </li>
                            <li className="show-below-medium">
                                <HomeMobile />
                            </li>
                            <li className="dropdown hide-below-medium">
                                <Notifications />
                            </li>
                            <li className="show-below-medium">
                                <NotificationsMobile />
                            </li>
                            <li className="dropdown hide-below-medium">
                                <UserPanel />
                                <ul className="dropdown-menu dropdown-messages dropdown-user-options">
                                    <li>
                                        <div className="dropdown-messages-box">
                                            <a href="/profile" className="pull-left">
                                                Profil
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-messages-box">
                                            <a href="/logout" className="pull-left">
                                                Wyloguj się
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="show-below-medium">
                                <UserPanelMobile />
                            </li>
                            <li className="show-below-medium">
                                <HamburgerMenu />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }

}

export default TopBar