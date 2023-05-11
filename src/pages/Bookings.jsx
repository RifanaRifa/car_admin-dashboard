import React from 'react'
import "../styles/bookings.css";
import CarSet from '../components/UI/CarSet';
import carData from "../assets/dummy-data/booking-cars";
import bookingCars from "../assets/dummy-data/booking-cars.js";
import { useState } from 'react';


const Bookings = () => {





    const [bookingData, setBookingData] = useState(bookingCars);

    const handleFilter = e => {

        const filterValue = e.target.value


        if (filterValue === "all") {
            const filteredProducts = bookingCars.map(item => item.category)
            setBookingData(filteredProducts);
        }

        if (filterValue === "toyota") {
            const filteredProducts = bookingCars.filter(item => item.category === "Toyota")
            setBookingData(filteredProducts);
        }

        if (filterValue === "bmw") {
            const filteredProducts = bookingCars.filter(item => item.category === "Bmw")
            setBookingData(filteredProducts);
        }

        if (filterValue === "audi") {
            const filteredProducts = bookingCars.filter(item => item.category === "Audi")
            setBookingData(filteredProducts);
        }


    };

    return (
        <div className="bookings">
            <div className="booking_wrapper">
                <h2 className="booking_title">Booking</h2>

                <div className="filter_widget-wrapper">
                    <div className="filter_widget-01">
                        <select>
                            <option value="New">New</option>
                            <option value="Popular">Popular</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                    </div>

                    <div className="filter_widget-01">
                        <select onChange={handleFilter}>
                            <option value="all">All </option>
                            <option value="toyota">Toyota</option>
                            <option value="bmw">Bmw</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>

                <div className="booking_car-list">
                    {bookingData?.map((item) => (
                        <CarSet item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bookings;