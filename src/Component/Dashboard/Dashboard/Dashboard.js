import React, { useState } from 'react';
import AppointmentByDate from '../AppointmenByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
}
const Dashboard = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const [appointments,setAppointments]=useState([])
    const handleDataChange =date =>{
        setSelectedDate(date)
        fetch('http://localhost:5000/appointmentByDate',{
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({date})
    })
    .then(res => res.json())
    .then(data=>{
     setAppointments(date)
     console.log(data)
    })
    }
    
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDataChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;