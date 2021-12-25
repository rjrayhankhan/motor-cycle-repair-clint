import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const token = sessionStorage.getItem('token')

    let location = useLocation();
    if (loggedInUser.email || token) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />; 
};

export default PrivateRoute;