import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NavigationMenu extends Component {

    gotoPage = (url) => {
        browserHistory.push('/' + url);
    }
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar" >
                    <div className="header">
                        <img src="" alt=""/>
                        <span>powered by...</span>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="active treeview">
                            <a onClick={() => this.gotoPage('dashboard')}>
                                <i className="fa"><img src="assets/img/dashboard.svg" alt=""/></i> 
                                <span>
                                    Ozet
                                </span> 
                            </a>

                        </li>
                        <li className="treeview">
                            <a onClick={() => this.gotoPage('services')}>
                                <i className="fa"><img src="assets/img/hizmetler.svg" alt=""/></i>
                                <span>Hizmetler</span>
                                <i className="fa fa-caret-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a onClick={() => this.gotoPage('services/1')}><i className="fa "></i> Sub Menu 1</a></li>
                                <li><a onClick={() => this.gotoPage('services/2')}><i className="fa "></i> Sub Menu 2</a></li>
                                <li><a onClick={() => this.gotoPage('services/3')}><i className="fa "></i> Sub Menu 3</a></li>
                                <li><a onClick={() => this.gotoPage('services/4')}><i className="fa "></i> Sub Menu 4</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="">
                                <i className="fa"><img src="assets/img/kampanyalar.svg" alt=""/></i>
                                <span>Kampanyalar</span>
                                <i className="fa fa-caret-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href=""><i className="fa "></i> Sub Menu 1</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 2</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 3</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 4</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="">
                                <i className="fa"><img src="assets/img/mesajlar.svg" alt=""/></i>
                                <span>Mesajlar</span>
                                <small className="label pull-right bg-red">24</small>
                                <i className="fa fa-caret-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href=""><i className="fa "></i> Sub Menu 1</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 2</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 3</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => this.gotoPage('example')}>
                                <i className="fa"><img src="assets/img/rezervasyonlar.svg" alt=""/></i>
                                <span>Rezervasyonlar</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="">
                                <i className="fa"><img src="assets/img/reklamlar.svg" alt=""/></i>
                                <span>Reklamlar</span>
                                <i className="fa fa-caret-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href=""><i className="fa "></i> Sub Menu 1</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 2</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 3</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa"><img src="assets/img/personel.svg" alt=""/></i>
                                <span>Personel</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa"><img src="assets/img/dokumanlar.svg" alt=""/></i>
                                <span>Dokumanlar</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="">
                                <i className="fa"><img src="assets/img/sorgulamalar.svg" alt=""/></i>
                                <span>Sorgulamalar</span>
                                <i className="fa fa-caret-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href=""><i className="fa "></i> Sub Menu 1</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 2</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 3</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa"><img src="assets/img/sinyal.svg" alt=""/></i>
                                <span>Sinyal</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="">
                                <i className="fa"><img src="assets/img/ayarlar.svg" alt=""/></i>
                                <span>Ayarlar</span>
                                <i className="fa fa-caret-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href=""><i className="fa "></i> Sub Menu 1</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 2</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 3</a></li>
                                <li><a href=""><i className="fa "></i> Sub Menu 4</a></li>
                            </ul>
                        </li>
                        <li className="header"></li>
                        <li className="image-text">
                            <img className="svg" src="assets/img/dashboard.svg" alt=""/>
                            <div>
                                <p className="">Evsin Ugurluoglu</p>
                                <p className="greytext">Garaji Sepeti Temsilcisi</p>
                            </div>
                        </li>
                        <li className="image-text">
                            <img className="svg" src="assets/img/destek_hatti.svg" alt=""/>
                            <div>
                                <p className="greytext">Tamir/Bakim Destek Hatti</p>
                                <p className="">0212 321 69 34</p>
                            </div>
                        </li>
                        <li className="image-text">
                            <img className="svg" src="assets/img/yardim_hatti.svg" alt=""/>
                            <div>
                                <p className="greytext">Tamir/Bakim</p>
                                <p className="">YARDIM</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default NavigationMenu;