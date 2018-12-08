import React from 'react'
import Link from 'next/link'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: ['Home', 'Rezerwacje', 'Benefity', 'Budynek', 'Profil',  'Pomoc'],
            icons: ['Home', 'Reservations', 'Benefits', 'Building', 'Profile', 'Help'],
            active: -1
        }
    }

    componentDidMount() {
        this.updateCurrentTab()
    }

    updateCurrentTab() {
        var path = location.pathname;
        if(path == '/') {
            this.setState({'active':0})
            return;            
        }

        for(var i = 0; i < this.state.items.length;i++) {
            var strReg = '/'+this.state.icons[i].toLowerCase();
            var reg = new RegExp(strReg)

            if(path.match(reg)) {
                this.setState({'active':i})
                break;
            }
        }
    }

    render() {
        return (
            <ul className="nav metismenu" id="side-menu" ref="menu">
                {this.state.icons.map((el, index) => <li key={index} className={this.state.active == index ? "active":null}>
                    <Link href={'/' + (index == 0 ? '' : el.toLowerCase())}>
                        <a><span><img src={"/static/images/icons/menu-icons/" + el.toLowerCase() + ".svg"} className="menu-icon" />{this.state.items[index]}</span></a>
                    </Link>
                </li>)}
            </ul>
        )
    }
}

export default List
