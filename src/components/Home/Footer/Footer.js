import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '400px', marginTop: '100px' }}>
            <div className="container ">
                <div className="row p-5">
                    <div className="col-md-4">
                        <small><FontAwesomeIcon icon={faMapMarkerAlt} /> H#000 (Oth Floor), Road #00. Now DOHS, Mohakhali, Dhaka, Bangladesh</small>
                    </div>
                    <div className="col-md-2">
                        <b><p>Company</p></b>
                        <small>About</small>
                        <br />
                        <small>Project</small>
                        <br />
                        <small>Our Team</small>
                        <br />
                        <small>Terms Conditions</small>
                        <br />
                        <small>Submit Listing</small>
                    </div>
                    <div className="col-md-2">
                        <b><p>Quick Links</p></b>
                        <small>Quick Links</small>
                        <br />
                        <small>Rentals</small>
                        <br />
                        <small>Sales</small>
                        <br />
                        <small>Contact</small>
                        <br />
                        <small>Our Blog</small>
                    </div>
                    <div className="col-md-4">
                        <b><p>About us</p></b>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officia repellat fugiat accusantium, veniam sunt culpa porro facere corporis neque.</small>
                    </div>
                    <div className="text-center mt-5 pt-5">
                        <small>Ⓒ Copyright motorcycle serves center 2021</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;