import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
// import "./style.css"
import background from "./images/bg.jpg";
//
 
// //
// import { AuthContext } from "../components/Authorization/Auth.js";
// import { AuthProvider } from "../components/Authorization/Auth.js";
import firebaseConfig from "../config";
// import firebase from "firebase/app";
// import firebase from 'firebase/compat/app';


export const auth = firebaseConfig.auth();

const Register = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    };

      if (currentUser) {
        return <Navigate to="/" />;
      }

      
    return (
        <>
        <div className="img js-fullheight" 
        // src={require("assests/images/bg.jpg").default}
          style={{backgroundImage:  `url(${background})`,height: "100vh"}}>
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Sign Up</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <h3 className="mb-4 text-center">Register</h3>
                            <form  onSubmit={handleSubmit} className="signin-form">
                            {/* <div className="signin-form" > */}
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Username" required name="email"/>
                                </div>
                                <div className="form-group">
                                    <input id="password-field" type="password" className="form-control" placeholder="Password" required name="password"/>
                                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                                
                                

                                <div className="form-group d-md-flex">
                                    <div className="w-100">
                                        <label className="checkbox-wrap checkbox-primary"> Accepting Terms and Conditions
                                        <input type="checkbox" defaultChecked/>
                                        <span className="checkmark"></span>
                                        </label>
                                    </div>
                                        {/* <div className="w-50 text-md-right">
                                            <a href="#" onClick={(e) => e.preventDefault()}    
                                            style={{color:  `#fff`}} >Forgot Password</a>
                                        </div> */}
                                </div>
                                <div className="form-group">
                                    <button 
                                    type="submit"  className="form-control btn btn-primary submit px-3"
                                    >Sign Up</button>
                                </div>
                                

                            {/* </div> */}
                            </form>
                            {/* <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                            <div className="social d-flex text-center">
                                <a href="#"  onClick={() => handleGoogleLogin()} className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
                                <a href="#"  onClick={() => handleGoogleLogin()} className="px-2 py-2 ml-md-1 rounded"><span className="ion-logo-twitter mr-2"></span> Twitter</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}

export default Register;