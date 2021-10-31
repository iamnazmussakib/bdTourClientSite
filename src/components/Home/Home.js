import React from 'react';
import { Carousel } from 'react-bootstrap';
import useContent from '../../hooks/useContent';
import Booking from '../Booking/booking';
import './Home.css';

const Home = () => {
    const {contents} = useContent('https://dark-wizard-96790.herokuapp.com/bookings');
   console.log(contents);
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
        </div>
    );
};

export default Home;