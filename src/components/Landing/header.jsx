import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
//
import { AuthContext } from "../Authorization/Auth";
import firebaseConfig from "../../config";
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import { Logo } from './logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';



// import './assets/styles.css'
export function Header({ title = ' Multiverse' }) {

  const { currentUser } = useContext(AuthContext);

  return (
    <header className="relative py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center no-underline">
              <Logo className="mr-2" /> {title}
            </Link>
          </h1>
          <div>
          <ul>
          { //Check if currentUser iS logged in  
                                (currentUser === null || currentUser === undefined)
                                    ? <div className="inline-flex">
                                        <li className="flex items-center">
                                <button
                                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                   {/* <FontAwesomeIcon icon="fas " /> */}
                                   <FontAwesomeIcon icon={["fas", "fa-user"]} />
                                    <Link
                                        to="/login"
                                    > Login </Link>
                                </button>
                            </li>
                            <li className="flex items-center">
                                <button
                                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                   <FontAwesomeIcon icon="fas fa-user-plus" />
                                    <Link
                                        to="/signup"
                                    > Register </Link>
                                </button>
                            </li>
                                    </div>
                                    : <li className="flex items-center">
                                    <button
                                        className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => firebaseConfig.auth().signOut()}
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                        <Link
                                            to="/"
                                        > Sign out </Link>
                                    </button>
                                </li>
                            }
            </ul>
            </div>
        </div>
      </div>
    </header>
  )
}
