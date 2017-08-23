import React, { Component } from 'react';

class Services extends Component {

    render() {
        return (
            <div className="content-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default Services;