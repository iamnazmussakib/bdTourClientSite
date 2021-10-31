import React, { useRef } from 'react';
import './AddBooking.css';

const AddBooking = () => {
    const nameRef = useRef();
    const bannerRef = useRef();
    const sortDescRef = useRef();
    const imgRef = useRef();
    const fullDescRef = useRef();
    const handleOnSubmit = e =>{
        const name = nameRef.current.value;
        const banner = bannerRef.current.value;
        const desc = sortDescRef.current.value;
        const img = imgRef.current.value;
        const details = fullDescRef.current.value;
        const newBooking = {name, banner, desc, img, details}
        fetch('https://dark-wizard-96790.herokuapp.com/bookings',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Booking Added Successfully');
            }
        })
        e.preventDefault();
    }
    return (
        <div className="add-new">
            <form onSubmit={handleOnSubmit}>
                <div className="add-booking">
                <h1 className="text-center mb-5">Add New Booking</h1>
                    <div className="input-item"><label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" ref={nameRef} /></div>

                    <div className="input-item"><label htmlFor="banner">Banner Image</label>
                    <input className="form-control" id="banner" type="text" ref={bannerRef} /></div>

                    <div className="input-item"><label htmlFor="img">Main Image</label>
                    <input className="form-control" id="img" type="text" ref={imgRef} /></div>

                    <div className="input-item"><label htmlFor="desc">Sort Description</label>
                    <textarea className="form-control" id="desc" rows="3" ref={sortDescRef}></textarea></div>

                   <div className="input-item"> <label htmlFor="details">Full Description</label>
                    <textarea className="form-control" id="details" rows="5" ref={fullDescRef}></textarea></div>
                    <input className="btn btn-success" type="submit" value="Add Booking" />
                </div>
                
            </form>
        </div>
    );
};

export default AddBooking;