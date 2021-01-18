import React from 'react';
import "../scss/Login.scss";
import logo from "../images/logo.svg";
import google from "../images/google.svg";
import {  TextField, ThemeProvider } from '@material-ui/core';
import {signInWithGoogle} from "../fireabaseConfig";

function login(){
    return(
        <div className="login">
            <header>
                    <img src= {logo} alt="logo"/></header>
            <div className="login-wrap">
                <div className="login-form">
                    <ul>
                        <li>
                            <div className="googleLoginInfo">
                                <>
                                    <h1>Sign in</h1>
                                    <p>Sign in on the internal platform</p>
                                </>
                            </div>
                        </li>
                             
                        <li>
                            <div className="googleLogin" onClick={signInWithGoogle}><img src={google} alt="google"/><p>Sign In With Google</p></div>
                        </li> 
                        <li>
                            <div className="menuContour"></div>
                        </li>
                        <li>
                            <form>                       
                                <TextField className="textfield" label="ID" variant="outlined" 
          margin="dense"/>
                                <TextField className="textfield" label="PW" type="password" 
          margin="dense" variant="outlined"/>                            
                            </form>
                        </li>         
                        <li>
                            <div className="menuLogin"><p>Login</p></div>
                        </li>                
                        
                        <li>
                            <div className="menuContour"></div>
                        </li>
                        <li>
                            <div className="menuSignup">Create new account</div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
export default login;