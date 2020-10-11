import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone  } from '@fortawesome/free-solid-svg-icons'

const infoData=[
    {
        title: 'Opening Hours',
        Description: 'We are open 24 hours',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Office ',
        Description: 'Brooklyn New York',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now ',
        Description: '+01767440997',
        icon: faPhone ,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
        <div className='w-75 row'>
        {
            infoData.map(info => <InfoCard info={info}></InfoCard>)
        }
        </div>
        </section>
    );
};

export default BusinessInfo;