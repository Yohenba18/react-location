import { Button } from '@material-ui/core';
import React from 'react'
import  './Login.css';
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {

    const[{}, dispatch] = useStateValue()
    const signIn = () =>{
       auth
       .signInWithPopup(provider)
       .then(result => {
        dispatch({
           type: actionTypes.SET_USER,
           user : result.user
         }) 
        console.log(result);
       }).catch(error => {
         alert(error.message);
       })
    }
    return (
        <div className="login">
           <div className="login_logo">
           <img
           src="https://icons-for-free.com/iconfiles/png/512/location+maker+map+icon-1320166084997417306.png"
           alt=""
         />
           </div>
           <h1>Google Sign In</h1>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login