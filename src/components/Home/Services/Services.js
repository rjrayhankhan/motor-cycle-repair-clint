import React from 'react';
import { faTools, faMotorcycle, faUserCog } from '@fortawesome/free-solid-svg-icons';
import ServesInfo from './ServesInfo';


const information = [
    {
        id: 1,
        icon: faTools,
        name: 'Custom motorcycle',
        description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        price: 100
    },
    {
        id: 2,
        icon: faMotorcycle,
        name: 'Engine Services',
        description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        price: 150
    },
    {
        id: 3,
        icon: faUserCog,
        name: 'Restoration',
        description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        price: 200
    },

]


const Services = () => {
    return (
        <div className="container">
            <div className="serves-header text-center">
                <h5><u>Our Services</u></h5>
                <h2 className="mb-5" style={{fontWeight: 'bold'}}>We Provide <br /> Best Custom Motorcycle</h2>
            </div>
            <div className="serves-info row">
                 {
                     information.map(info => <ServesInfo data={info} key={info.id}></ServesInfo>)
                 }
            </div>
        </div>
    );
};

export default Services;