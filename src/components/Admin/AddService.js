import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState(null)

    
    const handleChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }


    const onSubmit = serviceInfo => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('price', serviceInfo.price);
        formData.append('description', serviceInfo.description);
      
        fetch('https://quiet-temple-98612.herokuapp.com/addServices', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json()) 
        .then(data => {
            if (data) {
                alert('Review created successfully.');
                window.location.reload(false);
            }
        })
        .catch(error => {
          console.error(error)
        })
    };


    // console.log(watch("example")); // watch input value by passing the name of it

    const styleSheet = {
        backgroundColor: 'white',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px',
        marginRight: '10px',
    }

    return (
        <div className="container mt-5" >
            <div className="row" style={{ boxShadow: "5px 5px 10px lightgrey", marginBottom: "50px" }}>
                <div className="col-md-2 servesNav">
                    <Link to='/admin'>Order List</Link>
                    <br />
                    <Link to='/addService' style={styleSheet}>Add Service</Link>
                    <br />
                    <Link to='/makeAdmin'>Make Admin</Link>
                    <br />
                    <Link to='/manageService'>Manage Services</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Add Service</b></h4>
                    </div>

                    <div className="formBody" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '450px', padding: '20px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <b><big style={{marginLeft: "10px"}}>Service Title</big></b>
                                    <input placeholder='Enter Title' type="text" className="input-field" {...register("title", { required: true })} />
                                    {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                                    <br />

                                    <b><big style={{marginLeft: "10px"}}>Price</big></b>
                                    <input placeholder='Enter Price' type="number" className="input-field" {...register("price", { required: true })} />
                                    {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                                    <br />

                                    <b><big style={{marginLeft: "10px"}}>Description</big></b>
                                    <textarea placeholder="Enter Description" type="text" className="input-field" {...register("description", { required: true })} />
                                    {errors.description && <span className="text-danger">This field is required</span>}

                                </div>
                                <div className="col-md-6">
                                   <b><big style={{marginLeft: "10px"}}>Image</big></b>
                                    <input onChange={handleChange}  className="input-field" type="file" />
                                </div>
                                <input className="input-field bg-primary ms-3 text-white" type="submit" />
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;