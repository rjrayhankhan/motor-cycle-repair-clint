import React from 'react';
import './YourServes.css'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const YourServes = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    const styleSheet = {
        backgroundColor: 'white',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px',
        marginRight : '10px',
    }

    return (
        <div className="container mt-5">
            <div className="row" style={{boxShadow: "5px 5px 10px lightgrey"}}>
                <div className="col-md-2 servesNav">
                    <Link to='/serves' style={styleSheet}>Serves</Link>
                    <br />
                    <Link to='/servesList'>Serves List</Link>
                    <br />
                    <Link to='/review'>Review</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{margin: "15px 5px 15px 25px"}}>
                        <h4><b>Serves</b></h4>
                    </div>
                    <div className="formBody" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '400px', padding: '20px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input readonly value='Your Name' type="text" className="input-field" {...register("yourName", { required: true })} />
                            {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                            <br />
                            <input readonly value="Company's name, Designation" type="text" className="input-field" {...register("company", { required: true })} />
                            {errors.emailAddress && <span className="text-danger">This field is required</span>}
                            <br />
                            <input readonly value="Description" type="text" className="input-field" {...register("description", { required: true })} />
                            {errors.description && <span className="text-danger">This field is required</span>}
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourServes;