import React from "react";
import {
    Route,
    BrowserRouter,
    Navigate,
    Routes
} from "react-router-dom";
import Home from "./view/page/dasboard";
import AdminDashboard from "./view/page/admindashboard"
import FormParse from "./view/page/admindashboard/form";


const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
                <Route path="/admin-dashboard/resume-info" element={<FormParse/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute