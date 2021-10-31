import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'
import './Login.css';

const Login = () => {
    const {googleSignIn, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';
    const handleGoogleBtn = () => {
      googleSignIn()
      .then(res => {
        history.push(redirect);
      })
      
    }
    return (
        <>
          <div className="text-center login">
            <button onClick={handleGoogleBtn} className="my-5 w-50 btn btn-info text-white"><i class="fab fa-google"></i> Sing In With Google</button>
            {
              error && <p className="my-4 text-danger">Error: {error}</p>
            }
          </div> 
        </>
    );
};

export default Login;