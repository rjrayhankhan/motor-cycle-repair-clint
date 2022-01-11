import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';



const ServesInfo = (props) => {
    const {icon, name, description, price} = props.data;
    const handleClick = props.handleClick;
    const { value2 } = useContext(UserContext);
    const [ loggedInUser, setLoggedInUser ] = value2;

    const servesData = {
        "name": loggedInUser.name,
        "email": loggedInUser.email,
        "servesName": name,
        "description": description,
        "price": price,
    };

    


    return (
        <div className="col-md-4 mb-5">
            <Card style={{ width: '18rem', boxShadow: '5px 5px 10px lightgrey', marginLeft: "35px"}} >
                    <Card.Body className="text-center">
                        <FontAwesomeIcon style={{fontSize: "50px", marginTop: "20px"}} icon={icon} />
                        <Card.Title style={{fontWeight: "bold", fontSize: "18px", marginTop: "20px"}}>{name}</Card.Title>
                        <Card.Text style={{fontSize: "13px", padding: "10px"}}>{description}</Card.Text>
                        <Card.Text style={{fontSize: "26px", padding: "5px", fontWeight: "bold"}}>$ {price}</Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleClick(servesData)}>Buy Now</Button>
             </Card>
        </div>
    );
};

export default ServesInfo;