import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content container">
                <div className="aboutus">
                    <div className="footer-logo my-5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="about-content">
                        <p>
                        Amazing Tours is leading tour operator of Bangladesh and we are member of BD TOUR and Tour Operators Association of Bangladesh (TOAB). We are not only for tour operator, our Established Software company, This company provide many product is  travel related and others kinds of software. Amazing Tours provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security.
                        </p>
                    </div>
                    <div className="icons my-5">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                </div>
                <div className="contactus">
                    <div className="contactus-content">
                        <i className="fas fa-street-view"></i>
                        <div className="content">
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="contactus-content">
                        <i className="far fa-clock"></i>
                        <div className="content">
                            <p>Mon - Sat 8.00 - 18.00</p>
                        </div>
                    </div>
                    <div className="contactus-content">
                        <i className="fas fa-phone"></i>
                        <div className="content">
                            <p>+898 68679 575</p>
                        </div>
                    </div>
                    <div className="contactus-content">
                        <i className="far fa-envelope"></i>
                        <div className="content">
                            <p>bdtour@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-text my-5">
                <p>Copyright © 2021 BD TOUR Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;