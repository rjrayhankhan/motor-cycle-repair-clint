import React from 'react';
import { Link } from 'react-router-dom';

const ManageService = () => {

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
                    <Link to='/admin'>Order List</Link>
                    <br />
                    <Link to='/addService'>Add Service</Link>
                    <br />
                    <Link to='/makeAdmin'>Make Admin</Link>
                    <br />
                    <Link to='/manageService' style={styleSheet}>Manage Services</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Manage Service</b></h4>
                    </div>

                    <div className="formBody" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '400px', padding: '20px' }}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageService;