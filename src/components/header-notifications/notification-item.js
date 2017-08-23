import React, { Component } from 'react';

class NotificationItem extends Component {
    render() {
        return (
            <li key={"header-notification-item"}>
                <a href="/">
                    <i className={this.props.theme}></i> {this.props.content}
                </a>
            </li>
        );
    }
}

export default NotificationItem;