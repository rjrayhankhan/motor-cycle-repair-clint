import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import Google from '../../images/Google.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';


initializeApp(firebaseConfig);

const Login = () => {

    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleClick = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { displayName, photoURL, email } = result.user;
                const signInUser = {name: displayName, image: photoURL, email};
                setLoggedInUser(signInUser);
                sessionStorage.setItem('token', token);
                navigate(from);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, credential);
            });
    }


    const styleSheet = {
        backgroundColor: '#FFFFFF',
        color: 'black',
        width: '400px',
        padding: '10px',
        borderRadius: '50px',
        margin: '10px'
    }
    return (
        <div className='container'>
            <div className="logo text-center m-5">
                <img style={{ width: '100px' }} src={logo} alt="" />
                <br />
                <small><b>Motor cycle Repair Center</b></small>
            </div>
            <div className="login-button text-center m-5 p-5">
                <h2><b>Login With</b></h2>
                <Button style={styleSheet} onClick={handleClick}>
                    <div style={{ float: 'left' }}>
                        <img style={{ width: '30px', }} src={Google} alt="" />
                    </div> Continue With Google</Button>

                <p>Don't have an account? <Link to="/">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;