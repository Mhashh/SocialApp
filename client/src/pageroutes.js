import React from "react";
import { BrowserRouter ,Routes, Route,useNavigate } from "react-router-dom";
import SignupPage from "./pages/signup";
import SigninPage  from "./pages/signin";
import App from "./App"
import AccountActivationPage from "./pages/accountactivation";

const PageRoutes = function() {
  
  return (
    <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="signin" element={<SigninPage/>}/>
            <Route path="auth/activate/:authtoken" element={<AccountActivationPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes