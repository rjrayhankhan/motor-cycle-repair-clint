import React from 'react';
import './AboutUs.css';
import img1 from '../../../images/motorcycle.jpg';
import { Button } from 'react-bootstrap'

const AboutUs = () => {
    
    const styleSheet = {
        width: "257px",
        margin: "200px 0 0 313px",
        border: "15px solid white",
        borderBottom: "0"
    }

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6 image-aria">
                    <img style={styleSheet} src={img1} alt="" />
                </div>
                <div className="col-md-6 ps-5">
                    <h1 className="text-primary"><b>About Us</b></h1>
                    <h1 style={{fontSize: "50px"}}><b>WE OVER 20 YEARS <br/> EXPERIENCE</b></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla voluptate voluptates eum, deleniti praesentium dolor debitis eligendi dicta corrupti, eius similique temporibus! Fugiat corrupti repudiandae ipsa esse consequatur, quibusdam ducimus saepe pariatur facere eaque ab architecto eligendi labore asperiores magni, at inventore sint. Autem quibusdam beatae maiores cupiditate laudantium.</p>
                    <Button>About Us</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;