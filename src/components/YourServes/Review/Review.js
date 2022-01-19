import React from 'react';
import './Review.css'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

   fetch('https://quiet-temple-98612.herokuapp.com/addReview', {
       method: 'POST',
       headers: { 'content-Type': 'application/json'},
       body: JSON.stringify(data)
   })
   .then(result => {
       if(result){
         alert('Review created successfully.');
       }
       else{ alert('something is wrong please try agin.'); }
   })

 }

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
                    <Link to='/serves'>Serves</Link>
                    <br />
                    <Link to='/servesList'>Serves List</Link>
                    <br />
                    <Link to='/review' style={styleSheet}>Review</Link>
                </div>
                <div className="col-md-10">
                    <div className="head" style={{ margin: "15px 5px 15px 25px" }}>
                        <h4><b>Review</b></h4>
                    </div>

                    <div className="formBody" style={{ backgroundColor: 'rgb(232, 249, 255)', height: '400px', padding: '20px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder='Your Name' type="text" className="input-field" {...register("name", { required: true })} />
                            {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                            <br />
                            <input placeholder="Company's name, Designation" type="text" className="input-field" {...register("company", { required: true })} />
                            {errors.emailAddress && <span className="text-danger">This field is required</span>}
                            <br />
                            <textarea placeholder="Description" type="text" className="input-field" {...register("description", { required: true })} />
                            {errors.description && <span className="text-danger">This field is required</span>}
                            <br />

                            <input className="input-field bg-primary text-white" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;