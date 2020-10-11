import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn,date }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    data.service=appointmentOn;
    data.date=date;
    data.created=new Date()
   fetch('http://localhost:5000/addAppointment',{
     method: 'POST',
     headers: { 'Content-Type': 'application/json'},
     body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(success=>
   {
      if(success){
      closeModal();
      alert('Appointment  created successfully')
    }
  })

  }
  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h3 className='text-center text-brand'>{appointmentOn}</h3>

        <form style={{ width: '500px', height: '100%', padding: '20px' }} className='p-5' onSubmit={handleSubmit(onSubmit)}>

          <div class="form-group">

            <input style={{ width: '100%' }} name="name" defaultValue="" placeholder='your name ' ref={register} />
          </div>
          <div class="form-group">
            <input style={{ width: '100%' }} name="phoneNo" defaultValue="" placeholder='Phone No' ref={register} />
          </div>
          <div class="form-group">

            <input style={{ width: '100%' }} type="email" name="email" defaultValue="" placeholder='Email ' ref={register} />
          </div>
          <select style={{ width: '30%', float: 'left' }} className="form-control" id="exampleFormControlSelect1" name='gender' ref={register}>
            <option>Male</option>
            <option>Female</option>
            <option>Common</option>
          </select>
          <div class="form-group">

            <input style={{ width: '30%', float: 'left' }} name="age" defaultValue="" placeholder='your age' ref={register} /> 
          </div>
          <div class="form-group">

            <input style={{ width: '30%' }} defaultValue="" name='weight' placeholder='weight' ref={register} />
          </div>
          <div class="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;