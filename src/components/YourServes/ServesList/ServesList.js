import React from 'react';
import { Link } from 'react-router-dom';
import ServesCard from './ServesCard';

const ServesList = () => {

    const styleSheet = {
        backgroundColor: 'white',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px',
        marginRight: '10px',
    }

    return (
        <div className="container mt-5">
            <div className="row" style={{ boxShadow: "5px 5px 10px lightgrey" }}>
                <div className="col-md-2 servesNav">
                    <Link to='/serves'>Serves</Link>
                    <br />
                    <Link style={styleSheet} to='/servesList'>Serves List</Link>
                    <br />
                    <Link to='/review'>Review</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Serves List</b></h4>
                    </div>
                    <div className="body" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '400px', padding: '20px' }}>
                        <ServesCard></ServesCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServesList;