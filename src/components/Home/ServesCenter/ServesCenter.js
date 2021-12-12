import React from 'react';
import img1 from '../../../images/serves-center1.jpg'
import img2 from '../../../images/serves-center2.jpg'
import img3 from '../../../images/serves-center3.jpg'
import CenterInfo from './CenterInfo';

const centerInfo = [
    {
        id: 1,
        img: img1, 
        name: 'Honda Motorcycle Service Center', 
        location: 'Signal, Near Bijoy Sarani, Dhaka 1215, Bangladesh' 
    },
    {
        id: 2,
        img: img2, 
        name: 'Honda Service Center (Authorized)', 
        location: '607, Kazipara Begum Rokeya Sharani, Dhaka' 
    },
    {
        id: 3,
        img: img3, 
        name: 'Bajaj Service Center (Biker Solution)', 
        location: '151 Kalshi Rd - 112, Dhaka 1216, Bangladesh' 
    }
]

const ServesCenter = () => {
    return (
        <div className="servesCenter container my-5 py-5">
            <div className="center-header text-center">
                <h5><u>Serves Center</u></h5>
                <h2 className="mb-5" style={{fontWeight: 'bold'}}>Discover the our <br /> others serves center and location</h2>
            </div>
            <div className="center-detail row">
                {
                    centerInfo.map(information => <CenterInfo data={information} key={information.id}></CenterInfo>)
                }
            </div>
        </div>
    );
};

export default ServesCenter;