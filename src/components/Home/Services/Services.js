import React, { useContext, useState } from 'react';
import { faTools, faMotorcycle, faUserCog } from '@fortawesome/free-solid-svg-icons';
import ServesInfo from './ServesInfo';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App'


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
    const { value1 } = useContext(UserContext);
    const [allData, setAllData] = value1;
    const token = sessionStorage.getItem("token");

    let navigate = useNavigate();
    const handleClick = (data) => {
        setAllData(data);
        navigate('/yourServes');

        fetch(`https://quiet-temple-98612.herokuapp.com/getUser/`+ token)
            .then(res => res.json())
            .then(userData => setAllData(userData[0]))
    }

    return (
        <div style={{backgroundColor: 'rgb(238, 238, 238)'}}>
            <div className="container py-5">
                <div className="serves-header text-center mt-5">
                    <h5><u>Our Services</u></h5>
                    <h2 className="mb-5" style={{ fontWeight: 'bold' }}>We Provide <br /> Best Custom Motorcycle</h2>
                </div>
                <div className="serves-info row">
                    {
                        information.map(info => <ServesInfo data={info} key={info.id} handleClick={handleClick}/>)
                    }
                </div>
                <div className="mb-5" style={{ textAlign: "center" }}>
                    <Button>Explore more</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;