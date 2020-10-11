import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData=[
    {
        id:1,
        subject :'Tooth Orthodontics',
        visitingHour:'10.00-11.30',
        totalSeats:10
    },
    {
        id:2,
        subject :'Cosmic Dentistry',
        visitingHour:'11.30-1.00',
        totalSeats:10
    },
    {
        id:3,
        subject :'Cavity Feeling',
        visitingHour:'1.00-2.30',
        totalSeats:10
    },
    {
        id:4,
        subject :'Tooth Orthodontics',
        visitingHour:'2.30-3.30',
        totalSeats:10
    },
    {
        id:5,
        subject :'Tooth Orthodontics',
        visitingHour:'3.30-4.30',
        totalSeats:10
    },
    {
        id:6,
        subject :'Tooth Orthodontics',
        visitingHour:'5.00-6.30',
        totalSeats:10
    }
]

const BookAppointment = ({date}) => {
    return (
      <section>
          <h1 className='text-center text-brand'>Available Appointment on {date.toDateString()}</h1> 
          <div className="row">
          {
                bookingData.map(book=><BookingCard key={book.id} date={date} booking={book}></BookingCard>)
          }
          </div>
      </section>
    );
};

export default BookAppointment;