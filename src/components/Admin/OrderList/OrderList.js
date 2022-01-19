import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderListInfo from './OrderListInfo';

const OrderList = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        const url = "https://quiet-temple-98612.herokuapp.com/getService"; 
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const styleSheet = {
        backgroundColor: 'white',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px',
        marginRight: '10px',
    }

    return (
        <div className="container mt-5">
            <div className="row" style={{ boxShadow: "5px 5px 10px lightgrey", marginBottom: "50px" }}>
                <div className="col-md-2 servesNav">
                    <Link to='/admin' style={styleSheet}>Order List</Link>
                    <br />
                    <Link to='/addService'>Add Service</Link>
                    <br />
                    <Link to='/makeAdmin'>Make Admin</Link>
                    <br />
                    <Link to='/manageService'>Manage Services</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Order List</b></h4>
                    </div>

                    <div className="formBody" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '400px', padding: '20px' }}>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="bg-white" >
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Pay With</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ marginBottom: "10px" }}>
                                {
                                    service.map(info => <OrderListInfo serviceInfo={info} key={info._id} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;