import React, { useState, useEffect } from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const CustomLineChart = (props) => {
    const { data, x = 'date', y = 'total' } = props;

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis dataKey={x} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={y} stroke="#8884d8" strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;
