import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialsCard = (props) => {
    const { name, company, description, img } = props.data;

    const styleSheet = {
        display: 'flex',
    }

    return (
        <div className='col-md-4' style={{marginBottom: "100px"}}>
            <Card style={{ width: '18rem', boxShadow: '5px 5px 10px gray', marginLeft: "35px" }} >
                <Card.Body className="text-justify">
                    <div style={styleSheet}>
                        <img style={{width: "50px", height: "50px", borderRadius: "50%", margin: "15px"}} src={img} alt="" />
                        <div>
                            <Card.Title style={{ fontWeight: "bold", fontSize: "18px", marginTop: "20px", marginBottom: "0" }}>{name}</Card.Title>
                            <Card.Text style={{ fontSize: "13px", paddingBottom: "10px" }}>{company}</Card.Text>
                        </div>
                    </div>
                    <Card.Text style={{ fontSize: "13px", padding: "10px" }}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TestimonialsCard;