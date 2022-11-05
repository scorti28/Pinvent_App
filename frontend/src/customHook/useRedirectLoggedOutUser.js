//We want to redirect the logged out user to a specific page. In react, we cand do this with "use"
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SET_LOGIN } from '../redux/features/auth/authSlice';
import { getLoginStatus } from '../services/authServices';


const useRedirectLoggedOutUser = (path) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    //we want to run it once
    useEffect(() => {
        const redirectLoggedOutUser  = async () => {
            const isLoggedIn = await getLoginStatus();
            dispatch(SET_LOGIN(isLoggedIn));

            if(!isLoggedIn){
                toast.info("Session expired! Please login in again to continue!");
                navigate(path);
                return
            }
        };
        redirectLoggedOutUser();
    }, [navigate, path, dispatch])
}

export default useRedirectLoggedOutUser
