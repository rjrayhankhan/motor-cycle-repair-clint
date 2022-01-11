import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch("http://localhost:5000/admin", {
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
                    <Link to='/admin'>Order List</Link>
                    <br />
                    <Link to='/addService'>Add Service</Link>
                    <br />
                    <Link to='/makeAdmin' style={styleSheet}>Make Admin</Link>
                    <br />
                    <Link to='/manageService'>Manage Services</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Make Admin</b></h4>
                    </div>

                    <div className="formBody" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '400px', padding: '20px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <b><big style={{ marginLeft: "10px" }}>Email</big></b>
                            <br></br>
                            <input placeholder='Enter Admin Email' type="email" className="input-field" {...register("name", { required: true })} />
                            {errors.phoneNumber && <span className="text-danger">This field is required</span>}

                            <input style={{ marginTop: "5px", marginLeft: "20px" }} className="btn btn-primary px-5 py-0 " type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;