import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="form col-md-6 p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="name row">
                            <h5><b>Leave A Message</b></h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo?</p>
                            <div className='col'>
                                <input placeholder='First Name' type="text" {...register("firstName", { required: true })} />
                                <br />
                                {errors.firstName && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className='col'>
                                <input placeholder='Last Name' type="text" {...register("lastName", { required: true })} />
                                <br />
                                {errors.lastName && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>

                        <input placeholder='Phone Number' type="text" className="input-field" {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span className="text-danger">This field is required</span>}

                        <input placeholder='Email Address' type="email" className="input-field" {...register("emailAddress", { required: true })} />
                        {errors.emailAddress && <span className="text-danger">This field is required</span>}

                        <textarea placeholder="Type Your Message" type="text" className="input-field" {...register("description", { required: true })} />
                        {errors.description && <span className="text-danger">This field is required</span>}
                        <br />

                        <input className="input-field bg-primary text-white" type="submit" />
                    </form>
                </div>
                <div className="col-md-5 p-5 text-justify offset-1">
                    <h3><b>Contact Us</b></h3>
                    <h1 style={{ fontSize: "50px" }}><b>GET IN TOUCH</b></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et impedit molestias? Iusto repudiandae quia odio minima impedit eligendi magnam.</p>
                    <div className="row">
                        <div className="col-6">
                            <div className="location contact-info">
                                <h4 className="title"><b>Location</b></h4>
                                <small>151 Kalshi Rd - 112, Dhaka 1216,</small>
                            </div>
                            <div className="email contact-info">
                                <h4 className="title"><b>Email</b></h4>
                                <small>motorcycle@gmail.com</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="opening contact-info">
                                <h4 className="title"><b>Opening</b></h4>
                                <small>Mon-Sat 08:00am - 20:00pm</small>
                            </div>
                            <div className="phone contact-info">
                                <h4 className="title"><b>Phone</b></h4>
                                <small>(+880) 1235-456780</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;