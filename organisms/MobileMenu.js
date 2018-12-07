import React from 'react'
import Router from 'next/router'


class MobileMenu extends React.Component {
    render() {
        return (
            <div className="layout-aside">

                <div className="aside-content aside-content--notifications">
                    <div className="dropdown-messages-label">
                        <span>Notifications (12)</span>
                        <a href="#">Clear all</a>
                    </div>
                    <ul className="dropdown-menu dropdown-messages">
                        <li>
                            <div className="dropdown-messages-box">
                                <a href="/community" className="pull-left">
                                    <img alt="image" className="img-circle" src="/static/images/logo_bg.png" />
                                </a>
                                <div className="media-body">
                                    <small className="pull-right">4 kwietnia</small>
                                    <strong>Nest team</strong><br />
                                    Test test
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown-messages-box">
                                <a href="/community" className="pull-left">
                                    <img alt="image" className="img-circle" src="/static/images/logo_bg.png" />
                                </a>
                                <div className="media-body">
                                    <small className="pull-right">4 kwietnia</small>
                                    <strong>Nest team</strong><br />
                                    Test test
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="aside-content aside-content--menu">
                    <nav className="navbar-default navbar-static-side" role="navigation">
                        <ul className="nav metismenu">
                            <li><a href="/reservations"><img src="/static/images/icons/menu-icons/reservations-green.svg" alt=""  className="menu-icon" />Rezerwacje</a></li>
                            <li><a href="/benefits"><img src="/static/images/icons/menu-icons/benefits-green.svg"  alt="" className="menu-icon" />Benefity</a></li>
                            <li><a href="/building"><img src="/static/images/icons/menu-icons/building-green.svg"  alt="" className="menu-icon" />Budynek</a></li>
                            <li><a href="/profile"><img src="/static/images/icons/menu-icons/community-green.svg" alt="" className="menu-icon" />Profil</a></li>
                            <li><a href="/help"><img src="/static/images/icons/menu-icons/help-green.svg" alt=""  className="menu-icon" />Help</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        )
    }
}


export default MobileMenu
