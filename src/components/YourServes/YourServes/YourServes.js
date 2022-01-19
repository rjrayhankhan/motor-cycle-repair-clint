import React, { useContext, useEffect, useState } from 'react';
import './YourServes.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";


const YourServes = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { value1 } = useContext(UserContext);
    const [allData, setAllData] = value1;
    const { name, email, servesName, description, price } = allData;

    const onSubmit = data => {

        fetch("https://quiet-temple-98612.herokuapp.com/service", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    alert('Review created successfully.');
                }
                else { alert('something is wrong please try agin.'); }
            })
    };


    console.log(watch("example")); // watch input value by passing the name of it

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
                    <Link to='/serves' style={styleSheet}>Serves</Link>
                    <br />
                    <Link to='/servesList'>Serves List</Link>
                    <br />
                    <Link to='/review'>Review</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Serves</b></h4>
                    </div>
                    <div className="formBody row" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '510px', padding: '20px' }}>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input readOnly value={name} type="text" className="input-field" {...register("name", { required: true })} />
                                {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                                <br />
                                <input readOnly value={email} type="text" className="input-field" {...register("email", { required: true })} />
                                {errors.emailAddress && <span className="text-danger">This field is required</span>}
                                <br />
                                <input readOnly value={servesName} type="text" className="input-field" {...register("service", { required: true })} />
                                {errors.description && <span className="text-danger">This field is required</span>}
                                <br />
                                <textarea readOnly value={description} type="text" className="input-field" {...register("description", { required: true })} />
                                {errors.description && <span className="text-danger">This field is required</span>}
                                <br />
                                <input readOnly value={price} type="number" className="input-field" {...register("price", { required: true })} />
                                {errors.description && <span className="text-danger">This field is required</span>}
                                <br />
                                <input className="input-field bg-primary text-white" type="submit" />
                            </form>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourServes;