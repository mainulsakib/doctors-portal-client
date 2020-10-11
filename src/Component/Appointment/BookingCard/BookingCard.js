import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking ,date}) => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
  
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-4'>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSeats} SPACES AVAILABLE</p>
                    <button onClick={openModal} className='btn-brand text-uppercase'> Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal}   date={date}appointmentOn={booking.subject}></AppointmentForm>
                </div>
            </div>

        </div>
    );
};

export default BookingCard;