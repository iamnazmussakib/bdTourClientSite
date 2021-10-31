import React from 'react';
import './MyBooking.css';
import { useHistory } from 'react-router';

const MyBooking = (props) => {
    const order = props.order;
    console.log(props.order)
    
    const history = useHistory();
    const handleDelete = id => {
        const procced = window.confirm('are you sure to delete this booking?');
        if(procced){
            fetch(`https://dark-wizard-96790.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Booking deleted');
                    history.go(0);
                }
            })
        }
    }
    return (
        <div className="my-booking">
            <h5>{order?.status}</h5>
            <img src={order?.img} alt="" />
            <h3>{order.name}</h3>
            <p className="text-dark">{order?.userName}</p>
            <div className="btnn">
            <button onClick={()=>handleDelete(order?._id)} className="btn btn-success">Delete Booking</button>
            </div>
        </div>
    );
};

export default MyBooking;