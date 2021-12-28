import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


const ServesInfo = (props) => {
    const {icon, name, description, price} = props.data;

    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/serves')
    }
    
    return (
        <div className="col-md-4 mb-5">
            <Card style={{ width: '18rem', boxShadow: '5px 5px 10px lightgrey', marginLeft: "35px"}} >
                    <Card.Body className="text-center">
                        <FontAwesomeIcon style={{fontSize: "50px", marginTop: "20px"}} icon={icon} />
                        <Card.Title style={{fontWeight: "bold", fontSize: "18px", marginTop: "20px"}}>{name}</Card.Title>
                        <Card.Text style={{fontSize: "13px", padding: "10px"}}>{description}</Card.Text>
                        <Card.Text style={{fontSize: "26px", padding: "5px", fontWeight: "bold"}}>$ {price}</Card.Text>
                    </Card.Body>
                    <Button onClick={handleClick}>Buy Now</Button>
             </Card>
        </div>
    );
};

export default ServesInfo;