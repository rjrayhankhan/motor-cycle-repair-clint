import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServesCard = (props) => {
    const { name, service, description, email, price } = props.serviceInfo;

    return (
        <Card style={{ margin: "5px", width: '18rem', boxShadow: '5px 5px 10px lightgrey' }}>
            <Card.Body>
                <div className="row">
                    <div className="col-md-9">
                        <Card.Title>{service}</Card.Title>
                    </div>
                    <div className="col-md-3">
                        <Button>Done</Button>
                    </div>
                </div>
                <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="mb-2 text-muted"><b>Price : ${price}</b></Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ServesCard;