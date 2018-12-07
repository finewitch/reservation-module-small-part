import React from 'react'

class HamburgerMenu extends React.Component {
    handleClick(e) {
        const 
            mobileTriggers = document.querySelectorAll(".mobile-trigger"),
            menuTrigger = document.getElementsByClassName("mobile-trigger--menu")[0],
            appContent = document.getElementsByClassName("layout-content")[0],
            menuContent = document.getElementsByClassName("aside-content--menu")[0],
            activeAsides = document.getElementsByClassName("aside-content--visible"),
            transitionClass = "layout-content--moved",
            visibilityClass = "aside-content--visible",
            visibilityClassMore = "aside-content--visible-more",
            visibilityClassBack = "aside-content--visible-back";
       
        if (menuContent.classList.contains(visibilityClass)) {
            appContent.classList.remove(transitionClass);
            menuContent.classList.add(visibilityClassBack);
            menuContent.classList.remove(visibilityClass);
            menuTrigger.classList.remove('active');

            setTimeout(() => {
                menuContent.classList.remove(visibilityClassBack);
            }, 500);
        } else {
            [].forEach.call(mobileTriggers, function(trigger) {
                trigger.classList.remove('active');
            });
            menuTrigger.classList.add('active');

            if (activeAsides.length > 0) {
                [activeAsides].forEach((aside) => {
                    var that = aside[0];

                    that.classList.add(visibilityClassMore);
                    setTimeout(() => {
                        that.classList.remove(visibilityClassMore, visibilityClass);
                    }, 500);
                });
            }
            menuContent.classList.add(visibilityClass);
            appContent.classList.add(transitionClass);
        }
    }
    render() {
        return (
            <a className="mobile-trigger mobile-trigger--menu" href="#" onClick={((e) => this.handleClick(e))}>
                <img src='/static/images/icons/menu-icons/more-mobile.svg' />
            </a>
        )
    }
}

export default HamburgerMenu
