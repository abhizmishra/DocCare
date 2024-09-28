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
} from "../src/pages/index.js";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointment" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </div>
  );
}

export default App
