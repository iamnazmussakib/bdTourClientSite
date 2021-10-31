import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useContent from '../../hooks/useContent';
import MyBooking from '../MyBooking/MyBooking';
import './MyBookings.css'

const MyBookings = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://dark-wizard-96790.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[]);
    
    const bookingEmail = orders.filter(order => order.email === user.email);
    console.log(bookingEmail);
    return (
        <div className="my-bookings-area">
            <h2 className="mt-5">My Bookings</h2>
            <div className="my-bookings">
                {
                    orders.map(order=> {
                        if(user.email === order.email){
                            return <MyBooking
                                key={order._id}
                                order={order}
                            ></MyBooking>
                            
                        }
                    })
                }
            </div>
            
        </div>
    );
};

export default MyBookings;