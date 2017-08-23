import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <Grid divided='vertically'>
                    <Grid.Row columns={6} className="panel">
                        <Grid.Column>
                            <ul>
                                <li><a href="/"><span>ARAC AL</span></a></li>
                                <li><a href="/"><span>Sahibinden Araba</span></a></li>
                                <li><a href="/"><span>Galeriden Araba</span></a></li>
                                <li><a href="/"><span>0 Km Arac</span></a></li>
                                <li><a href="/"><span>2.El Arac</span></a></li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <ul>
                                <li><a href="/"><span>ARAC SAT</span></a></li>
                                <li><a href="/"><span>Ucretsiz llan Ver</span></a></li>
                                <li><a href="/"><span>Satici Paneli Girisi</span></a></li>
                                <li><a href="/"><span>2. El Piyasa Degeri</span></a></li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <ul>
                                <li><a href="/"><span>HIZMET BUL</span></a></li>
                                <li><a href="/"><span>Tamir/Bakim</span></a></li>
                                <li><a href="/"><span>Oto Kuofor</span></a></li>
                                <li><a href="/"><span>Oto Ekspertiz</span></a></li>
                                <li><a href="/"><span>Oto Kiralama</span></a></li>
                                <li><a href="/"><span>Sigorta Acentesi</span></a></li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <ul>
                                <li><a href="/"><span>DEGER HESAPLA</span></a></li>
                                <li><a href="/"><span>2.El Piyasa Degeri</span></a></li>
                                <li><a href="/"><span>2.El Populerlik Endeksi</span></a></li>
                                <li><a href="/"><span>Bana En Uygun Araba?</span></a></li>
                                <li><a href="/"><span>Kredi Hesapla</span></a></li>
                                <li><a href="/"><span>Ne ile Takas Ederim?</span></a></li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <ul>
                                <li><a href="/"><span>OTO GALERI</span></a></li>
                                <li><a href="/"><span>Panel Girisi</span></a></li>
                                <li><a href="/"><span>Galeri Cozumleri</span></a></li>
                                <li><a href="/"><span>Galeri Mobil Uygulama</span></a></li>
                                <li><a href="/"><span>Uyelik Tipleri</span></a></li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <img src="assets/img/badge-google.svg" className="" alt=""/>
                            <img src="assets/img/badge-apple.svg" className="" alt=""/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="contact">
                        <Grid.Column>
                            <div className="pull-left">
                                <ul>
                                    <li><a href="/"><span>HAKKIMIZDA</span></a></li>
                                    <li><a href="/"><span>ILETISIM</span></a></li>
                                    <li><a href="/"><span>INSAN KAYNAKLARI</span></a></li>
                                    <li><a href="/"><span>KULLANIM KOSULLARI</span></a></li>
                                    <li><a href="/"><span>GIZLILIK</span></a></li>
                                    <li><a href="/"><span>YARDIM</span></a></li>
                                </ul>
                            </div>
                            <div className="pull-right">
                                <span>Garaj Sepeti Musteri Hizmetieri</span>
                                <i className="fa fa-phone"></i>
                                <span className="phone-number">0212 321 69 34</span>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} className="social-link">
                        <Grid.Column>
                            <div className="pull-left">
                                <span>&copy; 2017 Araba Sepeti - Tum Haklan Saklidir.</span>
                            </div>
                            <div className="pull-right">
                                <span>Takip Et</span>
                                <Button color='facebook'><Icon name='facebook' /></Button>
                                <Button color='twitter'><Icon name='twitter' /></Button>
                                <Button color='google plus'><Icon name='google plus' /></Button>
                                <Button color='youtube'><Icon name='youtube' /></Button>
                                <Button color='instagram'><Icon name='instagram' /></Button>
                                <Button color='linkedin'><Icon name='linkedin' /></Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
			</footer>
        );
    }
}

export default Footer;