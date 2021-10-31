import React, { useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useContent from '../../hooks/useContent';
import './SingleBooking.css';

const SingleBooking = () => {
    const {user} = useAuth();
    //handle dynamic route
    const {bookingId} = useParams();
    const {contents} = useContent(`https://dark-wizard-96790.herokuapp.com/bookings/${bookingId}`);

    //handle place order form
    const statusRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const imgRef = useRef();
    const bookNameRef = useRef();
    const phoneRef = useRef();
    const handleOnSubmit = e =>{
        const status = statusRef.current.value;
        const userName = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const img = imgRef.current.value;
        const name = bookNameRef.current.value;
        const phone = phoneRef.current.value;
        const newOrder = {status, userName, email, address, phone, img, name}
        nameRef.current.value = user.displayName;
        fetch('https://dark-wizard-96790.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Placed');
                document.getElementById('form').reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className="order-area">
            <h2 className="text-center text-dark">About {contents.name}</h2>
            <div className="order-content">
                <form id="form" onSubmit={handleOnSubmit}>
                    <div className="w-50 mx-auto add-order">
                    <h1 className="text-center mb-5">Confirmation</h1>
                        <div className="input-item"><label htmlFor="name">User Name</label>
                        <input value={user.displayName || ''} className="form-control" id="name" type="text" ref={nameRef} /></div>

                        <div className="input-item dis-none"><label htmlFor="status">Status</label>
                        <input value="pending" className="form-control" id="status" type="text" ref={statusRef} /></div>

                        <div className="input-item"><label htmlFor="banner">User Email</label>
                        <input value={user.email || ''} className="form-control" id="banner" type="text" ref={emailRef} /></div>

                        <div className="input-item dis-none"><label htmlFor="img">img</label>
                        <input value={contents.img || ''} className="form-control" id="img" type="text" ref={imgRef} /></div>

                        <div className="input-item dis-none"><label htmlFor="img">name</label>
                        <input value={contents.name || ''} className="form-control" id="img" type="text" ref={bookNameRef} /></div>

                        <div className="input-item"><label htmlFor="desc">Address</label>
                        <input className="form-control" id="desc" ref={addressRef}/></div>

                    <div className="input-item"> <label htmlFor="details">Phone Number</label>
                        <input className="form-control" id="details" rows="5" ref={phoneRef}/></div>
                        <input className="btn btn-success" type="submit" value="Place Order" />
                    </div>
                </form>
                <div className="w-50 text-center mx-auto my-5">
                    
                    <p className="text-dark my-5">{contents.desc}</p>
                    <img style={{'width':'50%'}} className="my-5" src={contents.img} alt="" />
                    <p className="my-5 text-dark">{contents.details}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBooking;