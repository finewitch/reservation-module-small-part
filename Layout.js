import "../scss/style.scss"

import SideMenu from '../components/organisms/SideMenu'
import MenuLogo from '../components/atoms/sidemenu/Logo'
import List from '../components/atoms/sidemenu/List'
import TopBar from '../components/organisms/TopBar'
import MobileMenu from '../components/organisms/MobileMenu'
import Chat from '../components/molecules/Chat'


const Layout = ({ pageContentClass, children }) => {
    return (
        <div className="layout" id="wrapper">
            <SideMenu logo={<MenuLogo />} list={<List />} />
            <TopBar />
            <MobileMenu />
            <div className="layout-content">
                <div className={"page-content " + pageContentClass}>
                    <div className="row">
                        <div className="col-xl-12 col-xl-offset-1 col-lg-12 col-md-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;