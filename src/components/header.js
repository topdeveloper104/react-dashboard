import React, {Component} from 'react';
import {Button, Dropdown} from 'semantic-ui-react'
import HeaderNotifications from './header-notifications/header-notifications';

class HeaderBar extends Component {

    onChangeTheme = (theme) => {
        var body = document.body;
        console.log(body.className);
        console.log("theme", theme);
        body.className = "sidebar-mini";
        switch (theme){
            case "blue":
                body.className += " skin-blue";
                break;
            case "green":
                body.className += " skin-green";
                break;
            case "red":
                body.className += " skin-red";
                break;
            case "yellow":
                body.className += " skin-yellow";
                break;
            default:
        }
    }

    render() {
        var user = (
            // <span style={{ display: 'inline-block' }}><img src="assets/img/musteri_talepleri.svg" style={{width: 20}} alt=""/></span>
            <div style={{display: 'inline-block', borderRadius: '50%', padding: 8, color: 'grey', backgroundColor: 'white'}}>
                TU
            </div>
        )
        return (
            <header className="main-header">
                <a href="/" className="logo">
                    <img src="assets/img/dyno.svg" className="logo-mini" alt=""/>
                    <div className="logo-lg">
                        <span>Dyno</span>
                        <img src="assets/img/dyno.svg" alt=""/>
                    </div>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="/" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <Dropdown text='CELIKOL EKSPERTIZ'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Black' onClick={() => this.onChangeTheme("black")}/>
                            <Dropdown.Item text='Blue' onClick={() => this.onChangeTheme("blue")}/>
                            <Dropdown.Item text='Green' onClick={() => this.onChangeTheme("green")}/>
                            <Dropdown.Item text='Red' onClick={() => this.onChangeTheme("red")}/>
                            <Dropdown.Item text='Yellow' onClick={() => this.onChangeTheme("yellow")}/>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <Dropdown trigger={user} style={{padding: 8}}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='1'/>
                                        <Dropdown.Item text='2'/>
                                        <Dropdown.Item text='3'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <HeaderNotifications/>

                            <li>
                                <Button basic>Yeni lian Ver</Button>
                            </li>

                            <li>
                                <Button basic>Poster Olustur</Button>
                            </li>
                            <li>
                                <a href="/" data-toggle="control-sidebar">
                                    <span
                                        style={{
                                        marginRight: 10,
                                        borderBottom: 1,
                                        borderBottomStyle: 'solid'
                                    }}>Siteye Git</span>
                                    <i className="fa fa-external-link"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderBar;