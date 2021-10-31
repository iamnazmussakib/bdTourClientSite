import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import useContent from '../../hooks/useContent';
import Booking from '../Booking/booking';
import useAuth from '../../hooks/useAuth'
import './Home.css';

const Home = () => {
    const {contents} = useContent('https://dark-wizard-96790.herokuapp.com/bookings');
    const {isLoading} = useAuth();
    if(isLoading){
        return <div className="text-center mt-5">
            <Spinner className="mt-5" animation="grow" />
        </div>
    }
    return (
        <div className="home">
            <div className="sliders">
                <Carousel>
                {
                    contents.map(content =>
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={content.banner}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h1>{content.name}</h1>
                            <p>{content.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
                </Carousel>
            </div>
            <div className="booking-area container mx-auto">
                <h1 className="text-center my-5">Tour Hotel Bookings</h1>
                <div className="bookings">
                    {
                        contents.map(content => <Booking
                            key={content._id}
                            content={content}
                        ></Booking>)
                    }
                </div>
            </div>
            
            <div className="container mx-auto about-us">
                <img className="" src="https://i.ibb.co/xjMLJVq/about.webp" alt="" />
                <div className="about-content">
                    <h2>About US</h2>
                    <p className="text-dark">Amazing Tours is leading tour operator of Bangladesh and we are member of BD TOUR and Tour Operators Association of Bangladesh (TOAB). We are not only for tour operator, our Established Software company, This company provide many product is travel related and others kinds of software. Amazing Tours provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security.</p>
                </div>
            </div>
            <div className="bg-light py-5">
                <div className="happy-client w-50 mx-auto text-center">
                    <img className="w-50" src="https://image.freepik.com/free-vector/organic-flat-feedback-concept-illustrated_23-2148951369.jpg" alt="" />
                    <div className="my-5">
                        <h3 className="my-5">What Says Our Client</h3>
                        <p className="text-dark">Amazing Tours is leading tour operator of Bangladesh and we are member of BD TOUR and Tour Operators Association of Bangladesh (TOAB). We are not only for tour operator, our Established Software company, This company provide many product is travel related and others kinds of software. Amazing Tours provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security. Thanks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;