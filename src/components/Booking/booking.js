import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = ({content}) => {
    const {name, img, desc, _id} = content;
    return (
        <div className="booking">
            <div className="booking-hover">
                <img src={img} alt="" />
                <div className="booking-content">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <Link to={`/place-order/${_id}`}>
                <button className="w-100 rounded mt-4 btn btn-success">Book Now</button>
            </Link>
        </div>
    );
};

export default Booking;