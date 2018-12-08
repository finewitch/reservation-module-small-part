import React from 'react'

const SideMenu = ({ logo, list, children }) => (
    <nav className="navbar-default navbar-static-side" role="navigation">
        {logo}
        {list}
    </nav>
)

export default SideMenu