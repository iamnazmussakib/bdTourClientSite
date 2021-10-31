import React from 'react';
import useContent from '../../hooks/useContent';
import ManageBooking from '../ManageBooking/ManageBooking';
import './ManageBookings.css'

const ManageBookings = () => {
    const {contents} = useContent('https://dark-wizard-96790.herokuapp.com/orders');
 
    return (
        <div className="manage-book">
            {
                contents.map(content => <ManageBooking
                    key={content._id}
                    content={content}
                ></ManageBooking>)
            }
        </div>
    );
};

export default ManageBookings;