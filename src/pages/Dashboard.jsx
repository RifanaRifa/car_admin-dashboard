import React from 'react'
import "../styles/dashboard.css";
import Cards from '../components/reusecard/Cards';
import Chart from '../chart/Chart';
import CarStateChart from '../chart/CarStateChart';
import RecommendCarCard from '../components/UI/RecommendCarCard';
import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
    title: "Total Cars",
    totalNumber: 750,
    icon: "ri-police-car-line",
};

const tripObj = {
    title: "Daily Trips",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
};
const clientObj = {
    title: "Clients Annually",
    totalNumber: '85k',
    icon: "ri-user-line",
};

const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 2167,
    icon: "ri-timer-flash-line",
};



const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard_wrapper">
                <div className="dashboard_cards">

                    <Cards item={carObj} />
                    <Cards item={tripObj} />
                    <Cards item={clientObj} />
                    <Cards item={distanceObj} />
                </div>

                <div className="statics">
                    <div className="stats">
                        <h3 className='stats_title'>Miles Statistics</h3>
                        <Chart />
                    </div>

                    <div className="stats">
                        <h3 className='stats_title'>Car Statistics</h3>
                        <CarStateChart />
                    </div>
                </div>

                <div className="recommend_cars-wrapper">
                    {recommendCarsData.map((item) => (
                        <RecommendCarCard item={item} key={item.id} />
                    ))

                    }

                </div>





            </div>
        </div>
    );
};

export default Dashboard;