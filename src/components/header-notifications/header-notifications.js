import React, { Component } from 'react';
import NotificationItem from './notification-item';
import $ from 'jquery';

class HeaderNotifications extends Component {

    constructor(){
        super();
        this.state = {
            notifications: []
        }
    }
    componentDidMount(){
        var notifications = [{
            content: '5 new members joined today',
            theme: 'fa fa-users'
        }, {
            content: 'Very long description here that may not fit into the page and may cause design problems',
            theme: 'fa fa-warning'
        }, {
            content: '5 new members joined',
            theme: 'fa fa-users'
        }, {
            content: '25 sales made',
            theme: 'fa fa-shopping-cart'
        }, {
            content: 'You changed your username',
            className: 'fa fa-user'
        }];

        this.setState({
            notifications: notifications
        });

        console.log('clicked');
    }

    onClickNotification = () => {
        var dropdown = $('.dropdown.notifications-menu');
        if(dropdown.hasClass('open')){
            dropdown.removeClass('open');
        }else {
            dropdown.addClass('open');
        }
    }

    render() {
        var notificationList = this.state.notifications.map(function (notificationDetails, iterator) {
            return (
                <NotificationItem
                    key={iterator}
                    theme={notificationDetails.theme}
                    content={notificationDetails.content} />
            )
        });
        return (
            <li className="dropdown notifications-menu" onClick={this.onClickNotification}>
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell"></i>
                    <span className="label label-danger">{this.state.notifications.length}</span>
                </a>

                <ul className="dropdown-menu">
                    <li className="header">You have {this.state.notifications.length} notifications</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv">

                            <ul className="menu">
                                {notificationList}
                            </ul>
                            
                            <div className="slimScrollBar"></div>
                            <div className="slimScrollRail"></div>
                        </div>
                    </li>
                    <li className="footer"><a href="/">View all</a></li>
                </ul>
            </li>
        );
    }
}

export default HeaderNotifications;