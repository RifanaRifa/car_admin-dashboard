import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import mileStaticsData from "../assets/dummy-data/mileStatics";


const Chart = () => {
    return (

        <ResponsiveContainer width="100%">
            <BarChart data={mileStaticsData}>
                <XAxis dataKey="name" stroke="#2884ff" />
                <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff" barSize={30} />
                <Tooltip wrapperClassName="tooltip_style" cursor={false} />

            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;