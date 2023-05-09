import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Chart from './Chart';

const Statistics = () => {
    const statisticsData = useLoaderData();
    const statistics = statisticsData.data;
    const [id, total] = statistics;
    // console.log(statistics);
    console.log(total);
    const data = [
        {
            name: "Assignment 1",
            mark: 8
        },
        {
            name: "Assignment 2",
            mark: 9
        },
        {
            name: "Assignment 3",
            mark: 8
        },
        {
            name: "Assignment 4",
            mark: 11
        },
    ];
    return (
        <div>
            <h2 className='text-center text-xl font-semibold py-4'>Total Quiz</h2>
            <div style={{ width: 1000, height: 450 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 50,
                            right: 0,
                            left: 90,
                            bottom: 20
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="mark" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* {
                statistics.map(statistic => <Chart
                    key={statistic.id}
                    statistic={statistic}
                ></Chart>)
            } */}
        </div>
    );
};

export default Statistics;