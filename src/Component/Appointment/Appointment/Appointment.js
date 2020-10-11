import React, { useState } from 'react';
import Navbar from '../../Shared/NavBar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
     const [selectedDate,setSelectedDate]=useState(new Date())
    const handleDataChange =date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDataChange={handleDataChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
        </div>
    );
};

export default Appointment;