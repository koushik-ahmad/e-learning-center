// import React from 'react';
// import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const Chart = ({ statistic }) => {
//     const { id, name, logo, total } = statistic;
//     console.log(total);
//     const data = [
//         {
//             name: "Page A",
//             pv: 8
//         },
//         {
//             name: "Page B",
//             pv: 9
//         },
//         {
//             name: "Page C",
//             pv: 8
//         },
//         {
//             name: "Page D",
//             pv: 11
//         },
//     ];

//     return (
//         <div>
//             <h2>This BarChart {total}</h2>
//             <BarChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 10,
//                     right: 0,
//                     left: 100,
//                     bottom: 10
//                 }}
//                 barSize={20}
//             >
//                 <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
//             </BarChart>
//         </div>
//     );
// };

// export default Chart;