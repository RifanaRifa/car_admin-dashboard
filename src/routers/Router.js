import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SellCar from '../pages/SellCar';
import Settings from '../pages/Settings';
import Bookings from '../pages/Bookings';

const Router = () => {
    return (

        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" element={<Dashboard />} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="sell-car" element={<SellCar />} />
            <Route path="settings" element={<Settings />} />

        </Routes>

    );
};

export default Router;