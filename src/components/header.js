import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'
import HeaderNotifications from './header-notifications/header-notifications';
import '../App.css';

class HeaderBar extends Component {

    render() {
        var user =  ( <span style={{display: 'inline-block'}}><img src="assets/img/musteri_talepleri.svg" style={{width: 20}} alt=""/></span> )
        
        return (
            <header className="main-header">
                {/* Logo */}
                <a href="/" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <img src="assets/img/dyno.svg" className="logo-mini" alt=""/>
                    {/* logo for regular state and mobile devices */}
                    <div className="logo-lg">
                        <span>Dyno</span>
                        <img src="assets/img/dyno.svg"  alt=""/>
                    </div>
                </a>
                <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <a href="/" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <Dropdown text='CELIKOL EKSPERTIZ'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='1' />
                            <Dropdown.Item text='2' />
                            <Dropdown.Item text='3' />
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <Dropdown trigger={user} >
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='1' />
                                        <Dropdown.Item text='2' />
                                        <Dropdown.Item text='3' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            {/*  Notification  */}
                            <HeaderNotifications />

                            <li>
                                <Button basic>Yeni lian Ver</Button>
                            </li>

                            <li>
                                <Button basic>Poster Olustur</Button>
                            </li>
                            { /* ontrol Sidebar Toggle Button */}
                            <li>
                                <a href="/" data-toggle="control-sidebar"><span style={{marginRight: 10, borderBottom: 1, borderBottomStyle: 'solid'}}>Siteye Git</span><i className="fa fa-external-link"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderBar;