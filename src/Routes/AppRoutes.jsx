import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../Layout/HeaderLayout";
import HeaderNoneLayout from "../Layout/HeaderNoneLayout";



import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Location from "../pages/Location";
import PatientLogin from "../pages/PatientLogin";
import ForgotPassword from "../pages/ForgotPassword";
import OnlineResult from "../pages/OnlineResult";
import AdminLogin from "../pages/AdminLogin";
import AdminUploadResult from "../pages/AdminUploadResult";




const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Location" element={<Location/>} />
        </Route>
      
        <Route element={<HeaderNoneLayout />}>
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        <Route path="/PatientLogin" element={<PatientLogin/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/OnlineResult" element={<OnlineResult/>} />
        <Route path="/AdminUploadResult" element={<AdminUploadResult/>} />

        

       </Route>

    </Routes>
  );
};

export default AppRoutes;