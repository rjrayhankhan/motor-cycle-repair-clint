import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import person1 from '../../../images/person1.jpg';
import person2 from '../../../images/person2.jpg';
import person3 from '../../../images/person3.jpg';

const feedback = [
    {
        id: 1,
        name: 'Nash Patrik',
        position: 'CEO.Manpol',
        img: person1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque itaque consectetur molestiae laborum aperiam eligendi ab, quam nisi aspernatur."
    },
    {
        id: 2,
        name: 'Miriam Barron',
        position: 'CEO.Manpol',
        img: person2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque itaque consectetur molestiae laborum aperiam eligendi ab, quam nisi aspernatur."
    },
    {
        id: 3,
        name: 'Bria Malone',
        position: 'CEO.Manpol',
        img: person3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque itaque consectetur molestiae laborum aperiam eligendi ab, quam nisi aspernatur."
    },
]

const Testimonials = () => {
    return (
        <div className="pb-5" style={{ backgroundColor: "rgb(238, 238, 238)"}}>
            <div className="container" style={{ paddingTop: "100px"}}>
                <h4 className="text-center mb-5"><b>Testimonials</b></h4>
                <div className="row mt-5">
                    {
                        feedback.map(fb => <TestimonialsCard data={fb} key={fb.id}></TestimonialsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;