import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const CenterInfo = (props) => {
    const {name, location, img} = props.data;
    
    return (
        <div className="col-md-4 mb-5">
            <Card style={{ width: '18rem', boxShadow: '5px 5px 10px lightgrey', marginLeft: "35px"}} >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-center">
                        <Card.Title style={{fontWeight: "bold", fontSize: "18px"}}>{name}</Card.Title>
                        <Card.Text style={{fontSize: "13px"}}><FontAwesomeIcon icon={faMapMarkerAlt} />  {location}</Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default CenterInfo;