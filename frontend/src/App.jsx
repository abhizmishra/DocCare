import React from 'react'
import { Routes,Route, } from 'react-router-dom'
import {
  Home,
  Doctors,
  Login,
  MyAppointments,
  Appointment,
  Myprofile,
  Contact,
  About,
} from "../src/pages/index.js";
import Navbar from "./componetns/Navbar.jsx";

const App = () => {
  return (
    <div className="   mx-4 sm:mx-[10%] overflow-x-hidden overflow-y-hidden ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App
