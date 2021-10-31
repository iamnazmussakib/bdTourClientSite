import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useContent from '../../hooks/useContent';
import ManageBooking from '../ManageBooking/ManageBooking';
import './ManageBookings.css'

const ManageBookings = () => {
    const {contents} = useContent('https://dark-wizard-96790.herokuapp.com/orders');
    const {isLoading} = useAuth();
    if(isLoading){
        return <div className="text-center mt-5">
            <Spinner className="mt-5" animation="grow" />
        </div>
    }
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