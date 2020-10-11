import React from 'react';
import flourid from '../../../images/floried.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/tooth.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData=[
    {
    name: 'Fluoride  Treatment',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, neque iste. Eius nam ad assumenda tenetur eveniet ab itaque omnis?",
    image:flourid
},
{
    name: 'Cavity Feeling',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, neque iste. Eius nam ad assumenda tenetur eveniet ab itaque omnis?",
    image:cavity
},
{
    name: 'Teeth Whitenings',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, neque iste. Eius nam ad assumenda tenetur eveniet ab itaque omnis?",
    image:teeth
}
]


const Services = () => {
    return (
        <section className='services-container'>
         <div className='text-center pt-4'>
         <h5 style={{color: '#72DCD9'}}>OUR SERVICES</h5>
            <h2 >Services We Provide </h2>
             </div> 
             <div className='d-flex justify-content-center'>
        <div className='w-75 row pt-5'>
        {
            serviceData.map(service =><ServiceDetail service={service}></ServiceDetail>)
        }
        </div>
        </div>
        </section>

    );
};

export default Services;