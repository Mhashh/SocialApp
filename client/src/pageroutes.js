import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup";
import SigninPage  from "./pages/signin";
import App from "./App"
import NavMenu from "./components/navmenu"
const PageRoutes = function() {
  return (
    <BrowserRouter>
        <NavMenu/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="signin" element={<SigninPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes