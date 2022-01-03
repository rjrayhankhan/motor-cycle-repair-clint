import React, { useState, useEffect } from 'react';
import TestimonialsCard from './TestimonialsCard';



const Testimonials = () => {
    const [reviewData, setReviewData] = useState([]);
    console.log(reviewData);

    useEffect(() => {
        const url = 'http://localhost:5000/getReview';
        fetch(url)
        .then(res => res.json())
        .then(data => setReviewData(data))
    }, [])

    return (
        <div className="pb-5" style={{ backgroundColor: "rgb(238, 238, 238)"}}>
            <div className="container" style={{ paddingTop: "100px"}}>
                <h4 className="text-center mb-5"><b>Testimonials</b></h4>
                <div className="row mt-5">
                    {
                        reviewData.map(fb => <TestimonialsCard data={fb} key={fb._id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;