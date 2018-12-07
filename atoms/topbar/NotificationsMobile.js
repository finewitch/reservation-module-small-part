import React from 'react'

class NotificationsMobile extends React.Component {
    handleClick() {
        const 
            mobileTriggers = document.querySelectorAll(".mobile-trigger"),
            notificationsTrigger = document.getElementsByClassName("mobile-trigger--notifications")[0],
            appContent = document.getElementsByClassName("layout-content")[0],
            notificationsContent = document.getElementsByClassName("aside-content--notifications")[0],
            activeAsides = document.getElementsByClassName("aside-content--visible"),
            transitionClass = "layout-content--moved",
            visibilityClass = "aside-content--visible",
            visibilityClassMore = "aside-content--visible-more",
            visibilityClassBack = "aside-content--visible-back";
            
        if (notificationsContent.classList.contains(visibilityClass)) {
            appContent.classList.remove(transitionClass);
            notificationsContent.classList.add(visibilityClassBack);
            notificationsContent.classList.remove(visibilityClass);
            notificationsTrigger.classList.remove('active');

            setTimeout(() => {
                notificationsContent.classList.remove(visibilityClassBack);
            }, 500);
        } else {
            [].forEach.call(mobileTriggers, function(trigger) {
                trigger.classList.remove('active');
            });
            notificationsTrigger.classList.add('active');

            if (activeAsides.length > 0) {
                [activeAsides].forEach((aside) => {
                    var that = aside[0];

                    that.classList.add(visibilityClassMore);
                    setTimeout(() => {
                        that.classList.remove(visibilityClassMore, visibilityClass);
                    }, 500);
                });
            }
            notificationsContent.classList.add(visibilityClass);
            appContent.classList.add(transitionClass);
        }
    }
    render() {
        return (
            <a className="mobile-trigger mobile-trigger--notifications" href="#" onClick={this.handleClick}>
                <img src='/static/images/icons/menu-icons/bell-mobile.svg' />
            </a>
        )
    }
}

export default NotificationsMobile