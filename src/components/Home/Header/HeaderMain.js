import React from 'react';
import './HeaderMain.css'
import { Container } from 'react-bootstrap';
import banner from "../../../images/banner.jpg";

const HeaderMain = () => {
    return (
        <div className="header-main img-fluid d-flex">
            <Container>
                <div className="container row banner">
                    <div className="col-md-4 col-sm-6 col-12">
                        <img src={banner} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 offset-md-2 px-5 banner-text">
                        <h1><span style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>We Are Chooper</span> <br /> <span style={{ color: "black", fontSize: "80px", fontWeight: "bold" }}>ALWAYS BE ORIGINAL</span></h1>
                        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur suscipit vitae neque non atque ex, asperiores omnis est. Delectus.</p>
                        <button className="py-2 px-3 btn btn-primary">GET SERVES</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeaderMain;