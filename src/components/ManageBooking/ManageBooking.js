import React from 'react';
import { useHistory } from 'react-router';
import './ManageBooking.css';

const ManageBooking = (props) => {
    const {img, _id, name, status, email} = props.content;
    const history = useHistory()
    const handleUpdate = id => {
        fetch(`https://dark-wizard-96790.herokuapp.com/orders/${id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Status Approved');
                history.go(0);
            }
        })
    }
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
        <div className="manage-single">
            <h3>{status}</h3>
            <img src={img} alt="" />
            <p className="text-dark">{email}</p>
            <p className="text-dark">{name}</p>
            <div className="btnn">
                <button onClick={()=> handleUpdate(_id)} className="btn btn-success me-4">Approve</button>
                <button onClick={()=> handleDelete(_id)} className="btn btn-success">Delete</button>
            </div>
        </div>
    );
};

export default ManageBooking;