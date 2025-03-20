import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom";
import { ScrollToTop } from './components/Landing/scroll-to-top'

// layouts
import Auth from "./layouts/Auth.js";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from './layouts/Landing/home'
import { AuthProvider } from "./components/Authorization/Auth.js";
//
import './views/style.css'
function App() {

  return (
   <>
  
   <BrowserRouter>
    <ScrollToTop>
    <AuthProvider>
        <Routes >
        
          {/* add routes with layouts */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          {/* add routes without layouts */}
          {/* <Route path="/landing" exact component={Landing} /> */}
          {/* <Route path="/profile" exact component={Profile} /> */}
          {/* <Route path="/" exact component={Index} /> */}
          {/* add redirect for first page */}
          {/* <Navigate from="*" to="/" /> */}
      
        </Routes >
        </AuthProvider>
      </ScrollToTop>
    </BrowserRouter> 
      {/* <Navigate from="*" to="/login" component={Login} /> */}
      {/* <Login/> */}
     
   </>
  );
}

export default App;
