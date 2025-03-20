import React from "react";
import { Routes , Route, Navigate } from "react-router-dom";

// components
import AuthProvider from "../components/Authorization/Auth";
// views
import Login from "../views/Login.js";

const Auth = () => {
    return (
        <>  <AuthProvider>
          {/* <Navbar transparent /> */}
          <main>
            <section className="relative w-full h-full py-40 min-h-screen">
              {/* <div
                className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/register_bg_2.png").default + ")",
                }}
              ></div> */}
              <Routes>
                <Route path="/auth/login" exact component={Login} />
                {/* <Route path="/auth/register" exact component={Register} /> */}
                <Navigate from="/auth" to="/auth/login" />
              </Routes >
              {/* <FooterSmall absolute /> */}
            </section>
          </main>
          </AuthProvider>
        </>
      );

}
export default Auth;